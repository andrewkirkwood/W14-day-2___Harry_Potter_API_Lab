import React, {Fragment}from 'react'

const CharacterDetail = (props) => {
  if( !props.character ){
    return null
  }
  return (
    <Fragment>
      <h3> {props.character.name} </h3>
      <ul>
        <li> {props.character.gender} </li>
      </ul>
    </Fragment>
  )
}

export default CharacterDetail
//
// "name": "Harry Potter",
// "species": "human",
// "gender": "male",
// "house": "Gryffindor",
// "dateOfBirth": "31-07-1980",
// "yearOfBirth": 1980,
// "ancestry": "half-blood",
// "eyeColour": "green",
// "hairColour": "black",
// "wand": {
// "wood": "holly",
// "core": "phoenix feather",
// "length": 11
// },
// "patronus": "stag",
// "hogwartsStudent": true,
// "hogwartsStaff": false,
// "actor": "Daniel Radcliffe",
// "alive": true,
// "image": "http://hp-api.herokuapp.com/images/harry.jpg"
