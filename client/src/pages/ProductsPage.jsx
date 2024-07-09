import { ingredientList, sjoliesunless, skintype } from "../assets";

export default function ProductsPage() {
    return (
        <div className="products-page">
            <div className="flex justify-center">
                <img src={sjoliesunless} alt="sjolie" />
                
            </div>
            <p className="text-lg text-center font-mplus font-bold text-dbrown">
                SJOLIE is everything I look for and more in a brand, offering a safe, clean alternative to sun tanning. 
                Focusing on preserving your skin&apos;s integrity and youthfulness, while still providing the perfect, natural glowing tan. 
                All products are vegan with naturally derived ingredients. Pure organic DHA derived from sugar beets and sugar cane to ensure a natural, lasting color. 
                Complemented by aloe vera to add and lock in moisture, and Vitamin C for its anti-aging properties.
                Free of cruelty, gluten, parabens, erythrulose, urea, and minerals.
            </p>
            <br />
            <div className="login-button">
                <a href={ingredientList} rel="noreferrer" target="_blank">
                    Ingredient List
                </a>
            </div>
            <br />
            <div className="login-button">
                <a href={skintype} rel="noreferrer" target="_blank">
                    Skin Type Guide
                </a>
            </div>
        </div>
    );
}