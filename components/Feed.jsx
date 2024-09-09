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
    const response = await fetch('/api/prompt');
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

  return (
    <section className="feed">
      <form className="relative w-full flex flex-col flex-center items-center">
        <input 
          type="text" 
          placeholder="Search for a portfolio or a username" 
          value={searchText} 
          onChange={handleSearchChange}
          required
          className="search_input peer" />
      {/* <button
        type="submit"
        className="mt-5 px-5 py-1.5 text-md bg-primary-orange rounded-full text-white"
        onClick={handleSearchChange}
      >
        Search
      </button> */}
      </form>
      {searchText ? (
        <PromptCardList 
        data={searchedResults}
        handleTagClick={() => {}}
      />
      ) : (
      <PromptCardList 
        data={posts}
        handleTagClick={() => {}}
      />
      )}
    </section>
  )
}

export default Feed