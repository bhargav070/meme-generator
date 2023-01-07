import React from "react";
import Draggable from "react-draggable";


export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg"
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


  return (
    <div className="main">
      <div className="form">
        <input
          type="text"
          placeholder="top text"
          className="form-input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="top bottom"
          className="form-input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form-button" onClick={generateImage}>Generate new Image</button>
      </div>
       
        <div className="meme">
          <img src={meme.image} alt='meme' className="meme-image"></img>
          <Draggable positionOffset={{ x: '-50%', y: '-10%' }}><h1 className="text topText">{meme.topText}</h1></Draggable>
          <Draggable positionOffset={{ x: '-50%', y: '-10%' }}><h1 className="text bottomText">{meme.bottomText}</h1></Draggable>
        </div>

    </div>
  );
}

