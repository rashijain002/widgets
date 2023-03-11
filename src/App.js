import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
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
const options=[
{label:'the color is red',
color:'red'},
{label:'the color is blue',
color:'Blue'},
{label:'the shade of blue',
color:'blue'
},
];

export default()=>{
    return(
    <div>
      <Translate/>
        </div>
        
    );
};