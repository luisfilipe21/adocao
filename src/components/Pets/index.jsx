import { motion } from "framer-motion";
import { Pet } from "./Pet";
import { petData } from "../../data";
import { PetsContext } from "../../provider";
import { useContext } from "react";

export const Pets = () => {
    // const { petInfoModal, getPetInfo } = useContext(PetsContext);
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }

    // console.log(petInfoModal)

    return (
        <section id="pets"
            className="w-full m-auto
             pb-16 
             flex items-center 
             justify-between flex-col
            lg:pb-20
            lg:px-10
            bg-blue-1
            
      ">
            <div className="flex justify-start w-full max-w-[1080px] pt-8 px-4">
                <motion.h2
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="font-protest text-orange1-1 pb-12 text-4xl font-bold" >
                    Pets para adoção
                </motion.h2>
            </div>

            <div className="max-w-[1080px] px-3  z-40">
                <motion.ul
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="flex gap-4 flex-wrap">

                    {petData.map((pet, id) => {
                        return (
                            <Pet key={id} pet={pet} />
                        )
                    })}
                </motion.ul>
            </div>
        </section>
    )
}