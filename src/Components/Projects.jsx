import React from 'react'
import Project from './utils/Project.jsx'
import Title from './utils/Title.jsx'
import {projectslist} from '../data/data'
const Projects = () => {
  return (
    <>
     <div id='projects' className=' w-full h-[90%] bg-gradient-to-br from-gray-200 to-gray-100'>
    <div className='flex items-center justify-center  flex-col'>
        <Title title={'Project'} text={'Here, you will find some of the personal and group projects that I have created, with each project containing its own source code.'}/>
       
    </div>
   
   {projectslist.map((val, i)=>{
    return <div className='grid items-center justify-items-center' key={i}>
      <Project val={val} key={i}/>
      <div className='m-3 bg-purple-700 rounded w-[90%] h-1'><h1></h1></div>
      </div>
   })}
      
    


    </div>
    </>
  )
}

export default Projects