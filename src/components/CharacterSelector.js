import React from 'react'

const CharacterSelector = (props) => {
  const options = props.characters.map( character => {
    return <option value={character.name} key={character.name}> {character.name}</option>
  })

  function handleChange(event){
    props.onCharacterSelect(event.target.value)
  }

  return(
    <select id="character-selector" onChange={handleChange} defaultValue="default">
      <option disabled value="default"> Choose a character... </option>
      { options }
    </select>
  )

}

export default CharacterSelector
