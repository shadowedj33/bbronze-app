import { Link } from "react-router-dom";
import { sjolie, ingredientList } from "../assets";

export default function ProductsPage() {
    return (
        <div className="products-page">
            <div className="flex justify-center">
                <div className="font-dscript text-center text-6xl pt-4 font-bold text-lblue">
                    Sjolie Tanning Solution
                </div>
                <img src={sjolie} alt="sjolie" height={90} width={90} />
                
            </div>
            <p className="text-lg text-center font-mplus font-bold text-dbrown">
                SJOLIE is everything I look for and more in a brand, offering a safe, clean alternative to sun tanning. 
                Focusing on preserving your skin&apos;s integrity and youthfulness, while still providing the perfect, natural glowing tan. 
                All products are vegan with naturally derived ingredients. Pure organic DHA derived from sugar beets and sugar cane to ensure a natural, lasting color. 
                Complemented by aloe vera to add and lock in moisture, and Vitamin C for its anti-aging properties.
                Free of cruelty, gluten, parabens, erythrulose, urea, and minerals.
            </p>
            <div>
                <a href={ingredientList} rel="noreferrer" target="_blank">
                    Ingredient List
                </a>
            </div>
        </div>
    );
}