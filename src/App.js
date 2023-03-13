import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';
import Translate from './Components/Translate';
import Route from './Components/Route';
import Header from './Components/Header';
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
    const[selected,setSelected]=useState(options[0]);
    return(
    <div>
        <Header/>
        <Route path ='/'>
        <Accordion items ={items}/>
        </Route>
        <Route path = '/list'>
            <Search/>
        </Route>
        <Route path='/dropdown'>
         <Dropdown
         label='select a color'
         options={options}
         selected={selected}
         onSelectedChange={setSelected}
         />
        </Route>
        <Route path ='translate'>
        <Translate/>
        </Route>
        </div>
        
    );
};