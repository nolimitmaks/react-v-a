import React from 'react'

export class Input extends React.Component {

    constructor(props) {
        super()

        this.state = {
            userInput: '?'
        }

        this.onInputChange = this.onInputChange.bind(this)

    }

    onInputChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h4>
                        {this.state.userInput}
                    </h4>
                </div>
                
                <div>
                    <input onChange={this.onInputChange} />
                </div>
            </div>
        )
    }
}