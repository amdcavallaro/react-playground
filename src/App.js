import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import InputComponent from './inputComponent';
import ResultComponent from './resultComponent';
import ImageComponent from './imageComponent';
import FilterComponent from './filterComponent';
class App extends Component {

  constructor(props) {
    super(props);
    this.catImage = "https://static.pexels.com/photos/20787/pexels-photo.jpg";
    this.imageCat = `<img alt="cat" height='150' width='200' src='${this.catImage}' />`;
    this.dogImage = "https://i.pinimg.com/originals/ec/3a/aa/ec3aaaa969157aa5fff993c5f76abee4.jpg";
    this.imageDog = `<img alt="dog" height='150' width='200' src='${this.dogImage}' />`
    this.noAnimal = `<img height='150' width='200'  />`
    this.hamsterImage = "https://www.unilad.co.uk/wp-content/uploads/2017/07/hamster-hehe.jpg";
    this.imageHamster = `<img alt="hamster" height='150' width='200' src='${this.hamsterImage}' />`;


    this.filter = ['contrast(4)', 'brightness(3)', 'blur(5px)', 'sepia(50%)'];

    this.handleCat = this.handleCat.bind(this);
    this.handleDog = this.handleDog.bind(this);
    this.handleHamster = this.handleHamster.bind(this);
    this.handleStyle = this.handleStyle.bind(this);
    this.handleTextareaChange = this.handleTextareaChange.bind(this);
    let defaultTextareaContent = `
    <h1 style='color:red;'> Hi, my name is [replace with your name]. </h1>
    <h2 style='color:blue;'> I am practicing my coding skills. </h2>
    <h3 style='color:green;'> Cute pet below: </h3>
    ${this.noAnimal}`;
    this.state = {
      screenshot: null,
      image: false,
      animal: this.noAnimal,
      textareacontent: defaultTextareaContent,
      style: `none`
    };
  }

  handleClick() {
    this.setState({ image: !this.state.image });
  }

  handleTextareaChange(event) {
    this.setState({ textareacontent: event.target.value });
  }

  replaceImage(newImage) {
    let oldImage = this.state.animal;
    let newTextareacontent = this.state.textareacontent.replace(oldImage, "") + newImage;
    this.setState({ animal: newImage });
    this.setState({ textareacontent: newTextareacontent });
  }

  handleCat() {
    this.setState({ screenshot: this.catImage });
    this.replaceImage(this.imageCat);
  }

  handleDog() {
    this.setState({ screenshot: this.dogImage });
    this.replaceImage(this.imageDog);
  }

  handleHamster() {
    this.setState({ screenshot: this.hamsterImage });
    this.replaceImage(this.imageHamster);
  }

  handleStyle(number) {
    console.log(number);
    console.log(this.filter[number]);
    this.setState({ style: this.filter[number] });
  }

  render() {
    return (
      <div className="App" id="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12" id="logo">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
            <InputComponent
              textareacontent={this.state.textareacontent}
              handleTextareaChange={this.handleTextareaChange} />
            <ResultComponent textareacontent={this.state.textareacontent} />
            <ImageComponent
              catImage={this.catImage}
              imageCat={this.imageCat}
              dogImage={this.dogImage}
              imageDog={this.imageDog}
              noAnimal={this.noAnimal}
              hamsterImage={this.hamsterImage}
              imageHamster={this.imageHamster}
              handleCat={this.handleCat}
              handleDog={this.handleDog}
              handleHamster={this.handleHamster}/>
            <FilterComponent
              screenshot={this.state.screenshot}
              style={this.state.style}
              handleStyle={this.handleStyle} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
