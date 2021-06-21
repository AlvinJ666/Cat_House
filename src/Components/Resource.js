import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Resource = ({path,render }) => {
    const initialState={
        trans:[],
        loading:true,
        error:null
    }//object structure, extensible
    const [state, setState]=useState(initialState);

    const getData= async (path) =>{
        try {
            const result = await axios.get(path);   //axios to request and get data
            console.log('result: ', result);
            const newData = {
                trans = result.data,
                loading:false,
                error:null,
            }
            setState(newData);
        } catch (error) {
            console.log('error: ', error);
        }
       

    }

    return (


        <div>
            Resource
            {render(state)}
        </div>
    )
}

export default Resource
