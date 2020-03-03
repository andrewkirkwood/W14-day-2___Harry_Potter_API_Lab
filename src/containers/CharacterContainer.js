import React, {Component} from 'react'

class CharacterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      selectedCharacter: ""
    }
  }

  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters"
    fetch(url)
      .then(res => res.json())
      .then(characters => this.setState({characters: characters}))
      .catch(err => console.error)
  }

  render(){
    return (
      <div>
        <h2> CharacterContainer </h2>
      </div>
    )
  }
}

export default CharacterContainer
