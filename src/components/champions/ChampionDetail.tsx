import type { ChampionDetail } from "@/types/Champion";
import Image from "next/image";

type ChampionDetailProps = {
  championDetail: ChampionDetail;
  version: string;
};

export default async function ChampionDetail({
  championDetail,
  version,
}: ChampionDetailProps) {
  return (
    <section className="flex h-full flex-col items-center justify-center">
      <div className="mx-auto mt-7 max-w-4xl rounded-md bg-gray-500 p-8">
        <div>
          <header className="mb-8 text-left">
            <h1 className="text-2xl font-extrabold text-white">
              {championDetail.name}
            </h1>
            <p className="text-xl text-gray-200">{championDetail.title}</p>
            <p className="font-semibold text-gray-300">
              난이도 {championDetail.info.difficulty}
            </p>
          </header>
          <div className="mb-8 flex items-center justify-between gap-8">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championDetail.image.full}`}
              width={220}
              height={220}
              alt={championDetail.id}
              className="border-gray-200 shadow-lg"
            />
          </div>
          <div className="space-y-3 text-lg text-gray-800">
            <h3 className="text-2xl font-semibold text-gray-800">스탯</h3>
            <ul className="flex flex-col text-lg text-gray-800">
              <li className="flex gap-2">
                <span className="font-semibold">공격력</span>
                <span>{championDetail.info.attack}</span>
              </li>
              <li className="flex gap-2">
                <span className="font-semibold">방어력</span>
                <span>{championDetail.info.defense}</span>
              </li>
              <li className="flex gap-2"></li>
            </ul>
          </div>

          <p className="text-md mt-4 rounded-xl bg-black bg-opacity-30 p-4 text-gray-300 shadow-md">
            {championDetail.lore}
          </p>
        </div>
      </div>
    </section>
  );
}
