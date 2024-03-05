import { CapsuleWithoutRedChance } from "../../helpers/chance";
import { itemType } from "../../helpers/item-type";

export default class RandomCapsule {
    getRandomWithoutRed = () => {
        const ran = Math.random();
        if (ran < CapsuleWithoutRedChance.BLUE) return itemType.BLUE;
        else if (ran < CapsuleWithoutRedChance.PURPLE) return itemType.PURPLE;
        else if (ran < CapsuleWithoutRedChance.PINK) return itemType.PINK;
        else return CapsuleWithoutRedChance.BLUE;
    };
}
