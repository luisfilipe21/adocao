
import { Pet } from "./Pet";

export const Pets = () => {
    return (
        <section id="pets"
            className="w-full m-auto
             gap-10 pb-16 
             flex items-center 
             justify-between flex-col
            lg:pb-20 py-20
            lg:px-10
      ">
            <div className="flex justify-start w-full 
        max-w-[1080px] px-4">
                <h2 className="font-roboto pb-12 text-3xl" >
                    Pets para adoção
                </h2>
            </div>


            <div className="max-w-[1080px] px-3">
                <ul className="flex gap-4 flex-wrap">
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                    <Pet />
                </ul>
            </div>
        </section>
    )
}