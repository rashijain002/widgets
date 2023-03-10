import React,{useState,useEffect} from "react";
import axios from "axios";

const Convert=({language,text })=>{
    const[translated,setTranslated]=useState('');
    useEffect(()=>{
        const doTranslation=async()=>{
            const {data}=await axios.post('https://translation.googleapis.com/language/translate/v2',{key : 'AIzaSyBgDRlTfwEdHDkS-_sVOYcbBd3LKnHdsRM'},{
                params:{
                q:text,
                target:language.value,
                
                },
            });
            setTranslated(data.data.translations[0].translatedText);
            };
            doTranslation();
        },[language,text])
    return(
        <div className="ui header">
            <h1>
                {translated}
                </h1></div>
    );
}
export default Convert;