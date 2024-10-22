import { SiPix } from "react-icons/si";
import { GiDogBowl } from "react-icons/gi";
import { GiCoalPile } from "react-icons/gi";
import { FaUserDoctor } from "react-icons/fa6";

export const Donate = () => {
    return (
        <section id="donate"
            className="w-full self-center 
        gap-10 
        flex items-center 
        justify-between 
        p-8 mx-auto
        flex-col py-20 lg:px-10">

            <div className="md:max-w-[1080px] max-w-[720px] flex flex-col">
                <div>
                    <h2 className="font-protest text-orange1-1 pb-12 text-4xl" >
                        Não pode adotar agora?
                    </h2>
                </div>

                <div className="py-4 text-xl relative">
                    <h2 className="my-4">
                        Pode ajudar de outras maneiras!
                    </h2>

                    <p className="my-4 text-2xl w-1/2">
                        Seja com doação de ração, areia para as caixas dos gatos, ajuda com consultas veterinárias e medicamentos, com uma doação financeira ou até mesmo com seu tempo, se quiser vir dar uma força.
                    </p>

                    <p className="my-4 text-2xl w-1/2">
                        Qualquer contribuição é mais que bem-vinda! Juntos, podemos garantir que nenhum animalzinho fique para trás e que todos recebam o cuidado e o carinho que merecem.
                    </p>

                    <p className="my-4 text-2xl w-1/2">
                        Se quiser ajudar de alguma forma, é só entrar em contato pelo mesmo número do pix. Toda ajuda faz a diferença!
                    </p>
                    <div className="absolute w-1/2 h-full top-0 left-96 flex flex-col justify-around opacity-60 text-8xl text-purple-1">
                        <h3>DOE AMOR</h3>
                        <h3>DOE RAÇÃO</h3>
                        <h3>DOE TEMPO</h3>
                    </div>
                </div>


                <div className="pt-8">
                    <h3 className="font-roboto pb-12 text-2xl">
                        Maneiras de ajudar:
                    </h3>

                    <ul className="flex items-center justify-between w-full flex-wrap gap-8 h-96 font-inter">
                        <li className="flex items-center text-3xl gap-4">
                            <SiPix size={80} color="#F8AC41ff" /> Pix: (61) 99999-9999
                        </li>
                        <li className="flex items-center text-3xl gap-4">
                            <GiDogBowl size={80} color="#653D96ff" /> Ração para cão ou gato
                        </li>
                        <li className="flex items-center text-3xl gap-4">
                            < GiCoalPile size={80} color="#F8AC41ff" /> Areia para gato
                        </li>
                        <li className="flex items-center text-3xl gap-4">
                            <FaUserDoctor size={80} color="#653D96ff" />  Ajuda com veterinário
                        </li>
                    </ul>
                </div>

            </div>
        </section>
    )
}