import './App.css';
import React, {useState, useEffect} from 'react';
import Display from './components/Display';
import Search from './components/Search';

function App() {
  // useState 1 to store page references from Hacker News. 
  const [pageRefs, setPageRefs] = useState([]);
  // useState 2 to store articles from Hacker News. 
  const [articles, setArticles] = useState([]);
  // Save search term from input form. 
  const [masterArticles, setMasterArticles] = useState([]);

  async function fetchPageRefs (){
    const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
    const data = await res.json();
    const newData = data.slice(0,30)
    setPageRefs(newData);
  };

  async function fetchArticles(){
    const articlePromises = pageRefs.map(async (page)=>{
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${page}.json`)
      return await res.json()
    })
    const newArticles = await Promise.all(articlePromises);
    setArticles(newArticles);
    setMasterArticles(newArticles);
  }

  useEffect(()=>{
    fetchPageRefs()
  }, []);

  useEffect(()=>{
    fetchArticles();
  }, [pageRefs]);

  const submitSearch = (word)=>{
    setArticles(masterArticles);
    const newArticles = masterArticles.filter((article)=>{
      return article.title.includes(word)
    })
    setArticles(newArticles);
  }


  return (
    <div className="App">
      <h1>Hacker News</h1>
      <hr/>
      <Search submitSearch={submitSearch}/>
      <Display articles={articles}/>
    </div>
  );
}

export default App;
