import React from 'react'

const Jobs = () => {

  const jobsdetails = [
    {
      "name":"uiux developer",
      "location":"kolkata",
      "department":"it",
      "job-type":"full time",
      "role":"private"
    },

     {
      "name":"frontend developer",
      "location":"mumbai",
      "department":"it",
      "job-type":"part time",
      "role":"private"
    },

     {
      "name":"backend developer",
      "location":"kolkata",
      "department":"it",
      "jobtype":"full time",
      "role":"private"
    },
  ];



  return <>
  <div>
    {
      jobsdetails.map(x=>(
        <ul>
          <li>{x.name}</li>
          <li>{x.location}</li>
          <li>{x.department}</li>
          <li>{x.jobtype}</li>
          <li>{x.role}</li>
        </ul>
      ))
    }



  </div>
  
  
  
  </>
}

export default Jobs