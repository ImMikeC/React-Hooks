import React, { useState, useRef } from 'react';
import './styles/global.css';
import Gallery from './components/Gallery'

const App = () => {

    const [name, setName] = useState("Luis")

    const [languages, setLanguages] = useState([
        "PHP", "Java", "JavaScript", "Python", "C#"
    ])

    const [selectedLang, setSelectedLang] = useState("Java")

    let inputSearchRef = useRef();

    return (

        <>
            <h1>REACT APP</h1>
            <div className="w-50">
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control mb-3" />
                <input type="text" ref={inputSearchRef} className="form-control mb-3" />
                <button className='btn btn-primary' onClick={() => {
                    console.log(inputSearchRef.current.value)
                    inputSearchRef.current.type = "password";
                }}>
                    Search
                </button>
                <select value={selectedLang} onChange={(e) => setSelectedLang(e.target.value)} className="form-select mb-3">
                    <option value="">Select Lenguage</option>
                    {
                        languages.map((lang) => <option key={lang}>{lang}</option>)
                    }
                </select>
            </div>

            <Gallery />

        </>
    )
}

export default App;
