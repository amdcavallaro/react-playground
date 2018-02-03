import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    function showHTMLOutput() {
      var elem = document.getElementById('HTMLInserted').value;
      console.log("elem" + elem);
      var elem2 = document.getElementById('output').innerHTML = elem;
      console.log("elem2" + elem2);
  }

  //jquery animation
  // $(document).ready(function () {
  //     $("#jqueryEffect").click(function () {
  //         $("img").animate({
  //             left: '250px',
  //             opacity: '0.5',
  //             height: '150px',
  //             width: '150px'
  //         });
  //     });
  // });    

    return (
      <div className="App" id="App">
      <div className="wrap">
      <img src={logo} className="App-logo" alt="logo" />
        <section id="section_editors">
          <div id="html" className="code_box">
            <h3>Type HTML Code here</h3>
            <textarea id="HTMLInserted" onkeypress="showHTMLOutput()" defaultValue={"                    <h1>I am an HTML tag</h1>\n                "} />
          </div>
          <div id="image" className="code_box">
            {/* <button>Click here to add an image.</button> */}
            <img src="http://lh3.googleusercontent.com/UVqRPPKM15p5ZhePIaKh2E9OY42FqLyCVlcH2NpBZflxMUZ4Pj7Q8q9eu14YIblEHrgCJKlolnKgnw" />
            {/* <button>Select image</button> */}
            <h1>SELECT JQUERY EFFECT</h1>
            <button id="jqueryEffect">Effect 1 </button>
            {/* <button>SUBMIT PHOTO WITH EFFECT BUTTON</button> */}
          </div>
        </section>
        <section id="output">
          <h3>Output</h3>
          <iframe />
        </section>
      </div>
      </div>
      
    );
  }
}

export default App;
