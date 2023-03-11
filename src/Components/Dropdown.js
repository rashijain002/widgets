import React ,{useState , useEffect} from "react";
const Dropdown=({label,options,selected,onSelectedChange})=>{
    const [open,setOpen] = useState(false);
    
    const renderedOptions = options.map((option)=>{
        
        return(
            <div 
            key ={option.value} 
            className='item'
            onClick={()=>onSelectedChange(option)}>
                {option.label}
                </div>
        );
    })
   return(
            <div className="ui form">
            <div className="field">
            <label className="label">{label}</label>
            <div onClick={()=>setOpen(!open)} 
            className={`ui selection dropdown ${open ? 'visible active':''}`}>
            <i className="dropdown icon"></i>
            <div className="text">{selected.label}</div>
            <div
            className={`menu ${open ? 'visible transition':''}`}>
            {renderedOptions}
            </div>
            </div>
            </div>       
    </div>
   );
};
export default Dropdown;