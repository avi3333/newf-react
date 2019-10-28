import React from 'react'
import './Title.css'

class Title extends React.Component {

    constructor(props) {
        super(props)

            this.state={
                title: 'This is a dummy title',
                isInput: false
            }
        }

        editHandler() {
            this.setState({
                ...this.state,
                isInput: true
            })
        }

        inputChange(event) {
            this.setState({
                ...this.state,
                title: event.target.value
            })
        }

        keyPressHandler(event) {
            if ( event.key==='Enter') {
                this.setState({
                    ...this.state,
                    isInput: false
                })
            }
        }

        blurHandler(event) {
            this.setState({
                ...this.state,
                isInput: false
            })
        }

    render() {
        let output= null
        if (this.state.isInput) {
            output= (
                <div className="title">
                <input 
                className='form-control' 
                type="text" 
                value={this.state.title}
                onChange={event => this.inputChange(event)}
                onKeyPress={event => this.keyPressHandler(event)}
                onBlur={event => this.blurHandler(event)}
                />
            </div>
            )
        } else {
            output = (
                <div className='d-flex title'>
                    <h1 className='display-4'> {this.state.title} </h1>
                    <span onClick={ () => this.editHandler() } className='ml-auto edit-icon'> 
                        <i className="fas fa-edit"></i>  
                    </span>
                </div>
            )
        }
        return (
             <div className='contain'>
                {output}
             </div>
        )
    }
}

export default Title;