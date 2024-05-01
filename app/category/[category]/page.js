import ItemCard from "@/app/components/ItemCard";
import { getItemsByCategory } from "@/db/queries";

const CategoryPage = async ({ params: { category } }) => {
    const itemCategory = decodeURIComponent(category);
    const items = await getItemsByCategory(itemCategory);

    return (
        <main>
            <section className="container py-8">
                <div>
                    <h3 className="font-semibold text-xl">{itemCategory}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                        {items.map((item) => (
                            <ItemCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CategoryPage;
