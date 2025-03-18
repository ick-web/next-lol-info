import ChampionList from "@/components/champions/ChampionList";
import { Champion } from "@/types/Champion";
import { fetchChampionList } from "@/utils/serverApi";
import React from "react";

async function fetchChampionListData() {
  const data = await fetchChampionList();
  const champions: Champion[] = Object.values(data);
  return champions;
}

//ISR
export default async function ChampionPage() {
  const champions = await fetchChampionListData();

  return (
    <>
      <h2 className="mt-7 px-10 text-2xl font-semibold text-red-400">
        챔피언 목록
      </h2>
      <ChampionList champions={champions} />
    </>
  );
}
