import React from "react";
import Article from "./Article";

const Display = ({articles})=>{
    const article = articles.map((single)=>{
        return <Article key={single.id} article={single}/>

    })
    return(
        <>
        {articles.length ? null : <h3>No results found. Please search again.</h3>}
            <ul>
                {article}
            </ul>
        </>
    )
}

export default Display;