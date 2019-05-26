import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // hook context to the class component
    // special property name - do not change
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{ text }</label>
                <input/>
            </div>

        );
    }
};

export default Field;
