import Recipecard from "./recipecard";
import recipes from "./recipesarray";

export default function Recipes() {
    return (
        <section className="py-12 px-14">
            <h1 className="font-merienda text-center text-4xl">Our Popluar Recipes</h1>
            <div className="flex flex-wrap items-center justify-center gap-5 pt-5">
                {
                    recipes.map((recipe, index) => {
                        return <Recipecard
                            key={index}
                            image={recipe.image}
                            time={recipe.time}
                            status={recipe.status}
                            name={recipe.name}
                            description={recipe.description}
                        />
                    })
                }
            </div>
        </section>
    )
}
