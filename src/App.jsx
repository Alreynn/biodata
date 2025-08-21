import { useState } from 'react'
import './App.css'

const App = () => {
    const [openBio, setOpen] = useState(false);
    const Open = () => {
        setOpen(!openBio)
    }
    return (
        <div className="container">
            <div className="space-between">
                <p>Biodata</p>
                <button onClick={Open}>↓</button>
            </div>
            {openBio ? <p>Lorem ipsum dolor sit amet</p> : ""}
        </div>
    )
}

export default App