import ReactMarkdown from 'react-markdown' 

export function ClaudeRecipe(props) {
    return (
        <section className='suggested-recipe-container' aria-live='polite'>
            <h1>Chef Mistral recommends:</h1>
            <ReactMarkdown children={props.recipe}/>
        </section>
    )
}

