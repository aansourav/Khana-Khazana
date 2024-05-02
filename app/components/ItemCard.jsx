import Image from "next/image";
import Link from "next/link";

const ItemCard = ({ item }) => {
    const { name, rating, author, thumbnail } = item;
    return (
        <Link
            className="card shadow-md px-3 py-2 rounded-md"
            href={`/details/${item.id}`}
        >
            <Image
                src={thumbnail}
                className="rounded-md "
                alt={name}
                width={300}
                height={160}
            />
            <h4 className="my-2">
                Chef{" "}
                {author.split(" ").length > 2
                    ? author.split(" ")[1]
                    : author.split(" ")[0]}
                &apos;s {name}
            </h4>
            <div className="py-2 flex justify-between text-xs text-gray-500">
                <span>⭐️ {rating}</span>
                <span>By: {author}</span>
            </div>
        </Link>
    );
};

export default ItemCard;
