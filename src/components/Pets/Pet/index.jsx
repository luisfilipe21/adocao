import { MdPets } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { PiDogFill } from "react-icons/pi";
import { SlMustache } from "react-icons/sl";
import { IoIosBowtie } from "react-icons/io";
import { IoPawOutline } from "react-icons/io5";
import { delay, motion } from "framer-motion"

import foto from '../../../assets/teste.png';

export const Pet = () => {

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    }



    return (
        <motion.li
            whileHover={{ y: -20 }}
            variants={item}
            className="mx-auto relative">
            <div
                className="flex flex-col items-center 
                justify-center p-4 rounded-lg my-4
                border border-offWhite-1 
                hover:bg-offWhite-3 hover:shadow-3xl
            ">
                <div className="mb-8">
                    <figure className="w-44">
                        <img src={foto} alt="" className="w-full" />
                    </figure>
                </div>

                <div className="flex flex-col items-center">

                    <div className="flex items-center gap-2">
                        <PiDogFill width={80} className="text-purple-1 " />
                        <h2 className="text-2xl my-4">Nome do Pet</h2>
                    </div>

                    <div className="flex gap-1">

                        <div className="flex flex-col items-start gap-2">
                            <div className="flex items-center gap-1">
                                <SlMustache width={80} className="text-purple-1 gap-2" />
                                <p>Macho</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <MdOutlineHealthAndSafety width={40} className="" />
                                <p>
                                    Castrado
                                </p>
                            </div>

                        </div>

                        <div className="flex flex-col items-start gap-2">

                            <div className="flex items-center gap-1">
                                <MdPets width={40} />
                                <p>
                                    Porte médio
                                </p>
                            </div>

                            <div className="flex items-center gap-1">
                                <MdPets width={40} />
                                <p>
                                    Adulto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div
                className="absolute top-0 -left-4 flex items-center gap-2 bg-purple-1 rounded-lg px-2">
                <IoPawOutline size={22} className="text-white1-1" />
                <motion.span className="text-white1-1 font-semibold">Estou disponível</motion.span>
            </motion.div>
        </motion.li>
    )
}