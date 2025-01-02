import { useContext } from "react";
import close from "../../public/assets/close.svg"
import { MdOutlineHealthAndSafety, MdPets } from "react-icons/md";
import { TfiRulerAlt } from "react-icons/tfi";
import { SlMustache } from "react-icons/sl";
import { PetsContext } from "../../provider";
import { IoIosBowtie } from "react-icons/io";
import clsx from "clsx";
import { PiCat, PiDogFill } from "react-icons/pi";

export const Modal = () => {

    const { closeModal, petInfoModal } = useContext(PetsContext);

    console.log(petInfoModal)
    return (
        <div className="w-full h-full fixed inset-0 flex items-center justify-center">
            <div className="absolute my-auto w-[500px] h-[500px] bg-white1-1 rounded-xl shadow-2xl">
                <img src={close} onClick={closeModal} className="cursor-pointer absolute top-5 right-6" />

                <div className="flex flex-col items-center justify-center h-full">
                    <div className="h-2/3 w-full">
                        <div className={clsx(`bg-cover bg-no-repeat bg-center w-full h-full rounded-t-xl`)} style={{ backgroundImage: `url(${petInfoModal.img})` }}></div>
                    </div>

                    <div className="flex flex-col flex-wrap items-center justify-center h-1/3">
                        <div className="flex items-center justify-evenly mb-4">
                            {petInfoModal.race == "Cão" ? <PiDogFill size={30} /> : <PiCat size={30} />}
                            <h3 className="text-xl font-semibold ">{petInfoModal.nome}</h3>
                        </div>
                        <div className="flex gap-4">

                            <div className="flex flex-col items-start gap-2 px-8">
                                <div className="flex items-center gap-1 py-2">
                                    {petInfoModal.sexo == "Macho" ? <SlMustache size={30} color="#2b357d" /> : <IoIosBowtie size={30} color="#f841f2b1" />}
                                    <p className="font-semibold text-lg">{petInfoModal.sexo}</p>
                                </div>
                                <div className="flex items-center gap-1 2">
                                    <MdOutlineHealthAndSafety size={30} color="#c82d07" />
                                    <p className="font-semibold text-lg">
                                        {petInfoModal.castrado}
                                    </p>
                                </div>

                            </div>

                            <div className="flex flex-col items-start gap-2 px-8">

                                <div className="flex items-center gap-1 py-2">
                                    <TfiRulerAlt size={30} color="#213B44ff" />
                                    <p className="font-semibold text-lg">
                                        {petInfoModal.tamanho}
                                    </p>
                                </div>

                                <div className="flex items-center gap-1 ">
                                    <MdPets size={30} color="#918e8a" />
                                    <p className="font-semibold text-lg">
                                        {petInfoModal.idade}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}