import { getBlurData } from "@/utils/blur-generator";
import Image from "next/image";

const ImageSection = async ({ image, name }) => {
    const { base64 } = await getBlurData(image);
    return (
        <div className="col-span-12 md:col-span-6">
            <Image
                src={image}
                alt={name}
                className="w-full h-full rounded-lg object-contain"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL={base64}
            />
        </div>
    );
};

export default ImageSection;
