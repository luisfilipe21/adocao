import { motion } from "framer-motion"

import img from "../../public/assets/teste.png"

export const About = () => {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    return (

        <section id="about"
            className="w-full
        gap-10 pb-16 
        px-1 flex items-center 
        justify-between 
        p-8 mx-auto 
        flex-col lg:py-24 lg:px-8
        
      ">

            <motion.div className="lg:max-w-7xl md:max-w-4xl max-w-lg px-4 mb-12 z-50">

                <div className="md:flex justify-around lg:gap-10">
                    <motion.div
                        className="flex flex-col justify-stretch 
                        text-justify items-center 
                        md:flex-row 
                        text-black-2 sm:text-2xl text-lg font-bold 
                        mt-8 mx-2 sm:mx-0 gap-4
                    ">

                        <motion.div className="flex">
                            <motion.figure
                                className="flex justify-center flex-wrap gap-4 w-full mb-8 px-8 sm:px-0 md:mb-0 md:flex-row md:items-center">
                                
                                <img src={img} alt="" className="w-28 h-36 md:w-40 md:h-48 lg:w-56 lg:h-80 rounded-md " />
                                <img src={img} alt="" className="w-28 h-36 md:w-40 md:h-48 lg:w-56 lg:h-80 rounded-md " />
                                <img src={img} alt="" className="w-28 h-36 md:w-40 md:h-48 lg:w-56 lg:h-80 rounded-md " />
                                <img src={img} alt="" className="w-28 h-36 md:w-40 md:h-48 lg:w-56 lg:h-80 rounded-md " />
                            </motion.figure>
                        </motion.div>

                        <div className="gap-6">
                            <motion.h1 className="text-5xl font-protest text-center pb-16 pt-8 md:text-start text-orange1-1
                            lg: ">
                                Nessa casa, nenhum bichinho fica de fora.
                            </motion.h1>
                            <motion.p
                                initial={{ x: -20 }}
                                whileInView={{ x: 0 }}
                                transition={{ duration: 0.4 }}
                                className="max-w-[850px] pb-6 font-medium"
                            >
                                Todos que aparecem na nossa porta, sejam gatos ou cachorros, são recebidos de braços abertos. Cada animalzinho que chega abandonado, machucado ou precisando de cuidados encontra aqui um lar temporário cheio de amor e dedicação.
                            </motion.p>

                            <motion.p
                                initial={{ x: -10 }}
                                whileInView={{ x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="max-w-[950px] font-medium"
                            >
                                A gente cuida de cada um com carinho, garantindo que recebam tratamento veterinário, alimentação e tudo o que precisam até estarem prontos para adoção. Hoje, já temos mais de 20 bichinhos esperando por uma família que os adote e dê a eles o lar que tanto merecem.
                            </motion.p>
                        </div>

                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}