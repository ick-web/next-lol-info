"use client";

import { getChampionRotationData } from "@/utils/riotApi";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const RotationPage = () => {
  const { data } = useQuery({
    queryKey: ["ChampionRotation"],
    queryFn: getChampionRotationData,
  });

  return <div>{JSON.stringify(data)}</div>;
};

export default RotationPage;
