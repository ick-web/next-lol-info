import { Champion } from "@/types/Champion";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = { champion: Champion };

export default function ChampionCard({ champion }: ChampionCardProps) {
  return (
    <li className="container">
      <Link href={`/champions/${champion.id}`}>
        <div className="relative flex flex-col items-center border-2 rounded-md shadow-md bg-gray-200 p-4 hover:scale-105 transition-transform duration-300">
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-black">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
              priority={true}
              width={130}
              height={130}
              alt={champion.id}
            />
          </div>
          <div className="flex flex-col mt-2 text-center">
            <h3 className="font-semibold">{champion.name}</h3>
            <p className="text-ws text-gray-500">{champion.title}</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
