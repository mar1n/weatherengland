import React from 'react'
import {  Link } from 'react-router-dom'
import City from './city'
import Api from './api'

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);

        //this.cityList = [];
        this.state = {
            name: [],
            suggestions: [],
            text: '',
        };
    }
    //Pass componet as property left={<contacts/>} read: Composition vs inheritance
    addClick = () => {
        const { text } = this.state;
        //this.cityList.push(<div id="city"><p>{text}</p><Api city={this.state.text}/></div>);
        this.setState(state => {
            const name = state.name.concat(<div id="city"><p>{text}</p><Api city={this.state.text}/><Link to="city">city</Link></div>);

            return {
                name,
                text: '',
            };
        });

    }

    deleteClick = i => {
        this.setState(state => {
            const name = state.name.filter((item, j) => i !== j);

            return {
                name,
            };
        });
    };

    onTextChanged = (e) => {
        const { items } = this.props;
        const value = e.target.value;
        let suggestions = [];
        if(value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
            console.log(suggestions);
        }
        this.setState(() => ({ suggestions, text: value }));
    }

    suggestionSelected(value) {
        this.setState(() => ({
            text: value,
            suggestions: [],
        }))
    }

    renderSuggestions ()  {
        const { suggestions } = this.state;
        if(suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
            </ul>
        );
    }
    render () {
        const { text } = this.state;
        return (

            <div className="AutoCompleteText">
                <input value={text} onChange={this.onTextChanged}type="text" />
                <input value="Add" onClick={this.addClick} type="submit" />
                <div>

                    <ul>
                        {this.state.name.map((item, index) => (
                            <li key={item}>{item}
                            <button
                            type="button"
                            onClick={() => this.deleteClick(index)}
                            >
                                Remove
                            </button>
                            </li>
                        ))}
                    </ul>
                </div>
                {this.renderSuggestions()}


            </div>

        )
    }
}