import { GiDogBowl } from "react-icons/gi";
import { GiCoalPile } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
import { TbPigMoney } from "react-icons/tb";
import { motion } from "framer-motion";

export const Donate = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section id="donate"
            className="w-full self-center 
        gap-10 
        flex items-center 
        justify-between 
        p-8 mx-auto
        flex-col py-20 lg:px-10
        text-justify">

            <div className="md:max-w-[1080px] max-w-[720px] flex flex-col z-30">

                <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-protest text-orange1-1 pb-4 lg:pb-12 text-4xl" >
                    Não pode adotar agora?
                </motion.h2>

                <div className="py-8 text-3xl relative text-justify font-bold text-black-2">
                    <motion.p
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="my-6 text-2xl">
                        Existem outras maneiras de ajudar nosso trabalho. Seja com doação de ração, areia para as caixas dos gatos, ajuda com consultas veterinárias e medicamentos, com uma doação financeira ou até mesmo com seu tempo, toda ajuda é bem vinda.
                    </motion.p>

                    <motion.p
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="my-6 text-2xl">
                        Toda contribuição ajuda! Juntos, podemos garantir que nenhum animalzinho fique para trás e que todos recebam o cuidado e o carinho que merecem.
                    </motion.p>

                    <motion.p
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="my-6 text-2xl">
                        Para ajudar, é só entrar em contato pelo mesmo número do pix.
                    </motion.p>
                </div>


                <div className="pt-4 z-40">
                    <motion.ul
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        className="flex items-center justify-between 
                    w-full flex-wrap min-h-96 
                    gap-4
                    font-mono text-start
                    lg:flex-col 
                    md:h-[16rem]
                    md:justify-around
                    md:gap-2
                    ">

                        { }

                        <motion.li
                            variants={container}
                            className="
                        flex items-center text-3xl
                        sm:max-w-60
                        md:max-w-72
                        ">
                            <div className="bg-offWhite-4 p-4 rounded-md min-h-[188px] flex flex-col justify-between">
                                <div className="gap-4">
                                    <FaUserDoctor className="bg-offWhite-1 rounded-full p-2" size={60} color={"#2b357d"} />
                                </div>
                                <h3 className="text-lg font-bold my-2">Ajuda com veterinário</h3>
                                <p className="text-base">
                                    Ajuda na higiene dos gatos e do ambiente
                                </p>
                            </div>
                        </motion.li>
                        <motion.li
                            variants={container}
                            className="
                            min-w-[311px]
                        flex items-center  text-3xl gap-8
                        sm:max-w-60
                        md:max-w-72
                        ">
                            <div className="bg-offWhite-4 p-4 rounded-md min-h-[188px] flex flex-col justify-between">
                                <div className="gap-4">
                                    <GiDogBowl size={60} color={"#2b357d"} className="bg-offWhite-1 rounded-full p-2" />
                                </div>
                                <h3 className="text-lg font-bold my-2">Ração para cão ou gato</h3>
                                <p className="text-base">
                                    São muitas bocas para alimentar
                                </p>
                            </div>

                        </motion.li>
                        <motion.li
                            variants={container}
                            className="
                        flex items-center text-3xl gap-8
                        sm:max-w-60
                        md:max-w-72
                        ">
                            <div className="bg-offWhite-4 p-4 rounded-md min-h-[188px] flex flex-col justify-between">
                                <div className="gap-4">
                                    < GiCoalPile size={60} color={"#2b357d"} className="bg-offWhite-1 rounded-full p-2" />
                                </div>
                                <h3 className="text-lg font-bold my-2">Areia para gato</h3>
                                <p className="text-base">
                                    Ajuda na higiene dos gatos e do ambiente
                                </p>
                            </div>

                        </motion.li>
                        <motion.li
                            variants={container}
                            className="
                        flex items-center  text-3xl gap-8
                        sm:max-w-60
                        md:max-w-72
                        ">
                            <div className="bg-offWhite-4 p-4 rounded-md min-h-[188px] flex flex-col justify-between">
                                <div className="gap-4">
                                    <TbPigMoney size={60} color={"#2b357d"} className="bg-offWhite-1 rounded-full p-2" />
                                </div>
                                <h3 className="text-lg font-bold my-2">
                                    Qualquer quantia é bem vinda
                                </h3>

                                <p className="text-base">
                                    PIX: (61) 99999-9999
                                </p>
                            </div>

                        </motion.li>

                    </motion.ul>
                </div>

            </div>
        </section>
    )
}