import { ChampionRotation } from "@/types/ChampionRotation";
import { apiKey, apiRequestUrl } from "@/utils/riotApi";
import { NextResponse } from "next/server";

export async function GET() {
  if (!apiKey) {
    return NextResponse.json(
      { error: "API 요청 중 에러가 발생" },
      { status: 500 },
    );
  }

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

    const data: ChampionRotation[] = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("데이터 패치 중 에러가 발생 했어요!", error);
    return NextResponse.json(
      { error: "챔피언 정보를 가지고 오는데 실패 했어요!" },
      { status: 500 },
    );
  }
}
