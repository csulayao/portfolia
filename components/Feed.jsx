"use client";

import { useState, useEffect } from 'react'

import WorkCard from './WorkCard';

const WorkCardList = ({data, handleTagClick}) => {
  return (
    <div className="mt-5 work_layout cursor-pointer">
      {data.map((post) => (
        <WorkCard
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

  const filterWorks = (searchText) => {
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
        const searchResults = filterWorks(e.target.value);
        setSearchedResults(searchResults)
      }, 500)
    )
  }

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterWorks(tagName);
    setSearchedResults(searchResult);
  }

  const handleClearSearch = (searchText) => {
    setSearchText('');
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
          {searchText ? (<button
              type="submit"
              className="mt-5 px-5 py-1.5 text-md bg-primary-indigo rounded-full text-white"
              onClick={handleClearSearch}
            >
            Clear Search
          </button>) : (<></>)
          }
      </form>
      {searchText ? (
        <WorkCardList 
        data={searchedResults}
        handleTagClick={handleTagClick}
      />
      ) : (
      <WorkCardList 
        data={posts}
        handleTagClick={handleTagClick}
      />
      )}
    </section>
  )
}

export default Feed