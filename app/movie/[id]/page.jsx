import React from 'react'

const MovieDetails = ({params}) => {
  const {id} = params;
  console.log(id)
  return (
    <div>
      <h1>This is movie details page</h1>
    </div>
  )
}

export default MovieDetails
