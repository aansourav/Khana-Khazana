import ItemCard from "@/app/components/ItemCard";
import Loading from "@/app/components/Loading";
import { getItemsByCategory } from "@/db/queries";
import { dbConnect } from "@/services/mongo";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
    const category = decodeURIComponent(params?.category);
    return {
        title: `Khana Khazana | ${category} Items`,
        description: `Find all the ${category} items here`,
    };
}

const CategoryPage = async ({ params: { category } }) => {
    const itemCategory = decodeURIComponent(category);
    await dbConnect();
    const items = await getItemsByCategory(itemCategory);

    return (
        <main>
            <section className="container py-8">
                <div>
                    <h3 className="font-semibold text-xl">{itemCategory}</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-8 justify-items-center">
                        <Suspense fallback={<Loading />}>
                            {items.map((item) => (
                                <ItemCard key={item.id} item={item} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default CategoryPage;
