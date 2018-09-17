import React, {Component} from "react"
import Preview from "./Preview"

export default class Jobs extends Component {
    constructor() {
        super()
        this.state = {
            feedback:false,
            value: "",
            preview: false
        }
        this.submitButton = this.submitButton.bind(this);
        this.resetFeedback = this.resetFeedback.bind(this)
    }
submitButton = (event) => {
event.preventDefault()
this.setState({feedback:true})
}
resetFeedback(event){
    if(this.state.feedback) this.setState({feedback: false})
    this.setState({value:event.target.value})
}
buttonClick = (event) => {
    this.setState({preview:!this.state.preview})
}
    render() {
        return (
            <div>
                <h2>Job Details</h2>
                <h4>Demolitions Manager</h4>
                <p>Please destroy things for us.</p>
                <form onSubmit = {this.submitButton}>
                    <label>Apply Here:</label>
                    <textarea 
                        onChange={this.resetFeedback} 
                        name = "apply" 
                        rows = "8" 
                        cols = "100">
                    </textarea>
                    <input type = "submit" name = "submit" value = "Submit" />

                </form>
                <p>{this.state.feedback?"Your application has been submited!": ""}</p>
                <button onClick = {this.buttonClick}>Show Preview</button>
                <Preview 
                    preview={this.state.preview}
                    value = {this.state.value}

                />
            </div>
        )
    }
    
}

