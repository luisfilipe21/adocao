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
                    <h2 className="font-roboto pb-12 text-3xl" >
                        Não pode adotar agora?
                    </h2>
                </div>

                <div >
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
                        Se quiser ajudar de alguma forma, é só entrar em contato. Toda ajuda faz a diferença!
                    </p>
                </div>



                <div >
                    <h3>
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
                <div className="flex flex-col justify-center items-center">
                    <p>
                        Ficamos em uma chácara próxima ao Itapoã
                    </p>

                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1614.613048762986!2d-47.67788885380609!3d-15.739568241836615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a1116c4e5bdfb%3A0x5d82e5921c5f42e7!2sCol%C3%B4nia%20Espiritual%20Esperan%C3%A7a%20e%20Consola%C3%A7%C3%A3o%20Francisco%20de!5e0!3m2!1spt-BR!2sbr!4v1728340772548!5m2!1spt-BR!2sbr"
                        width="400"
                        height="250"
                        style={{ border: 'none' }}
                    >
                    </iframe>
                </div>
            </div>
        </section>
    )
}