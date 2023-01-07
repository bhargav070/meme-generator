import React from "react";
import Draggable from "react-draggable";
import { FaInfoCircle } from "react-icons/fa";


export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    thirdText: "",
    image: "http://i.imgflip.com/1bij.jpg",
    flag: false
  })
  
  const [allmeme, setAllmeme] = React.useState([])
  
  React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllmeme(data.data.memes))
  }, [])

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(preData => ({
      ...preData,
      [name]: value
    }))
  }


  function generateImage() {
    const num = Math.floor(Math.random() * allmeme.length)
    const url = allmeme[num].url
    setMeme(preData => ({
      ...preData,
      image: url
    }))
  }

  function addText() {
    setMeme(preData => ({
      ...preData,
      flag: true
    }))
  }

  // console.log("outside " +flag);

  return (
    <div className="main"> 
      <h1 className="instruction"><FaInfoCircle/> Drag the text over image and then take screenshot to save meme.</h1>
      <h1 className="instruction">Click on "Add text" button to add third text.</h1>
      <div className="form">
        <input
          type="text"
          placeholder="First text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="second text"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        
        {meme.flag === true && <input
          type="text"
          placeholder="Third text "
          className="form-input"
          name="thirdText"
          value={meme.thirdText}
          onChange={handleChange}
        />}
        {/* {flag && <h5>This is heading</h5>} */}
        
        <button className="form-button" onClick={generateImage}>Generate new Image</button>
        <button className="form-button" onClick={addText}>Add text</button>
        
      </div>
       
        <div className="meme">
          <img src={meme.image} alt='meme' className="meme-image"></img>
          <Draggable positionOffset={{ x: '-50%', y: '-10%' }}><h1 className="text topText">{meme.topText}</h1></Draggable>
          <Draggable positionOffset={{ x: '-50%', y: '-10%' }}><h1 className="text bottomText">{meme.bottomText}</h1></Draggable>
          <Draggable positionOffset={{ x: '-50%', y: '-200%' }}><h1 className="text middleText">{meme.thirdText}</h1></Draggable>
        </div>

    </div>
  );
}

