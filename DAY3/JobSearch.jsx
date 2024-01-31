// JobSearch.js
import React, { useState } from 'react';
import './JobSearch.css';
import NavBar from "./NavBar"
// import SideBar from "./SideBar"

const jobList = [
  { id: 1, title: 'Software Developer', location: 'City A', company: 'Tech Co.' },
  { id: 2, title: 'Web Designer', location: 'City B', company: 'Design Ltd.' },
  { id: 3, title: 'Data Analyst', location: 'City C', company: 'Data Inc.' },
  // Add more job listings as needed
];

const JobSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobList);

  const handleSearch = () => {
    const filtered = jobList.filter((job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className='job-search-container'>
        <NavBar/>
      <h1>Job Search</h1>
      <div className='search-bar'>
        <input
        className='jinput'
          type='text'
          placeholder='Search by job title'
          value={searchTerm} style={{backgroundColor:"white"}}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch} className='jbutton'>Search</button>
      </div>
      <div className='job-list'>
        {filteredJobs.map((job) => (
          <div key={job.id} className='job-item'>
            <h2>{job.title}</h2>
            <p>{job.location}</p>
            <p>{job.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearch;
