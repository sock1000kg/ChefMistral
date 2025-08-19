import {InferenceClient} from '@huggingface/inference'

const SYSTEM_PROMPT = `
You are a recipe assistant that always responds in clean Markdown format. Do not include unnecessary backticks or code blocks. Structure your response with:

## Recipe Title  
### Ingredients  
- ingredient list  
### Instructions  
1. steps...

Keep formatting clean and readable in markdown.
`

const hf = new InferenceClient(import.meta.env.VITE_HF_ACCESS_TOKEN)

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(", ")
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (err) {
        console.error(err.message)
    }
}