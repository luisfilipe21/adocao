import { motion } from "framer-motion";
import { Pet } from "./Pet";

export const Pets = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    }



    return (
        <section id="pets"
            className="w-full m-auto
             pb-16 
             flex items-center 
             justify-between flex-col
            lg:pb-20
            lg:px-10
            bg-offWhite-1
            
      ">
            <div className="flex justify-start w-full max-w-[1080px] pt-8 px-4">
                <motion.h2 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="font-protest text-purple-1 pb-12 text-4xl" >
                    Pets para adoção
                </motion.h2>
            </div>

            <div className="max-w-[1080px] px-3  z-40">
                <motion.ul
                variants={container}
                initial="hidden"
                animate="show" 
                className="flex gap-4 flex-wrap">
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                </motion.ul>
            </div>
        </section>
    )
}