import { getAllItems } from "@/db/queries";
import HeroSection from "./components/HeroSection";
import ItemCard from "./components/ItemCard";
import Sidebar from "./components/Sidebar";

export default async function Home() {
    const items = await getAllItems();
    return (
        <main>
            <HeroSection />
            <section className="container py-8">
                <div className="grid grid-cols-12 py-4">
                    <Sidebar />
                    <div class="col-span-12 md:col-span-9">
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 justify-items-center">
                            {items.map((item) => (
                                <ItemCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
