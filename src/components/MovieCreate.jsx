import React, { useEffect, useState } from 'react'
import { movieCreateApi, movieDetailApi, movieUpdateApi } from '../services/api';

function MovieCreate({setRefreshRequired,movieId}) {

  const [movie,setMovie]=useState({title:"",director:"",year:"",language:"",runtime:"",poster:""})

  useEffect(()=>{
    getMovieDetails(movieId)
  },[movieId])

  async function getMovieDetails(movieId){
    let res= await movieDetailApi(movieId)
    console.log(res.data);
    if (res.status>199 && res.status<300){
      setMovie(res.data)
    }

  }
    
  

  async function handleSubmit(event){
    event.preventDefault()
    if(movieId){
       let res=await movieUpdateApi(movieId,movie)
      
       console.log(res);
       reSet()
       setRefreshRequired(Math.random())
       
    }
    else{
      let res=await movieCreateApi(movie)
      
      console.log(res);
      reSet()
      setRefreshRequired(Math.random())
     
    }

    
   
    
  }
  function reSet(){
    setMovie({title:"",director:"",year:"",language:"",runtime:"",poster:null})
  }
  return (
    <div>

      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 border border-3 rounded shadow p-4">
            {movieId ?<h3 className='text-center my-2'>Edit Movie </h3> : <h3 className='text-center my-2'>Add New  Movie </h3>}
            <form action="" onSubmit={handleSubmit}>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">Title</label>
                  <input
                   type="text"
                  className='form-control'
                  value={movie.title}
                  onChange={(e)=>setMovie({...movie,title:e.target.value})}
                   />
                </div>

                <div className='w-50'>
                  <label htmlFor="">director</label>
                  <input type="text"
                   value={movie.director}
                   className='form-control'
                   onChange={(e)=>setMovie({...movie,director:e.target.value})}
                    />
                </div>
              </div>
              <div className="mb-3 d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">year</label>
                  <input type="text"
                   value={movie.year}
                   className='form-control'
                   onChange={(e)=>setMovie({...movie,year:e.target.value})}
                    />
                </div>

                <div className='w-50'>
                  <label htmlFor="">Language</label>
                  <input type="text"
                  value={movie.language}
                  className='form-control'
                  onChange={(e)=>setMovie({...movie,language:e.target.value})}
                   />
                </div>
              </div>
              <div className="mb-3  d-flex gap-1">
                <div className='w-50'>
                  <label htmlFor="">runtime</label>
                  <input type="text"
                  value={movie.runtime}
                  className='form-control'
                  onChange={(e)=>setMovie({...movie,runtime:e.target.value})}
                   />
                </div>

                <div className='w-50'>
                  <label htmlFor="">poster</label>
                  <input type="file"
                   accept='image/*'
                  className='form-control'
                  onChange={(e)=>setMovie({...movie,poster:e.target.files[0]})} />
                </div>
              </div>
              <div className="mb-3">
                {movieId ? <button type='submit'>Edit</button> : <button type='submit'>Add</button>}
              </div>
            </form>
          </div>
          <div className="col-2"></div>
        </div>
      </div>


    </div>
  )
}

export default MovieCreate
