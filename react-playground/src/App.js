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
      $("#jqueryEffect").click(function () {
        $("#screenshotTaken").animate({
          left: '250px',
          opacity: '0.5',
          height: '150px',
          width: '150px'
        });
      });
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
                <textarea id="HTMLInserted" onChange={this.showHTMLOutput} />
              </div>
              <div className="col-sm-6">
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
                    <button class="btn btn-success" onClick={this.handleWebCam}>Show webcam</button>
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
                      {/* <img id="screenshotTaken" alt="taken-from-webcam" src={this.state.screenshot} /> */}
                      <h1>SELECT JQUERY EFFECT</h1>
                      <button id="jqueryEffect" className="btn btn-success btn-lg">Effect 1</button>
                      <button id="jqueryEffect" className="btn btn-success btn-lg">Effect 2</button>
                      <button id="jqueryEffect" className="btn btn-success btn-lg">Effect 3</button>
                      <button id="jqueryEffect" className="btn btn-success btn-lg">Effect 4</button>
                      <button id="jqueryEffect" className="btn btn-success btn-lg">Effect 5</button>

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
