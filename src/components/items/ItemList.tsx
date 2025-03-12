import { Item } from "@/types/Item";
import ItemCard from "./itemCard";

type ItemListProps = { items: Item[] }

export default function ItemList({ items }: ItemListProps){
    return (
        <ul className="p-8 gap-5 grid grid-cols-6">
            {items.map((item) => (
                <ItemCard key={item.name} item={item}/>
            ))}
        </ul>
    )
}

