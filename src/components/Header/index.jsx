import { delay, motion } from "framer-motion";
import logo from "../../assets/logo.svg";

export const Header = () => {

    return (
        <header id="home" className="px-8 mx-auto bg-offWhite-1 ">

            <motion.div
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
                className="md:max-w-[1080px] max-w-[720px]
             m-auto w-full flex justify-between items-center">
                <div className="mr-8">
                    <figure >
                        <img src={logo} className="h-28" />
                    </figure>
                </div>

                <div className="w-[720px]">
                    <nav>
                        <ul className="w-full flex justify-evenly items-center font-playfair">
                            <li className="hover:underline hover:underline-offset-4">
                                <a href="#about">
                                    Sobre
                                </a>
                            </li>

                            <li className="hover:underline hover:underline-offset-4">
                                <a href="#pets">
                                    Pets para adoção
                                </a>
                            </li>

                            <li className="hover:underline hover:underline-offset-4">
                                <a href="#donate">
                                    Apoie nossa causa
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div>

        </header>
    )
}