import React from 'react'

export class Child extends React.Component {
    constructor(props){
        super()
        
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const name = e.target.value
        this.props.change(name)
    }
    
    render() {
        return (
            <select onChange={this.handleChange}>
                {
                    this.props.info.map(
                    e => <option value={e}>{e}</option>
                    )
                }
            </select>
        )
    }
}
