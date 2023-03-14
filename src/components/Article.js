import React from "react";  

const Article = ({article})=>{
    return(
        <li className="li">
            <h3><a href={article.url}>{article.title}</a></h3>
            {article.score>50 ? <p className="green">Score: {article.score}</p> : <p className="red">Score: {article.score}</p>}
            <p><i>by: {article.by}</i></p>
            { article.text ? <p>{article.text.slice(0,250)}</p>: <p></p>}
            
        </li>
    )
}

export default Article;