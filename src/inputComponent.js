import React from 'react'

export default class InputComponent extends React.Component {

    render() {
        return (
            <div className="col-sm-6" id="input">
                <h3>Type HTML code here</h3>
                <div>
                    <textarea id="HTMLInserted"
                        ref="text"
                        value={this.props.textareacontent}
                        onChange={this.props.handleTextareaChange}
                    />
                </div>
            </div>
        );
    }
}
