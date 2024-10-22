import { motion } from "framer-motion";
import logo from "../../assets/logo.svg";

export const Footer = () => {
    return (
        <footer className="p-8 mx-auto  ">
            <motion.div
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
                className="md:max-w-[960px] max-w-[720px]
             m-auto w-full flex justify-between items-center">

                <div>
                    <a href="#top">
                        <img src={logo} alt="" className="max-h-28 max-w-28 md:h-28" />
                    </a>
                </div>

                <div className="w-[720px]">
                    <nav>
                        <ul className="w-full flex flex-col items-end md:items-center md:flex-row md:justify-evenly gap-2 font-playfair">
                            <li className="uppercase hover:underline hover:underline-offset-4 text-base font-bold text-purple-1">
                                <a href="#about">
                                    Sobre
                                </a>
                            </li>

                            <li className="uppercase hover:underline hover:underline-offset-4 text-base font-bold text-purple-1">
                                <a href="#pets">
                                    Adoção
                                </a>
                            </li>

                            <li className="uppercase hover:underline hover:underline-offset-4 text-base font-bold text-purple-1">
                                <a href="#donate">
                                    Apoie
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </motion.div>
        </footer>
    )
}