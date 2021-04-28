import React , { useState} from 'react';
import Dropdown from './Dropdown'
import Convert from './Convert'
const options = [
    {
        label: 'Afrikaans',
        value: 'af'
      },
      {
        label: 'Arabic',
        value: 'ar'
      },
      {
        label: 'Hindi',
        value: 'hi'
      },
      {
        label : 'Bengali',	
        value: 'bn'
      },
      {
        label : 'English',	
        value: 'en'
      },
      {
        label : 'Telugu',	
        value: 'te'
      }
    ]
    
    //

const Translate = () => {
    const [language,setLanguage] = useState(options[0])
    const [text,setText] = useState('');
    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input value={text} onChange={(e)=> setText(e.target.value)}/>
                </div>
            </div>
            <Dropdown 
                label = 'Select A Language'
                selected = {language}
                onChangeSelected= {setLanguage}
                options={options}/>
            <hr/>
            <h3 className = "ui header">Output</h3>
            <Convert text={text} language={language}/>
        </div>
    );
};

export default Translate;