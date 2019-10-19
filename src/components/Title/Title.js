import React from 'react'

class Title extends React.Component {
    render() {
        return (
            <h1> My Name is {this.props.name} and Email ( {this.props.email} )</h1>  
        )
    }
}

export default Title;