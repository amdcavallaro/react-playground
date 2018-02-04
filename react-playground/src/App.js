import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import $ from "jquery";
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
      image: false
    };
  }

  onChange(newValue, e) {
    console.log('onChange', newValue, e);
  }

  handleWebCam(e) {
    this.setState({
      on: !this.state.on
    })
  }

  handleClick = () => {
    const screenshot = this.webcam.getScreenshot();
    this.setState({ screenshot });
    this.setState({ image: !this.state.image });
  }

  showHTMLOutput() {
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  componentDidUpdate() {
    $(document).ready(function () {
      $("#screenshotTaken1").animate({
        left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
      });

      $("#screenshotTaken2").animate({ left: '250px' })

    });
  }

  render() {
    return (
      <div className="App" id="App">
        <div className="container-fluid">
          <div className="row">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="row" >
              <div className="col-sm-6" id="input">
                <h3>Type HTML Code here</h3>
                <div id="container">
                  <textarea id="HTMLInserted" onChange={this.showHTMLOutput} />
                </div>

              </div>
              <div className="col-sm-6" id="result">
                <h3>Output</h3>
                <div id="output"></div>
                {this.state.image ? <img id='screenshotTaken' alt='taken-from-webcam' src={this.state.screenshot} />
                  : null}
              </div>
            </div>
            <div className="row" >
              <div className="col-sm-6">
                <div id="image" className="code_box">
                  <div>
                    <h3>Click here to show webcam</h3>
                    <button className="btn btn-success" onClick={this.handleWebCam}>Show webcam</button>
                    {this.state.on ?
                      <div className="row" >
                        <Webcam
                          audio={false}
                          height={350}
                          ref={node => this.webcam = node}
                          screenshotFormat="image/jpeg"
                          width={350}
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
                      <h1>Select jQuery Effect</h1>


                      {this.state.image ? <img id='screenshotTaken1' alt='taken-from-webcam' src={this.state.screenshot} /> : null}
                      {this.state.image ? <img id='screenshotTaken2' alt='taken-from-webcam=2' src={this.state.screenshot} /> : null}


                      <div id="submit">
                        <button className="btn btn-danger btn-lg">Submit amazing work!</button>
                      </div>
                    </div>
                    : null}
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
