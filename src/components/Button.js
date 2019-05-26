import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderButton(color) {
           return (
               <button className={ `ui button ${color}` }>
                    <LanguageContext.Consumer>
                            { value =>  value === 'english' ? 'Submit' : 'Vooleggen'}
                    </LanguageContext.Consumer>
               </button>
           );
    }

    // consumer is used when accessing info from multiple contexts
    render() {
        return (
            <ColorContext.Consumer>
                { this.renderButton }
            </ColorContext.Consumer>
        );
    }
};

export default Button;
