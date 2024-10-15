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
                    <a href="#home">
                        <img src={logo} alt="" className="h-28" />
                    </a>
                </div>

                <div className="w-[720px]">
                    <nav>
                        <ul className="w-full flex flex-col items-end font-playfair">
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
        </footer>
    )
}