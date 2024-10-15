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
       p-8 mx-auto bg-offWhite-1
        flex-col py-20 lg:px-10">

            <div className="md:max-w-[1080px] max-w-[720px]">
                <div>
                    <h2 className="font-roboto pb-4 text-3xl" >
                        Não pode adotar agora?
                    </h2>
                </div>

                <div className="py-4">
                    <p className="my-4">
                        Pode ajudar de outras maneiras!
                    </p>

                    <p className="my-4">
                        Seja com doação de ração, areia para as caixas dos gatos, ajuda com consultas veterinárias e medicamentos, com uma doação financeira ou até mesmo com seu tempo, se quiser vir dar uma força.
                    </p>

                    <p className="my-4">
                        Qualquer contribuição é mais que bem-vinda! Juntos, podemos garantir que nenhum animalzinho fique para trás e que todos recebam o cuidado e o carinho que merecem.
                    </p>

                    <p className="my-4">
                        Se quiser ajudar de alguma forma, é só entrar em contato pelo mesmo número do pix. Toda ajuda faz a diferença!
                    </p>
                </div>



                <div className="pt-8">
                    <h3 className="font-roboto pb-12 text-2xl">
                        Maneiras de ajudar:
                    </h3>

                    <ul className="flex items-center justify-evenly flex-wrap gap-8 h-96">
                        <li className="flex items-center  text-3xl gap-4">
                            <SiPix size={80} /> Pix: (61) 99999-9999
                        </li>
                        <li className="flex items-center text-3xl gap-4">
                            <GiDogBowl size={80} /> Ração para cão ou gato
                        </li>
                        <li className="flex items-center text-3xl gap-4">
                            < GiCoalPile size={80} /> Areia para gato
                        </li>
                        <li className="flex items-center text-3xl gap-4">
                            <FaUserDoctor size={80} />  Ajuda com veterinário
                        </li>
                    </ul>
                </div>
                
            </div>
        </section>
    )
}