import React from 'react';
import './App.css';
import {Tablo} from "./Tablo/Tablo";
import {Buttons} from "./Buttons/Buttons";
import {useState} from "react";


function App() {

    let [count, setCount] = useState(0)

    return (
        <div className="App">
            <div className="Counter">
                <Tablo count={count}/>
                <Buttons setCount={setCount} count={count}/>
            </div>
        </div>
    );
}

export default App;
