import React from 'react'

export default class ResultComponent extends React.Component {

    render() {
        return (
            <div className="col-sm-6" >
                <h3>See your code rendered here</h3>
                <div id="result">
                    <div id="output" dangerouslySetInnerHTML={{ __html: this.props.textareacontent }}></div>
                </div>
            </div>
        );
    }
}
