import React from "react";
import { ClaudeRecipe } from "./ClaudeRecipe";
import { IngredientsList } from "./IngredientsList";
import { getRecipeFromMistral } from "../../ai";

export function Main() {
    const [ingredients, setIngredient] = React.useState([])
    const [recipe, setRecipe] = React.useState("")
    const recipeSection = React.useRef(null)

    React.useEffect(() => {
        if(recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    },[recipe])

    //Add new ingredient to list
    function Submit(formData){
        const newIn = formData.get("ingredient")
        setIngredient(prevIngredients => [...prevIngredients, newIn])
    }

    async function getRecipe(){
        const recipeMarkdown = await getRecipeFromMistral(ingredients)
        setRecipe(recipeMarkdown)
    }


    return (
        <main>
            <form className="add-ingredient-form" action={Submit}>
                <input 
                    type="text"
                    placeholder="e.g oregano"
                    aria-label="Add ingredient"
                    name="ingredient" 
                />
                <button>+ Add ingredient</button>
            </form>

            {ingredients.length > 0 ? 
                <IngredientsList 
                    ref={recipeSection}
                    ingredients={ingredients} 
                    getRecipe={getRecipe}/> : null}

            {recipe && <ClaudeRecipe recipe={recipe}/>}
        </main>
    )
}