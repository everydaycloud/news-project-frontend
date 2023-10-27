import { useState } from 'react';
import {useNavigate} from 'react-router-dom';


const SortingDropdown = () => {

const navigate = useNavigate();
const [path, setPath] = useState('')

//cannot finish due to backend restrictions!!!
//different dropdowns, one query at a time??
//then navigate() takes us there 
//then api get call to all articles and then using search params manipulate the data
//display results below
// let path = '/api/articles'

const date = [{sortBy: 'asc', url: '/api/articles?sort_by=date-asc'}, {sortBy: 'desc', url: '/api/articles?sort_by=date-desc'}]
const commentCount = [{sortBy: 'asc', url: '/api/articles?sort_by=votes-asc'}, {sortBy: 'desc', url: '/api/articles?sort_by=votes-desc'}]
const votes = [{sortBy: 'asc', url: '/api/articles?sort_by=votes-asc'}, {sortBy: 'desc', url: '/api/articles?sort_by=votes-desc'}]


const handleSelectChange = (e) => {
    setPath(e.target.value)
    navigate(path)
  };

  return (
    <>
    <section>
    <select id="date-dropdown" value={path} onChange={handleSelectChange}>
    <option value="">Select from dropdown</option>
    {date.map((option, index) => (
      <option key={index} value={option.url}>
        {option.sortBy} 
      </option>
    ))}
  </select>

    <select id="votes-dropdown" value={path} onChange={handleSelectChange}>
    <option value="">Select from dropdown</option>
    {commentCount.map((option, index) => (
      <option key={index} value={option.url}>
        {option.url} 
      </option>
    ))}
  </select>

    <select id="comment-dropdown" value={path} onChange={handleSelectChange}>
    <option value="">Select from dropdown</option>
    {votes.map((option, index) => (
      <option key={index} value={option.url}>
        {option.url} 
      </option>
    ))}
  </select>
  </section>
  </>
  );
}

export default SortingDropdown