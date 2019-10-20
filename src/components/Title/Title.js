import React from 'react'

class Title extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            number: 0
        }
    }

    counter() {
        this.setState({
            number: this.state.number + 1
        }
        )
        console.log(this.state.number);
    }

    render() {
        return (
            <div>
                <p> { this.state.number } </p>
                <button onClick={ () => this.counter() }> Click Me </button>
            </div>  
        )
    }
}

export default Title;