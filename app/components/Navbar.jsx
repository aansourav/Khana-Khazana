import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.png";
import HomeMenuText from "./HomeMenuText";
import RecipeMenuText from "./RecipeMenuText";
import SignInOut from "./SignInOut";

const Navbar = () => {
    return (
        <nav>
            <div className="container flex justify-between py-6">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="Khana Khazana Logo"
                        className="object-cover"
                        width={165}
                        height={54}
                    />
                </Link>

                <ul className="flex gap-4 text-sm text-gray-500 items-center">
                    <li className="py-2">
                        <Link href="/">
                            <HomeMenuText />
                        </Link>
                    </li>

                    <li className="py-2">
                        <Link href="/recipe">
                            <RecipeMenuText />
                        </Link>
                    </li>

                    <li className="py-2">
                        <Link href="/aboutus">About us</Link>
                    </li>

                    <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
                        <SignInOut />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
