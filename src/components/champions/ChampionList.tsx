import { Champion } from "@/types/Champion";
import ChampionCard from "./ChampionCard";

type ChampionListProps = { champions: Champion[] };

export default function ChampionList({ champions }: ChampionListProps) {
  return (
    <ul className="grid grid-cols-1 gap-5 p-10 md:grid-cols-3 lg:grid-cols-6">
      {champions.map((champion) => (
        <ChampionCard key={champion.key} champion={champion} />
      ))}
    </ul>
  );
}
