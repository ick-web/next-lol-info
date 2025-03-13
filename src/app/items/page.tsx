import ItemList from "@/components/items/ItemList";
import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import React from "react";

async function fetchItemListData() {
  const data = await fetchItemList();
  const items: Item[] = Object.values(data);
  return items;
}

export default async function ItemsPage() {
  const items = await fetchItemListData();

  return (
    <>
    <h2 className='text-2xl font-semibold px-10 mt-7 text-red-400'>아이템 목록</h2>
      <ItemList items={items} />
    </>
  );
}
