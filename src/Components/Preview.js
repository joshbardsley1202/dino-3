import React from "react"

export default class Preview extends React.Component {
    render(props) {
        return (
            <section 
                id="application-preview"
                className={this.props.preview?"":"hidden"}
            >
                {this.props.value}
            </section>
        )
    }
}