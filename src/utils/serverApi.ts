import { Champion, ChampionDetail } from "@/types/Champion";
import { Item } from "@/types/Item";

const ONE_DAY_SECONDS = 60 * 60 * 24;

//최신 버전 가져오기
async function getLatestVersion(): Promise<string> {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json",
    );
    if (!res.ok) throw new Error("Failed to fetch versions");
    const data = await res.json();
    return data[0];
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
  }
}

// 이미지 정보 가져오기
function getItemImageUrl(version: string, imageFileName: string): string {
  return `https://ddragon.leagueoflegends.com/cdn/${version}/img/item/${imageFileName}`;
}

async function createItemsWithImage(
  items: Record<string, Item>,
  version: string,
) {
  const updatedItems: Record<string, Item> = {};

  Object.keys(items).forEach((itemName) => {
    const item = items[itemName];
    const imageUrl = getItemImageUrl(version, item.image.full);
    updatedItems[itemName] = { ...item, imageUrl };
  });

  return updatedItems;
}

// 챔피언 정보 가져오기
export async function fetchChampionList(): Promise<Record<string, Champion>> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: ONE_DAY_SECONDS,
        },
      },
    );
    if (!res.ok) throw new Error("Failed to fetch champions");
    const data = await res.json();
    return data.data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
  }
}

// 챔피언 상세정보 가져오기
export async function fetchChampionDetail(
  id: string,
): Promise<{ version: string; data: ChampionDetail }> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
      {
        next: {
          revalidate: ONE_DAY_SECONDS,
        },
      },
    );
    if (!res.ok) throw new Error("Failed to fetch champions detail");
    const data = await res.json();
    if (!data.data[id]) throw new Error(`Champion ${id} not found`);
    return { version, data: data.data[id] };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
  }
}

// 아이템 정보 가져오기
export async function fetchItemList(): Promise<Record<string, Item>> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/item.json`,
      {
        cache: "force-cache",
      },
    );
    if (!res.ok) throw new Error("Faild to fetch items");
    const data = await res.json();
    const items = data.data;
    return await createItemsWithImage(items, version);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("An unknown error occurred");
  }
}
