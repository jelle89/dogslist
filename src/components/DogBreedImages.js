import React from 'react'
import { Link } from 'react-router-dom'


export default function DogBreedImages (props) {
    const { images } = props
  return (
    <div className="dog-breed-images">
      <h1>Dogs Breed Images 
         his page will show images of the {props.breed} 

      </h1>


      <Link to="/">Go back to the index</Link>
      { images && images.map(url => <img src={ url } alt="Dog" />) }
        { images && 'Loading...' }
    </div>
  )
}