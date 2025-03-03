import { useState } from "react";


export default function Player({initialName,symbol,isActive,onChangeName}){

//Player
const [playerName,setPlayerName] = useState(initialName);
let editableplayername = <span className="player-name">{playerName}</span>
function handleChange(event){
    setPlayerName(event.target.value)
    }
//Button

const [isEditing, setIsEditing] = useState(false)
let btnCaption = "Edit"
function handleEditclick(){
    setIsEditing((editing) => !editing);
    if(isEditing){
        onChangeName(symbol,playerName)
    }
  
}
if(isEditing){
    editableplayername = <input type="text" required value={playerName} onChange={handleChange}/>
    btnCaption="Save"
}

   return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editableplayername}
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditclick}>{btnCaption}</button>
        </li>
    );
}