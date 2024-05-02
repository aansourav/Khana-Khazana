import Description from "@/app/components/RecipeDetails/Description";
import ImageSection from "@/app/components/RecipeDetails/Image";
import Steps from "@/app/components/RecipeDetails/Steps";
import { getItemById } from "@/db/queries";

export async function generateMetadata({ params }) {
    const id = params?.id;
    const item = await getItemById(id);

    return {
        title: `Khana Khazana | ${item?.name}`,
        openGraph: {
            images: [item?.thumbnail],
        },
    };
}

const DetailsPage = async ({ params: { id } }) => {
    const item = await getItemById(id);
    return (
        <main>
            <section>
                <div className="grid grid-cols-12 container gap-8 justify-items-center">
                    <ImageSection image={`${item?.image}?${item?.name}`} />
                    <Description item={item} />
                </div>
            </section>
            <section>
                <div className="container py-12">
                    <h3 className="font-semibold text-xl py-6">
                        How to Make it
                    </h3>
                    <div>
                        {item?.steps.map((step, index) => (
                            <div key={index} className="step">
                                <h3>Step {index + 1}</h3>
                                <Steps step={step} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default DetailsPage;
