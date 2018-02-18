import React from 'react'

export default class ImageComponent extends React.Component {

  render() {
    return (
      <div className="col-md-6" id="image">
        <h3>Click here to show image filters</h3>
        <div>
          <img alt="cat" onClick={this.props.handleCat} height='100' width='130' src={this.props.catImage} />
          <img alt="dog" onClick={this.props.handleDog} height='100' width='130' src={this.props.dogImage} />
          <img alt="dog" onClick={this.props.handleHamster} height='100' width='130' src={this.props.hamsterImage} />
        </div>
      </div>
    );
  }
}
