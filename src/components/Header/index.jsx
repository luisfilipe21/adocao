import { motion } from "framer-motion";
import logo from "../../public/assets/logo.svg";

export const Header = () => {


    return (
        <header className="px-8 mx-auto">

            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
                className="md:max-w-[1080px] max-w-[720px]
             m-auto w-full flex justify-between items-center z-50"
            >
                <div className="mr-8" id="top">
                    <figure >
                        <img src={logo} className="max-h-28 max-w-28 md:h-28" />
                    </figure>
                </div>

                <div className="w-[720px] relative">
                    <nav>
                        <ul className="w-full flex flex-col items-end sm:items-center sm:flex-row sm:justify-evenly  gap-2 font-protest tracking-wide">
                            <li className="uppercase hover:underline hover:underline-offset-4 text-xl font-bold text-blue-1">
                                <a href="#about">
                                    Sobre
                                </a>
                            </li>

                            <li className="uppercase hover:underline hover:underline-offset-4 text-xl font-bold text-blue-1">
                                <a href="#pets">
                                    Adoção
                                </a>
                            </li>

                            <li className="uppercase hover:underline hover:underline-offset-4 text-xl font-bold text-blue-1">
                                <a href="#donate">
                                    Apoie
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div>

        </header>
    )
}