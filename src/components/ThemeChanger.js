import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {changeColor} from '../features/theme'

function ThemeChanger() {
    const [theme, setTheme] = useState("");
    const dispatch = useDispatch();
  return (
    <div>
        <p>
            <input type="text" onChange={(e)=>setTheme(e.target.value)}/>
            <button onClick={()=>{
                dispatch(changeColor(theme))
            }}>CHANGE COLOR</button>
        </p>
    </div>
  )
}

export default ThemeChanger