// HEADER IMAGE IMPORTS
import Appetizer from '../imgs/header/appetizers_header_lg.jpg'

// MENU ITEM IMAGE IMPORTS
// --- Appetizers
import LettuceWraps from '../imgs/food/appetizers/lettuce_wraps_lg.jpg'
import BBQPorkSpareRibs from '../imgs/food/appetizers/pork_spare_ribs_lg.jpeg'
import NorthPorkSpareRibs from '../imgs/food/appetizers/north_pork_spare_ribs_lg.jpeg'
import CrispyGreenBeans from '../imgs/food/appetizers/crispy_green_beans_lg.jpg'
import Edamame from '../imgs/food/appetizers/edamame_lg.jpg'
import TempuraCalamari from '../imgs/food/appetizers/tempura_calamari_lg.jpg'
import ChiliGarlicGreenBeans from '../imgs/food/appetizers/chili_garlic_green_beans_lg.jpeg'
import KungPaoBrusselSprouts from '../imgs/food/appetizers/kung_pao_brussel_sprouts_lg.jpeg'
import DynamiteShrimp from '../imgs/food/appetizers/dynamite_shrimp_lg.jpeg'

const MenuData = [
    // MENU SECTIONS AS OBJECTS
    // - Appetizers
    {
        section: 'Appetizers',
        header_img: Appetizer,
        items: [
            {
                title: `Chang's Lettuce Wraps`,
                description: `A secret family recipe and our signature dish. Enough said.`,
                spicy: false,
                vegetarian: true,
                gfo: true,
                options: `Protein options: Chicken GFO, Vegetarian`,
                img: LettuceWraps
            },
            {
                title: `BBQ Pork Spare Ribs`,
                description: `Slow braised pork ribs with a tangy Asian barbecue sauce, smoked tableside`,
                spicy: false,
                vegetarian: false,
                gfo: false,
                options: null,
                img: BBQPorkSpareRibs

            },
            {
                title: `Northern-Style Pork Spare Ribs`,
                description: `Slow-braised pork ribs with dry rub five-spice seasoning, smoked tableside`,
                spicy: false,
                vegetarian: false,
                gfo: false,
                options: null,
                img: NorthPorkSpareRibs
            },
            {
                title: `Crispy Green Beans`,
                description: `Tempura-battered, signature spicy dipping sauce`,
                spicy: false,
                vegetarian: false,
                gfo: false,
                options: null,
                img: CrispyGreenBeans
            },
            {
                title: `Edamame`,
                description: `Steamed to order, tossed with kosher salt`,
                spicy: false,
                vegetarian: true,
                gfo: false,
                options: null,
                img: Edamame
            },
            {
                title: `Tempura Calamari`,
                description: `Crisp calamari, hunan salt, wasabi aioli dipping sauce`,
                spicy: false,
                vegetarian: false,
                gfo: false,
                options: null,
                img: TempuraCalamari
            },
            {
                title: `Chili-Garlic Green Beans`,
                description: `Fiery red chili sauce, fresh garlic, Sichuan preserves`,
                spicy: true,
                vegetarian: true,
                gfo: false,
                options: null,
                img: ChiliGarlicGreenBeans
            },
            {
                title: `Kung Pao Brussels Sprouts`,
                description: `Wok-charred Brussels sprouts, peanuts, chili pods, Kung Pao sauce`,
                spicy: true,
                vegetarian: false,
                gfo: false,
                options: null,
                img: KungPaoBrusselSprouts
            },
            {
                title: `Dynamite Shrimp`,
                description: `Tempura-battered, tossed with a sriracha aioli`,
                spicy: true,
                vegetarian: false,
                gfo: false,
                options: null,
                img: DynamiteShrimp
            },
        ]
    }

]

export default MenuData