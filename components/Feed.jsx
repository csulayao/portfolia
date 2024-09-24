"use client";

import { useState, useEffect } from 'react'

import PromptCard from './PromptCard';

const PromptCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard 
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}

    </div>
  )
}

const Feed = () => {
  const [posts, setPosts] = useState([]);

  //Search States
  const [searchText, setSearchText] = useState('');
  const [searchTimeout, setSeachTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

useEffect(() => {
  const fetchPosts = async () => {
    const response = await fetch('/api/works');
    const data = await response.json();

    setPosts(data);
  }
  fetchPosts();
}, []);

  const filterPrompts = (searchText) => {
    const regx = new RegExp(searchText, "i")
    return posts.filter(
      (item) =>
        regx.test(item.creator.username) ||
        regx.test(item.tag) ||
        regx.test(item.prompt)
    )
  }

  const handleSearchChange = (e) => {
    //e.preventDefault;
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    //method to debounce
    setSeachTimeout(
      setTimeout(() => {
        const searchResults = filterPrompts(e.target.value);
        setSearchedResults(searchResults)
      }, 500)
    )
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  }

  return (
    <section className="feed">
      <form className="relative w-full flex flex-col flex-center items-center">
        <input 
          type="text" 
          placeholder="Search for a project or a skill" 
          value={searchText} 
          onChange={handleSearchChange}
          required
          className="search_input peer" />
      </form>
      {searchText ? (
        <PromptCardList 
        data={searchedResults}
        handleTagClick={handleTagClick}
      />
      ) : (
      <PromptCardList 
        data={posts}
        handleTagClick={handleTagClick}
      />
      )}
    </section>
  )
}

export default Feed