"use client";

import ChampionList from "@/components/champions/ChampionList";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const RotationPage = () => {
  const {
    data: freeChampions,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["ChampionRotation"],
    queryFn: async () => {
      const response = await fetch("/api/rotation");
      if (!response.ok) throw new Error("Failed to fetch champion rotation");
      const data = await response.json();
      return data || [];
    },
  });

  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1 className="text-2xl text-red-400 font-semibold px-10 mt-7">이번 주 무료로 플레이 가능한 챔피언들을 확인해보세요!</h1>
      {freeChampions?.length > 0 && <ChampionList champions={freeChampions} />}
    </>
  );
};

export default RotationPage;
