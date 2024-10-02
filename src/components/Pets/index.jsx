import { MdPets } from "react-icons/md";
import { BsHouseDoorFill } from "react-icons/bs";
import { PiHouseLineBold } from "react-icons/pi";
import { Pet } from "./Pet";

export const Pets = () => {
    return (
        <section>
            <div>
                <MdPets/>
                <BsHouseDoorFill/>
                <PiHouseLineBold/>

            </div>

            <ul>
                <Pet/>
                <Pet/>
                <Pet/>
                <Pet/>
            </ul>
        </section>
    )
}