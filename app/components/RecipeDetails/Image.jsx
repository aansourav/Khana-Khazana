import Image from "next/image";

const ImageSection = ({ image, name }) => {
    return (
        <div className="col-span-12 md:col-span-6">
            <Image
                src={image}
                alt={name}
                className="w-full h-full rounded-lg object-contain"
                width={500}
                height={500}
            />
        </div>
    );
};

export default ImageSection;
