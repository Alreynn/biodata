import { useState } from 'react'
import './App.css'

const App = () => {
    const [openBio, setOpen] = useState(false);
    const Open = () => {
        setOpen(!openBio)
    }
    return (
        <div className="container">
            <p>Biodata</p>
            <button onClick={Open}>↓</button>
            {Open && <p>Lorem ipsum dolor sit amet</p>};
        </div>
    )
}

export default App