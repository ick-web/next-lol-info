import { Champion } from "@/types/Champion";
import { ChampionRotation } from "@/types/ChampionRotation";
import { apiKey, apiRequestUrl } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { NextResponse } from "next/server";

export async function GET() {
  if (!apiKey) {
    return NextResponse.json(
      { error: "API 요청 중 에러가 발생" },
      { status: 500 },
    );
  }

  //로테이션 정보 가져오기
  try {
    const res = await fetch(apiRequestUrl, {
      method: "GET",
      headers: {
        "X-Riot-Token": apiKey,
      },
      next: {
        revalidate: 86400, // 하루마다 데이터를 갱신
      },
    });

    if (!res.ok) {
      throw new Error(`API 요청 실패: 상태 코드 ${res.status}`);
    }

    const data: ChampionRotation = await res.json();
    const freeChampionIds = data.freeChampionIds;

    // 챔피언 정보 가져오기
    const champions = await fetchChampionList();

    // 무료 챔피언 ID 목록과 챔피언 데이터 비교
    const freeChampionDetails = freeChampionIds.map((id) => {
      const champion = Object.values(champions).find(
        (champ: Champion) => champ.key === id.toString(),
      );
      if (champion) {
        return champion;
      }
      return null;
    });

    return NextResponse.json(freeChampionDetails);
  } catch (error) {
    console.error("데이터 패치 중 에러가 발생 했어요!", error);
    return NextResponse.json(
      { error: "챔피언 정보를 가지고 오는데 실패 했어요!" },
      { status: 500 },
    );
  }
}
