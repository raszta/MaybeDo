import React from 'react';

export default class Header extends React.Component {
    constructor(props){
        super(props);
        this.state={
            word: 'Bored?'
        }
    }
    handleClick = (e) => {
        this.setState({
            word: this.state.word == "Bored?" ? this.state.word = "Let's rock!" : this.state.word = "Bored?"
        })
    }

    render() {
        return <div className="header__container">
            <h1 className="header__title">{this.state.word}</h1>
            <button className="header__button" onClick={this.handleClick}>Click me!</button>
        </div>
    }
}
