import React from 'react';
import Resource from './Resource';

const ShowCat = () => {
    const webURL = 'https://dog.ceo/api/breeds/image/random/50';
    
    const render =  (data)=>{
        if(data.loading===false)//if not received data
            return null;

        console.log();
    }
    return (
        <div>
            <h1>show</h1>
            <Resource path={webURL}/>
        </div>
    )
}

export default ShowCat;