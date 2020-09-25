import React from 'react'
import { Child } from './Child'
import { Child2 } from './Child2'
import { Input } from './Input'

const arr = ['Lamborgini', 'Tesla', 'Lexus']

export default class Parent extends React.Component {

    constructor(props) {
        super()

        this.state = {
            name: 'show me',
            info: arr
        }

        this.nameChange = this.nameChange.bind(this)
    }



    nameChange(n) {
        this.setState({
            name: n
        })
    }
    
    render() {
        return (
            <div>
                <Child2 name={this.state.name} />
                
                <Child info={this.state.info} change={this.nameChange} />

                <br />
                <br />
                <br />
                <hr />

                <Input />
            </div>
        )
    }
}