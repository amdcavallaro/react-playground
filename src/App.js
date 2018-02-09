import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.catImage = "https://static.pexels.com/photos/20787/pexels-photo.jpg";
    this.imageCat = `<img alt="cat" height='150' width='200' src=${this.catImage} />`;
    this.dogImage = "https://i.pinimg.com/originals/ec/3a/aa/ec3aaaa969157aa5fff993c5f76abee4.jpg";
    this.imageDog = `<img alt="dog" height='150' width='200' src=${this.dogImage} />`
    this.noAnimal = `<img height='150' width='200'  />`
    this.hamsterImage = "https://www.unilad.co.uk/wp-content/uploads/2017/07/hamster-hehe.jpg";
    this.imageHamster = `<img alt="dog" height='150' width='200' src=${this.hamsterImage} />`;

    this.filter = ['contrast(4)', 'brightness(3)', 'blur(5px)', 'sepia(50%)'];
    
    this.showHTMLOutput = this.showHTMLOutput.bind(this);
    this.handleWebCam = this.handleWebCam.bind(this);
    this.handleCat = this.handleCat.bind(this);
    this.handleDog = this.handleDog.bind(this);
    this.handleStyle = this.handleStyle.bind(this);

    this.state = {
      screenshot: null,
      on: false,
      image: false,
      showWebcam: true,
      animal: this.noAnimal,
      style: "none"
    };
  }

  // onChange(newValue, e) {
  //   console.log('onChange', newValue, e);
  // }

  handleWebCam(e) {
    this.setState({
      on: !this.state.on,
      showWebcam: !this.state.showWebcam
    })
  }

  handleClick = () => {
    this.setState({ image: !this.state.image });
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  handleCat = () => {
    this.setState({ screenshot: this.catImage });
    this.setState({ animal: this.imageCat });
  }
  

  handleDog = () => {
    this.setState({ screenshot: this.dogImage });
    this.setState({ animal: this.imageDog });
  }

  handleHamster = () => {
    this.setState({ screenshot: this.hamsterImage });
    this.setState({ animal: this.imageHamster });
  }

  showHTMLOutput() {
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  handleStyle(number) {
    console.log(number);
    console.log(this.filter[number]);
    this.setState({ style: this.filter[number] });
  }

  componentDidMount() {
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  componentDidUpdate() {
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  render() {

    const numbers = [0, 1, 2, 3];
    const listItems = numbers.map((number) =>
      <span key={number.toString()}>{this.state.screenshot ?
        <img height="150" onClick={() => this.handleStyle(number)} width="200" id='CSSFilterscreenshotTaken1' alt='animal' style={{ filter: this.filter[number], WebkitFilter: this.filter[number] }} src={this.state.screenshot} />
        : null}
      </span>
    );
    let textareaValue = "<h1 style='color:red;'> Hi, my name is [replace with your name]. </h1>\n<h2 style='color:blue;'> I am practicing my coding skills. </h2>\n<h3 style='color:green;'> Cute pet below: </h3>\n" + this.state.animal;

    return (
      <div className="App" id="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12" id="logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-6" id="input">
              <h3>Type HTML code here</h3>
              <div >
                <textarea id="HTMLInserted"  ref="text" defaultValue={textareaValue} onChange={this.showHTMLOutput} />
              </div>
            </div>
            <div className="col-sm-6" >
              <h3>See your code rendered here</h3>
              <div id="result">
                <div id="output"></div>
              </div>
              {/* <div id="submit">
                save it somewhere
                <button className="btn btn-danger btn-lg">Submit amazing work!</button> */}
              {/* </div> */}
            </div>
            <div className="col-md-6" id="image">
              <h3>Click here to show image filters</h3>
              <div>
                <img alt="cat" onClick={this.handleCat} height='150' width='200' src={this.catImage} />
                <img alt="dog" onClick={this.handleDog} height='150' width='200' src={this.dogImage} />
                <img alt="dog" onClick={this.handleHamster} height='150' width='200' src={this.hamsterImage} />
              </div>
            </div>
            <div className="col-sm-6">
                  <div>
                    {listItems}
                    <div style={{ fontSize: '26px' }}>
                      Copy style above: <span style={{ fontFamily: 'COURIER' }} >style="filter:{this.state.style}"</span>
                      {"\n"} and paste it inside the img tag
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
