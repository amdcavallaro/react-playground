import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
// import $ from "jquery";
import Webcam from 'react-webcam';

class App extends Component {

  constructor(props) {
    super(props);
    this.showHTMLOutput = this.showHTMLOutput.bind(this); this.showHTMLOutput = this.showHTMLOutput.bind(this);
    this.handleWebCam = this.handleWebCam.bind(this);

    this.state = {
      screenshot: null,
      tab: 0,
      on: false,
      image: false,
      showWebcam: true
    };
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  handleWebCam(e) {
    this.setState({
      on: !this.state.on,
      showWebcam: !this.state.showWebcam
    })
  }

  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot });
    this.setState({ image: !this.state.image });
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  showHTMLOutput() {
    // let screenshotImg = this.state.image ? <img id='screenshotTaken' alt='taken-from-webcam' src={this.state.screenshot} /> : null;
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  componentDidMount() {
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  componentDidUpdate() {
    // let imageTest = `<img id='screenshotTaken' alt='taken-from-webcam' src={${this.state.screenshot}} />`;
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  render() {
    // static cat image working
    let catImage = "https://static.pexels.com/photos/20787/pexels-photo.jpg";
    let imageCat = `<img height='50' width='50' src='${catImage}' />`;

    let dogImage = "https://i.pinimg.com/originals/ec/3a/aa/ec3aaaa969157aa5fff993c5f76abee4.jpg";
    let imageDog = `<img height='50' width='50' src='${dogImage}' />`;

    let screenshotImg = this.state.image ? <img id='screenshotTaken' alt='taken-from-webcam' src={this.state.screenshot} /> : "";
    let textareaValue = "<h1 style='color:red;'> Hi, my name is Amanda. </h1>\n<h2 style='color:blue;'> I am practicing my coding skills. </h2>\n<h3 style='color:green;'> I am looking awesome in the photo below. </h3>"+imageCat;
    let imageTest = this.state.image ? <img id='screenshotTaken' alt='taken-from-webcam' src={this.state.screenshot} /> :`<img height="50" width="50" src=${this.state.screenshot} />`;
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
                <textarea id="HTMLInserted" defaultValue={textareaValue} onChange={this.showHTMLOutput} />
                <span>{imageTest}</span>
              </div>
            </div>
            <div className="col-sm-6" >
              <h3>See your code rendered here</h3>
              <div id="result">
                <div id="output"></div>
              </div>
                <div id="submit">
                  <button className="btn btn-danger btn-lg">Submit amazing work!</button>
                </div>
            </div>

            <div >
              <div id="image" className="code_box">
                <div className="col-sm-12">
                  <h3>Click here to show webcam</h3>
                  <button type="button" className={this.state.showWebcam ? "btn btn-danger" : "btn btn-success"} onClick={this.handleWebCam}> 
                  {
                    this.state.showWebcam ? (
                        <span > Show Webcam</span>
                    ) : 
                        <span > Hide Webcam</span>
                        
                }
                 </button>
                  {this.state.on ?
                    <div >
                      <Webcam
                        audio={false}
                        height={150}
                        ref={node => this.webcam = node}
                        screenshotFormat="image/jpeg"
                        width={200}
                      />
                      <h2>Say cheese</h2>
                      <div className='controls'>
                        <button id="capture" className="btn btn-success" onClick={this.handleClick}>capture</button>
                      </div>
                    </div>
                    : null}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className='screenshots'>
                {this.state.screenshot ?
                  <div>
                    <div>
                      <h2>Click to Choose the filter below</h2>
                      <div className='webcams'>

                        {this.state.image ? <img height="150" width="200" id='CSSFilterscreenshotTaken1' alt='taken-from-webcam' style={{
                          'WebkitFilter': 'contrast(4)',
                          filter: 'contrast(4)'
                        }} src={this.state.screenshot} />
                          : null}

                        {this.state.image ? <img height="150" width="200" id='CSSFilterscreenshotTaken2' alt='taken-from-webcam' style={{
                          'WebkitFilter': 'brightness(3)',
                          filter: 'brightness(3)'
                        }} src={this.state.screenshot} />
                          : null}

                        {this.state.image ? <img height="150" width="200" id='CSSFilterscreenshotTaken3' alt='taken-from-webcam' style={{
                          'WebkitFilter': 'blur(5px)',
                          filter: 'blur(5px)'
                        }} src={this.state.screenshot} />
                          : null}

                        {this.state.image ? <img height="150" width="200" id='CSSFilterscreenshotTaken4' alt='taken-from-webcam' style={{ transform: 'rotate(180deg)' }} src={this.state.screenshot} />
                          : null}

                      </div>
                    </div>

                  </div>
                  : null}
              </div>
            </div>

          </div>
        </div>
      </div>

    );
  }
}

export default App;
