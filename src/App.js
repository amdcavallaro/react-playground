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
      showWebcam: "Show",
      button: "btn btn-success",
    };
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  handleWebCam(e) {
    this.setState({
      on: !this.state.on,
      showWebcam: "Hide",
      button: "btn btn-danger"
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
   let screenshotImg = this.state.image ? <img id='screenshotTaken' alt='taken-from-webcam' src={this.state.screenshot} /> : "";
  //  document.getElementById('output').innerHTML = {screenshotImg};
  }


  render() {
    let screenshotImg = this.state.image ? <img id='screenshotTaken' alt='taken-from-webcam' src={this.state.screenshot} /> : "";

    let textareaValue = "<h1 style='color:red;'> Hi, my name is Amanda. </h1>\n<h2 style='color:blue;'> I am practicing my coding skills. </h2>\n<h3 style='color:green;'> I am looking awesome in the photo below. </h3>";
    return (
      <div className="App" id="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12" id="logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div className="col-sm-6" id="input">
              <h3>Type HTML Code here</h3>
              <div id="container">
                <textarea id="HTMLInserted" defaultValue={textareaValue} onChange={this.showHTMLOutput} />
              </div>
            </div>
            <div className="col-sm-6" id="result">
              <h3>See your code rendered here</h3>
              <div id="output"></div>
              {screenshotImg}
                 <div id="submit">
                      <button className="btn btn-danger btn-lg">Submit amazing work!</button>
            </div>
            </div>
           
            <div >
              <div id="image" className="code_box">
                <div className="col-sm-12">
                  <h3>Click here to show webcam</h3>
                  <button className={this.state.button} onClick={this.handleWebCam}> {this.state.showWebcam} </button>
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
