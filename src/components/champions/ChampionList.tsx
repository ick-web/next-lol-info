import { Champion } from "@/types/Champion";
import ChampionCard from "./ChampionCard";

type ChampionListProps = { champions: Champion[] };

export default function ChampionList({ champions }: ChampionListProps) {
  return (
    <ul className="grid grid-cols-6 p-10 gap-5">
      {champions.map((champion) => (
        <ChampionCard key={champion.key} champion={champion} />
      ))}
    </ul>
  );
}
