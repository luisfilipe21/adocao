import { motion } from "framer-motion";
import logo from "../../public/assets/logo.svg";

export const Footer = () => {


    return (
        <footer >
            <div className="px-8 pt-8 mx-auto  ">


                <motion.div
                    initial={{ y: 100 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 1 }}
                    className="md:max-w-[1080px] max-w-[720px]
             m-auto w-full flex justify-between items-center">

                    <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <ul>
                            <li>
                                <a href="#top">
                                    <img src={logo} alt="" className="max-h-28 max-w-28 md:h-28" />
                                </a>

                            </li>
                        </ul>
                    </motion.div>

                    <div className="w-[720px]">
                        <nav>
                            <ul
                                className="w-full flex flex-col items-end 
                            gap-2 font-protest tracking-wide
                            md:items-center md:flex-row md:justify-evenly">
                                <motion.li
                                    initial={{ y: 10 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="uppercase hover:underline hover:underline-offset-4 text-base font-bold text-blue-1">
                                    <a href="#about">
                                        Sobre
                                    </a>
                                </motion.li>

                                <motion.li
                                    initial={{ y: 10 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="uppercase hover:underline hover:underline-offset-4 text-base font-bold text-blue-1">
                                    <a href="#pets">
                                        Adoção
                                    </a>
                                </motion.li>

                                <motion.li
                                    initial={{ y: 10 }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.7 }}
                                    className="uppercase hover:underline hover:underline-offset-4 text-base font-bold text-blue-1">
                                    <a href="#donate">
                                        Apoie
                                    </a>
                                </motion.li>
                            </ul>
                        </nav>
                    </div>
                </motion.div>
            </div>

            <div className="bg-blue-1 mt-4 py-2">
                <div className="flex justify-between items-center text-xs text-white font-inter font-bold m-auto md:max-w-[1080px] max-w-[720px]">
                    <div>Criado por Luis Filipe Guimarães Costa</div>
                    <div>© 2024 - Casa de Resgate da Tina</div>
                </div>
            </div>
        </footer>
    )
}