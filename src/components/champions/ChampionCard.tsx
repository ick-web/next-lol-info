import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = { champion: Champion };

export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <li className="container">
      <Link href={`/champions/${champion.id}`}>
        <div className="relative flex flex-col items-center rounded-md bg-gray-900 p-4 shadow-md transition-transform duration-300 hover:scale-105">
          <div className="h-32 w-32 overflow-hidden rounded-full border-2 border-black">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
              priority={true}
              width={130}
              height={130}
              alt={champion.id}
            />
          </div>
          <div className="mt-2 flex flex-col text-center">
            <h3 className="font-semibold text-red-500">{champion.name}</h3>
            <p className="text-ws text-gray-500">{champion.title}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
