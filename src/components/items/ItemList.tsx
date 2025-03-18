import { Item } from "@/types/Item";
import ItemCard from "./itemCard";

type ItemListProps = { items: Item[] };

export default function ItemList({ items }: ItemListProps) {
  return (
    <ul className="grid grid-cols-1 gap-5 p-8 md:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </ul>
  );
}
