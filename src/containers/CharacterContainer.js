import React, {Component} from 'react'
import CharacterSelector from '../components/CharacterSelector.js'
import CharacterDetail from '../components/CharacterDetail.js'

class CharacterContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      characters: [],
      selectedCharacterId: ""
    }
    this.changeSelectedCharacterId = this.changeSelectedCharacterId.bind(this)
    // this.getSelectedCharacter = this.getSelectedCharacter.bind(this)
    this.addIdsToAllCharacters = this.addIdsToAllCharacters.bind(this)
  }

  addIdsToAllCharacters(characters){
    return characters.map((character, index) => {
      return {
        ...character,
        id: `${index}`
      }
    })
  }
  componentDidMount(){
    const url = "http://hp-api.herokuapp.com/api/characters/"
    fetch(url)
      .then(res => res.json())
      .then(characters => {
        const charactersWithIds = this.addIdsToAllCharacters(characters)
        this.setState({characters: charactersWithIds})
      })
      .catch(err => console.error)
  }

  changeSelectedCharacterId(id){
    this.setState({ selectedCharacterId: id})
  }

  getSelectedCharacter(){
    const selectedCharacter = this.state.characters.find( character => {
      return character.id === this.state.selectedCharacterId
    })
    return selectedCharacter
  }

  render(){
    return (
      <div>
        <h2> Characters </h2>
        <CharacterSelector characters={this.state.characters} onCharacterSelect={this.changeSelectedCharacterId}/>
        <h3> Selected Character Details: </h3>
        <CharacterDetail character={ this.getSelectedCharacter()}/>
      </div>
    )
  }
}

export default CharacterContainer
