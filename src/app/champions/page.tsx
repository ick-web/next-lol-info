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
    <h2 className='text-2xl font-semibold px-10 mt-7 text-red-400'>챔피언 목록</h2>
    <ChampionList champions={champions}/>
    </>
  )
}

