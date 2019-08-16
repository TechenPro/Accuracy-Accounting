import React, { Component } from 'react'


export default class contactForm extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            message: ""
        }
        
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit() {
        event.preventDefault()
        this.setState({
            name: "",
            email: "",
            message: ""
        })
    }

    handleChange(event) {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
        })
    }



    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div className="form-wrapper">
                    <div className="text">
                        <span>Get In Touch</span>
                    </div>

                    <div className="entry-wrapper">
                        <input 
                        onChange={this.handleChange} 
                        type="text" 
                        name="email"
                        placeholder="Email" 
                        value={this.state.email}/>
                    </div>

                    <div className="entry-wrapper">
                        <input 
                        onChange={this.handleChange} 
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name} />
                    </div>

                    <div className="entry-wrapper">
                        <textarea 
                        onChange={this.handleChange} 
                        type="text"
                        name="message"
                        placeholder="Message" 
                        value={this.state.message} />
                    </div>

                    <div className="btn-wrapper">
                        <button className="btn">Submit</button>
                    </div>
                </div> 
            </form>
        )
    }
}