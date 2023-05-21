import React, {useState, useEffect} from 'react';

export default function Dashboard(props){

    useEffect(()=>{
        if(Object.keys(props.Admin).length===0){
            window.location.href = "/?error=login";
        }
    }, [])
    return(
        <></>
    );
}
