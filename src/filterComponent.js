import React from 'react'

export default class FilterComponent extends React.Component {

    render() {

        this.filter = ['contrast(4)', 'brightness(3)', 'blur(5px)', 'sepia(50%)'];
        const numbers = [0, 1, 2, 3];
        const listItems = numbers.map((number) =>
            <span key={number.toString()}>{this.props.screenshot ?
                <img height="150" onClick={() => this.props.handleStyle(number)} width="200" id='CSSFilterscreenshotTaken1' alt='animal' style={{ filter: this.filter[number], WebkitFilter: this.filter[number] }} src={this.props.screenshot} />
                : null}
            </span>
        );
        return (
            <div className="col-sm-6">
                <div>
                    <div id="copyStyleDiv">
                        Copy style below:
                  <span id="copyStyle">style="filter:{this.props.style}"</span>
                        and paste it inside the img tag.
                    </div>
                    {listItems}
                </div>
            </div>
        );
    }
}
