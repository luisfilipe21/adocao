import { SiPix } from "react-icons/si";
import { GiDogBowl } from "react-icons/gi";
import { GiCoalPile } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";
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
                <div>
                    <motion.h2
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="font-protest text-orange1-1 pb-12 text-4xl" >
                        Não pode adotar agora?
                    </motion.h2>
                </div>

                <div className="py-8 text-3xl relative text-justify font-bold text-black-2">
                    <motion.p
                        initial={{ x: -10 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="my-6 text-2xl">
                        Ajude! Seja com doação de ração, areia para as caixas dos gatos, ajuda com consultas veterinárias e medicamentos, com uma doação financeira ou até mesmo com seu tempo, toda ajuda é bem vinda.
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


                <div className="pt-8 z-40">
                    <motion.h3
                        initial={{ y: -100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="font-protest text-orange1-1 pb-12 text-4xl ">
                        Maneiras de ajudar:
                    </motion.h3>

                    <motion.ul
                        variants={container}
                        initial="hidden"
                        whileInView="visible"
                        className="flex items-center justify-between 
                    w-full flex-wrap gap-8 h-96 
                    font-mono text-start
                    md:flex-col 
                    md:h-[16rem]
                    md:justify-evenly
                    ">
                        <motion.li
                            variants={container}
                            className="
                        flex items-center text-3xl gap-8
                        sm:max-w-60
                        md:max-w-72
                        ">
                            <SiPix size={60} color={"#BCB0A7"} /> Pix: (61) 99999-9999
                        </motion.li>
                        <motion.li
                            variants={container}
                            className="
                        flex items-center  text-3xl gap-8
                        sm:max-w-60
                        md:max-w-72
                        ">
                            <GiDogBowl size={60} color={"#BCB0A7"} /> Ração para cão ou gato
                        </motion.li>
                        <motion.li
                            variants={container}
                            className="
                        flex items-center  text-3xl gap-8
                        sm:max-w-60
                        md:max-w-72
                        ">
                            < GiCoalPile size={60} color={"#BCB0A7"} /> Areia para gato
                        </motion.li>
                        <motion.li
                            variants={container}
                            className="
                        flex items-center  text-3xl gap-8
                        sm:max-w-60
                        md:max-w-72
                        ">
                            <FaUserDoctor size={60} color={"#BCB0A7"} />  Ajuda com veterinário
                        </motion.li>
                    </motion.ul>
                </div>

            </div>
        </section>
    )
}