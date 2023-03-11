import React,{useState} from "react";
import Dropdown from "./Dropdown";
import convert from "./convert";
const options=[
    {
        label:'Afrikaans',
        value:'af'
    },
    {
        label:'Hindi',
        value:'hi'
    },

        {
        label:'Arabic',
        value:'ar'
    }

];
const Translate=()=>{
    const[language,setLanguage] = useState(options);
    const[text,setText]=useState('');
    return (
        <div>
            <div className="ui form">
            <div className="field">
            <label>Enter text</label>
                
            <input value={text}

            onChange={(e)=>setText(e.target.value)}/>
            </div>
            </div>
            
            <Dropdown 
            
            label='select a language'
            selected={language} 
            onSelectedChange={setLanguage} 
            options={options}/>
            <hr/>
            <h3 className="ui header">Output</h3>
            <convert text ={text} language={language}/>
        </div>
    );

};
export default Translate;