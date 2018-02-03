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
      on: false
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
  }

  showHTMLOutput() {
    document.getElementById('output').innerHTML = document.getElementById('HTMLInserted').value;
  }

  componentDidMount() {
    $(document).ready(function () {
      $("#jqueryEffect").click(function () {
        $("img").animate({
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
        <div className="wrap">
          <img src={logo} className="App-logo" alt="logo" />
          <section id="section_editors">
            <div id="html" className="code_box">
              <h3>Type HTML Code here</h3>
              <textarea id="HTMLInserted" onChange={this.showHTMLOutput} />
            </div>
            <div id="image" className="code_box">
              <div>
                <button onClick={this.handleWebCam}>Show webcam</button>
                {this.state.on ?
                  <Webcam
                    audio={false}
                    height={350}
                    ref={node => this.webcam = node}
                    screenshotFormat="image/jpeg"
                    width={350}
                  />
                  : null}

                <div>
                  <h2>Screenshots</h2>
                  <div className='screenshots'>
                    <div className='controls'>
                      <button onClick={this.handleClick}>capture</button>
                    </div>
                    {this.state.screenshot ? <img alt="taken-from-webcam" src={this.state.screenshot} /> : null}
                  </div>
                </div>
              </div>
              {/* <button>Click here to add an image.</button> */}
              <img alt="testimage" src="http://lh3.googleusercontent.com/UVqRPPKM15p5ZhePIaKh2E9OY42FqLyCVlcH2NpBZflxMUZ4Pj7Q8q9eu14YIblEHrgCJKlolnKgnw" />
              {/* <button>Select image</button> */}
              <h1>SELECT JQUERY EFFECT</h1>
              <button id="jqueryEffect">Effect 1 </button>
              {/* <button>SUBMIT PHOTO WITH EFFECT BUTTON</button> */}
            </div>
          </section>
          <section id="output">
            <h3>Output</h3>
            <iframe title="output" />
          </section>
        </div>
      </div>

    );
  }
}

export default App;
