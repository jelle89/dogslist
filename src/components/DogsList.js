import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class DogsList extends Component {
  renderDogBreed(breed) {
      console.log(breed)
    return <li key={breed}>
    <Link to={ `/dog-breeds/${breed}` }>{breed}</Link>
      </li>
  }

  render() {
    const { dogBreeds } = this.props
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>
            { !dogBreeds && 'Loading...' }

             { dogBreeds && <ul>{ dogBreeds.map(this.renderDogBreed) }</ul> }
      </div>
    )
  }
}

// import React, {Component} from 'react'
// import * as request from 'superagent'

// export default class DogsList extends Component {
//     state = {dogBreeds: []}

//     componentDidMount() {
//         request
//           .get('https://dog.ceo/api/breeds/list/all')
//           .then(response => this.updateBreeds(Object.keys(response.body.message)))
//           .catch(console.error)
//       }
    
//     updateBreeds(breeds) {
//         console.log(breeds)
//         this.setState({
//             dogBreeds: breeds
//          })
//     }  

//   render() {
//       console.log(this.state)
//     return (
//       <div className="dogs-list">
//         <h1>Dogs List</h1>
//         <ul>
//         { this.state.dogBreeds.map(breed => <li key={breed}>{breed}</li>) }
//         </ul>
//       </div>
//     )
//   }
// }
