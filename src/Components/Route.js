import {useEffect,useSate, useState} from "react";
const Route=({path,children})=>{
const [currentPath,setCurrentpath]=useState(window.location.pathname);

useEffect(()=>{
const onLocationChange=()=>{
    setCurrentpath(window.location.pathname);
};
window.addEventListener('popstate',onLocationChange);
return()=>{
window.removeEventListener('popstate',onLocationChange);
}
},[]);

return window.location.pathname===path?children:null;
};
export default Route;