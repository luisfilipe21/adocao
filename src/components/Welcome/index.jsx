import { motion } from "framer-motion";

export const Welcome = () => {

    const text = "Resgates da Tina"
    const textSpan = text.split("")

    const textVariants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
    }

 


    return (
        <section className="h-h2 sm:h-h1" id="top">
            <div className="h-full z-40 bg-cover bg-bgImage4 bg-no-repeat relative flex justify-center items-center">
                <div className="z-50 font-extrabold text-center">
                    <motion.h1
                        initial="hidden"
                        animate="show"
                        transition={{ staggerChildren: 0.1 }}
                        className="font-protest text-orange1-1 md:px-6 z-50 text-5xl sm:text-[85px] uppercase drop-shadow-2xl">
                        {textSpan.map((character) => (
                            <motion.span
                                key={character}
                                variants={textVariants}
                                transition={{ duration: 0.5 }}>

                                {character}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>
                <div className="w-full h-full z-0 bg-purple-1 absolute top-0 opacity-20"></div>
            </div>
        </section >
    )
}