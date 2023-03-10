import React ,{useState , useEffect} from "react";
import axios from "axios";
const Search=()=>{
    const [term,setTerm]=useState('');
    const [results,setResults]=useState([]);
   
    useEffect(()=>{
        const Search =async()=>{
    const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
                params :{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term,
                },
        });
        setResults(data.query.search);
        };
        if(term && !results.length){
            Search();
        }else{
            const timeoutId =setTimeout(()=>{
                if(term){
                    Search();
                }
            },100); 
            return()=>{
                clearTimeout(timeoutId);
            };
        }
           
    },[term]);

    const renderedResults=results.map((result)=>{
     return (

     <div key ={result.pageid} className="item">
        <div className="right floated content"></div>
        <a className="ui button"
        href ={`https://en.wikipedia.org?curid=${result.pageid}`}>
        click here</a>
        <div className="content">
            <div className="header">
                {result.title}
            </div>
            <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
        </div>
     </div>);
    });
    return(
        <div>
        <div className="ui form">
            <div className="field">
                <label>Enter text here</label>
                <input 
                value={term}
                onChange={e=>setTerm(e.target.value)}
                className="input"></input>
            </div>
        </div>
        <div className="ui celled list">{renderedResults}</div>
        </div>
        );

}
export default Search;