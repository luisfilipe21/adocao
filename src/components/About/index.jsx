import { motion } from "framer-motion"


export const About = () => {

    const container = {
        hidden: {opacity: 1, scale: 0},
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
        hidden: { y: 20, opacity: 0},
        visible: {
            y:0,
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
        flex-col lg:pb-10 lg:py-6 lg:px-10
        
      ">

            <motion.div className="lg:max-w-4xl md:max-w-2xl max-w-lg px-6 mb-12 z-50">
                <div className="md:flex-row lg:gap-10">

                    <motion.div 
                    
                    className="flex flex-col justify-center 
                    text-justify items-center 
                    text-black-2 text-2xl font-bold 
                    gap-6 mt-8 mx-2 sm:mx-0">
                        <motion.p 
                        initial={{x:-20}}
                        whileInView={{x:0}}
                        transition={{ duration: 0.4 }}
                        >
                            Aqui nessa casa, nenhum bichinho fica de fora. Todos que aparecem na nossa porta, sejam gatos ou cachorros, são recebidos de braços abertos. Cada animalzinho que chega abandonado, machucado ou precisando de cuidados encontra aqui um lar temporário cheio de amor e dedicação.
                        </motion.p>

                        <motion.p 
                        initial={{x:-10}}
                        whileInView={{x:0}}
                        transition={{ duration: 0.8 }}
                        >
                            A gente cuida de cada um com carinho, garantindo que recebam tratamento veterinário, alimentação e tudo o que precisam até estarem prontos para adoção. Hoje, já temos mais de 20 bichinhos esperando por uma família que os adote e dê a eles o lar que tanto merecem.
                        </motion.p>
                    </motion.div>

                </div>
            </motion.div>
        </section>
    )
}