import React, { useState, useEffect } from 'react';
import {Jumbotron} from 'react-bootstrap';

function FetchAPI() {

    const [businessLogicData, setBSData] = useState('')
    const [gameserviceData, setGSData] = useState('')

    async function fetchBusinessLogicData() {
        const res = await fetch('http://localhost:8080/welcome')
        const data = res.text()
        data.then(value =>{setBSData(value)});
        
    }

    async function fetchGameServiceData() {
        const res = await fetch('http://localhost:8081/welcome')
        const data = res.text()
        data.then(value =>{setGSData(value)});
    }

    useEffect(() => {
         fetchBusinessLogicData();
         fetchGameServiceData();
         }, [])

    return (  
    
        <div id="jumbo-div">
            
                <h1 id="page-title">{businessLogicData}</h1>
                <h1 id="page-title">{gameserviceData}</h1>
        
        </div>
    )
}

export default FetchAPI;