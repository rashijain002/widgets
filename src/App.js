import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
const items=[
    { 
        title:"what is react",
        content:"React is an frontend javascript framework"
    },
    {
        title:"why use react",
        content :"React is a favourite js library among engineers"
    },
    {
        title:"How do you use React",
        content :"You use react by creating componennts"
    },
];
export default()=>{

    return(
    <div>
        <Search/>
        </div>
    );
}
