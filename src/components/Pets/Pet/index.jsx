import { MdPets } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiCat, PiDogFill } from "react-icons/pi";
import { SlMustache } from "react-icons/sl";
import { IoIosBowtie } from "react-icons/io";
import { IoPawOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { TfiRulerAlt } from "react-icons/tfi";
import { PetsContext } from "../../../provider";
import { useContext } from "react";



export const Pet = ({ pet }) => {
    const { petInfoModal, getPetInfo } = useContext(PetsContext);

    const item = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <motion.li
            whileHover={{ y: -20 }}
            variants={item}
            onClick={() => getPetInfo(pet)}
            className="mx-auto relative cursor-pointer">
            <div
                className="flex flex-col items-center 
                justify-center p-4 rounded-lg my-4
                bg-offWhite-4
                border-offWhite-1 shadow-2xl 
                hover:bg-offWhite-5
            ">
                <div>
                    <figure className="w-44">
                        <img src={pet.img} alt="" className="rounded-lg w-full h-36" />
                    </figure>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-evenly gap-2">
                        {pet.race == "Cão" ? <PiDogFill size={30} /> : <PiCat size={30} />}
                        <h2 className="text-2xl my-4">{pet.nome}</h2>
                    </div>

                </div>
            </div>
            <motion.div
                initial={{ x: -20 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}

                className="absolute top-0 -left-4 flex items-center gap-2 bg-orange1-1 rounded-lg px-2">
                <IoPawOutline size={22} className="text-white1-1" />
                <motion.span
                    className="text-white1-1 font-semibold">Estou disponível</motion.span>
            </motion.div>
        </motion.li>
    )
}