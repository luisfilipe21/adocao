import { motion } from "framer-motion"

export const Visit = () => {
    return (
        <section className="w-full self-center 
        gap-4 
        flex items-center 
        justify-between 
        px-4 py-20 mx-auto bg-blue-1
        flex-col lg:px-10">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col justify-center items-center lg:max-w-5xl md:max-w-3xl max-w-lg  ">
                
                <p className="mb-8 text-justify font-bold text-white text-2xl mx-4">
                    Caso queiram nos visitar para conhecer os seu futuro aumigo, ficamos em uma chácara próxima ao Itapoã
                </p>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1614.613048762986!2d-47.67788885380609!3d-15.739568241836615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a1116c4e5bdfb%3A0x5d82e5921c5f42e7!2sCol%C3%B4nia%20Espiritual%20Esperan%C3%A7a%20e%20Consola%C3%A7%C3%A3o%20Francisco%20de!5e0!3m2!1spt-BR!2sbr!4v1728340772548!5m2!1spt-BR!2sbr"
                    width="350"
                    height="250"
                    style={{ border: 'none' }}
                >
                </iframe>
            </motion.div>
        </section>
    )

}