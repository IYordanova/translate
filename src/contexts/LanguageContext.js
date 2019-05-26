import React from 'react';

// 1 way to pass value to the context is by setting default on creation
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english'};

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                { this.props.children }
            </Context.Provider>
        );
    }
}

export default Context;