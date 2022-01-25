import React, {useEffect} from 'react';
import './App.css';
import {Tablo} from "./Tablo/Tablo";
import {Buttons} from "./Buttons/Buttons";
import {useState} from "react";


function App() {

    let [count, setCount] = useState<number>(0)

    useEffect( () => {
        let countAcString = localStorage.getItem('getKey')
        if (countAcString) {
            let newCount = JSON.parse(countAcString)
            setCount(newCount)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('getKey', JSON.stringify(count))
    }, [count])


    const clearLocalStorage = () => {
        localStorage.clear()
        setCount(0)
    }



    return (
        <div className="App">
            <div className="Counter">
                <Tablo count={count}/>
                <Buttons setCount={setCount} count={count}/>
                <button onClick={clearLocalStorage}>clearLocalStorage</button>
            </div>
        </div>
    );
}

export default App;
