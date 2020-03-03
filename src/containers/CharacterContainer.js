import React, {Component} from 'react'
import CharacterSelector from '../components/CharacterSelector.js'

class CharacterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      selectedCharacterName: ""
    }
    this.changeSelectedCharacterName = this.changeSelectedCharacterName.bind(this)
  }

  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters"
    fetch(url)
      .then(res => res.json())
      .then(characters => this.setState({characters: characters}))
      .catch(err => console.error)
  }

  changeSelectedCharacterName(name){
    this.setState({ selectedCharacterName: name})
  }

  render(){
    return (
      <div>
        <h2> Characters </h2>
        <CharacterSelector characters={this.state.characters} onCharacterSelect={this.changeSelectedCharacterName}/>
      </div>
    )
  }
}

export default CharacterContainer
