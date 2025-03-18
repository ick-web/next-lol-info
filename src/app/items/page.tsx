import ItemList from "@/components/items/ItemList";
import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import React, { Suspense } from "react";
import Loading from "./loading";

async function fetchItemListData() {
  const data = await fetchItemList();
  const items: Item[] = Object.values(data);
  return items;
}

export default async function ItemsPage() {
  const items = await fetchItemListData();

  return (
    <>
      <h2 className="mt-7 px-10 text-2xl font-semibold text-red-400">
        아이템 목록
      </h2>
      <Suspense fallback={<Loading />}>
        <ItemList items={items} />
      </Suspense>
    </>
  );
}
