import ChampionList from '@/components/champions/ChampionList';
import { Champion } from '@/types/Champion';
import { fetchChampionList } from '@/utils/serverApi';
import React from 'react'


async function fetchChampionListData(){
  const data = await fetchChampionList();
  const champions: Champion[] = Object.values(data)
  return champions
}

//ISR
export default async function ChampionPage() {
  const champions = await fetchChampionListData()

  return (
    <>
    <ChampionList champions={champions}/>
    </>
  )
}

