import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import MovieCreate from '../components/MovieCreate'
import MovieSummary from '../components/MovieSummary'




function Index() {

  const [refreshRequired,setRefreshRequired]=useState()
  const [movieId,setMovieId]=useState()
  return (
    <div>
      <Navbar></Navbar>
      <MovieCreate setRefreshRequired={setRefreshRequired} movieId={movieId}></MovieCreate>
      <MovieSummary refreshRequired={refreshRequired} setMovieId={setMovieId}></MovieSummary>
    </div>
  )
}

export default Index
