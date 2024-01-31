// JobManagement.js
import React, { useState } from 'react';
import './PostJob.css';

const JobManagement = () => {
  const [jobs, setJobs] = useState([]);
  const [formData, setFormData] = useState({ title: '', location: '', description: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddJob = () => {
    if (!formData.title || !formData.location || !formData.description) {
      alert('Please fill in all fields.');
      return;
    }

    if (editingIndex !== null) {
      // Update existing job
      const updatedJobs = [...jobs];
      updatedJobs[editingIndex] = formData;
      setJobs(updatedJobs);
      setEditingIndex(null);
    } else {
      // Add new job
      setJobs([...jobs, formData]);
    }

    // Clear the form
    setFormData({ title: '', location: '', description: '' });
  };

  const handleEditJob = (index) => {
    setFormData(jobs[index]);
    setEditingIndex(index);
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = [...jobs];
    updatedJobs.splice(index, 1);
    setJobs(updatedJobs);
  };

  return (
    <div className='job-management-container'>
      <h1 className='posth1'>Job Management</h1>
      <div className='job-form'>
        <label htmlFor='title' className='postlabel'>Title:</label>
        <input type='text' id='title'  className='postinput' name='title'  style={{backgroundColor:"white"}} value={formData.title} onChange={handleInputChange} />

        <label htmlFor='location' className='postlabel'>Location:</label>
        <input type='text' id='location'  className='postinput' name='location' style={{backgroundColor:"white"}} value={formData.location} onChange={handleInputChange} />

        <label htmlFor='description' className='postlabel'>Description:</label>
        <textarea id='description' name='description'  className='posttextarea' style={{backgroundColor:"white"}} value={formData.description} onChange={handleInputChange}></textarea>

        <button onClick={handleAddJob}>{editingIndex !== null ? 'Update Job' : 'Add Job'}</button>
      </div>

      <div className='job-list'>
        {jobs.map((job, index) => (
          <div key={index} className='job-item'>
            <h2>{job.title}</h2>
            <p>{job.location}</p>
            <p>{job.description}</p>
            <div className='job-actions'>
              <button onClick={() => handleEditJob(index)} className='postbutton'>Edit</button>
              <button onClick={() => handleDeleteJob(index)} className='postbutton'>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobManagement;
