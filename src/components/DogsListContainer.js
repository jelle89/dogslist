import React, {Component} from 'react'
import request from 'superagent'
import DogsList from './DogsList'

export default class DogsListContainer extends Component {
  state = { dogBreeds: null }

  componentDidMount() {
    request
      .get('https://dog.ceo/api/breeds/list/all')
      .then(response => {
        const breeds = Object.keys(response.body.message)
        this.updateBreeds(breeds)
        return 
      })
      .catch(console.error)
     
  }

  updateBreeds(breeds) {
    this.setState({
      dogBreeds: breeds
    })
  }

  render() {
    console.log(this.state.dogBreeds)
    return <DogsList dogBreeds={this.state.dogBreeds} />
    
  }
}

// import React, {Component} from 'react'
// import request from 'superagent'
// import DogsList from './DogsList'

// export default class DogsListContainer extends Component {
//   state = { dogBreeds: [] }

//   componentDidMount() {
//     request
//       .get('https://dog.ceo/api/breeds/list/all')
//       .then(response => {
//         const breeds = Object.keys(response.body.message)
//         this.updateBreeds(breeds)
//         return 
//       })
//       .catch(console.error)
     
//   }

//   updateBreeds(breeds) {
//     this.setState({
//       dogBreeds: breeds
//     })
//   }

//   render() {
//     console.log(this.state.dogBreeds)
//     return <DogsList dogBreeds={this.state.dogBreeds} />
    
//   }
// }