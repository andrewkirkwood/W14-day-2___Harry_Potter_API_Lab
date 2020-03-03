import React, {Component} from 'react'
import CharacterSelector from '../components/CharacterSelector.js'
import CharacterDetail from '../components/CharacterDetail.js'

class CharacterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      selectedCharacterName: ""
    }
    this.changeSelectedCharacterName = this.changeSelectedCharacterName.bind(this)
    this.getSelectedCharacter = this.getSelectedCharacter.bind(this)
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

  getSelectedCharacter(){
    return this.state.characters.find( character => character.name === this.state.selectedCharacterName)
  }

  render(){
    return (
      <div>
        <h2> Characters </h2>
        <CharacterSelector characters={this.state.characters} onCharacterSelect={this.changeSelectedCharacterName}/>
        <h3> Selected Character Details: </h3>
        <CharacterDetail character={ this.getSelectedCharacter() }/>
      </div>
    )
  }
}

export default CharacterContainer
