import bgImg from "../../assets/bg.png";


export const About = () => {

    return (

        <section id="about"
            className="w-full
        gap-10 pb-16 
        px-1 flex items-center 
        justify-between 
       p-8 mx-auto bg-offWhite-1
        flex-col lg:pb-10 lg:py-6 lg:px-10
      ">
            <div className="lg:max-w-4xl md:max-w-2xl max-w-lg px-6 mb-12">
                <div className="flex justify-center items-center font-extrabold">
                    <h1 className="font-playfair text-center pb-12 text-7xl">
                        Resgates da Tina
                    </h1>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-10">

                    <div className="flex flex-col justify-center text-center items-center text-xl gap-4 my-8 lg:w-[65%]">
                        <p>
                            Aqui nessa casa, nenhum bichinho fica de fora. Todos que aparecem na nossa porta, sejam gatos ou cachorros, são recebidos de braços abertos. Cada animalzinho que chega abandonado, machucado ou precisando de cuidados encontra aqui um lar temporário cheio de amor e dedicação.
                        </p>

                        <p>
                            A gente cuida de cada um com carinho, garantindo que recebam tratamento veterinário, alimentação e tudo o que precisam até estarem prontos para adoção. Hoje, já temos mais de 20 bichinhos esperando por uma família que os adote e dê a eles o lar que tanto merecem.
                        </p>
                    </div>

                    <figure className="hidden sm:flex ">
                        <img src="src/assets/teste.png" alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}