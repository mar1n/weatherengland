import React, { useState } from 'react';
import Api2 from '../Api/Api';
import './AutoComplete.css';

const AutoCompleteText = (props) => {
    const [name, setName] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [text, setText] = useState('');
    const [error, setError] = useState('');

   const  deleteClick = i => {
        setName(name.filter((item, j) => i !== j))
    };

    const onTextChanged = (e) => {
        const items  = props.items;
        const value = e.target.value;
        let suggestions = [];
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
            if (suggestions.length === 0) {
                setError('Error: I don\'t know the name of this city!')
            } else {
                setError('')
            }

        }
        setSuggestions(suggestions);
        setText(value)
    }

    const suggestionSelected = (value) => {
        setName(name.concat(value));
        setText('');
        setSuggestions([])
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => suggestionSelected(item)} key={item}>{item}</li>)}
            </ul>
        );
    }

    return (
        <section>
            <div className='AutoCompleteText'>
                <input className='textInput' value={text} onChange={onTextChanged} type='text' placeholder='Enter city name only from United Kingdom' />
                {error && <p className='error'>{error}</p>}
                <div>
                    {renderSuggestions()}
                    <ul>
                        {name.map((item, index) => (
                            <li key={index}>
                                <div className='city'>{<Api2 city={item} />}</div>
                                <button
                                    className='deleteButton'
                                    type='button'
                                    onClick={() => deleteClick(index)}
                                >
                                    Delete
                        </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default AutoCompleteText;