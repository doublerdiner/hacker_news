import React from "react";

const Search = ({submitSearch})=>{
    const handleSubmit = (e)=>{
        e.preventDefault();
        submitSearch(e.target[0].value);
        document.querySelector('#form').reset();
    }

    return(
        <>
        <form id="form" onSubmit={handleSubmit}>
            <label htmlFor="search">Search: </label>
            <input id="search" type="text"></input>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default Search;