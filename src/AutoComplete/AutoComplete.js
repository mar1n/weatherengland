import React from 'react';
import Api from '../Api/Api';
import './AutoComplete.css';

export default class AutoCompleteText extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: [],
            suggestions: [],
            text: '',
            error: '',
        };
    }
    addClick = () => {
        const { text } = this.state;
        this.setState(state => {
            const name = state.name.concat(<div className='city'>{<Api city={text} />}</div>);
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
        if (value.length > 0) {
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = items.sort().filter(v => regex.test(v));
            if(suggestions.length === 0) {
                this.setState(() => ({error: 'Error: I don\'t know the name of this city!'}));
            } else {
                this.setState(() => ({error: ''}))
            }
            
        }
        this.setState(() => ({ suggestions, text: value }));
        
    }

    suggestionSelected(value) {

        this.setState(state => {
            const name = state.name.concat(<div className='city'>{<Api city={value} />}</div>);
            return {
                name,
                text: '',
                suggestions: [],
            }
        })
    }

    renderSuggestions() {
        const { suggestions } = this.state;
        if (suggestions.length === 0) {
            return null;
        }
        return (
            <ul>
                {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)} key={item}>{item}</li>)}
            </ul>
        );
    }
    render() {
        const { text } = this.state;
        return (

            <div className='AutoCompleteText'>
                <input className='textInput' value={text} onChange={this.onTextChanged} type='text' placeholder='Enter city name' />
                {this.state.error && <p className='error'>{this.state.error}</p>}
                {/* <input className='addButton' value="Add" onClick={this.addClick} type="submit" /> */}
                <div>
                    {this.renderSuggestions()}
                    <ul>
                        {this.state.name.map((item, index) => (
                            <li key={index}>{item}
                                <button
                                    className='deleteButton'
                                    type='button'
                                    onClick={() => this.deleteClick(index)}
                                >
                                    Delete
                            </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}