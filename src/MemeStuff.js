import React, { useState, useEffect } from "react";

const dataUrl = "https://api.imgflip.com/get_memes";

const MemeStuff = () => {
  const [text, setText] = useState({ topText: "", bottomText: "" });
  const [randomImg, setRandomImg] = useState("https://i.imgflip.com/26am.jpg");
  const [memeImg, setMemeimg] = useState([]);

  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const randNum = Math.floor(Math.random() * memeImg.length);
    const randMemeImgUrl = memeImg[randNum].url;
    setRandomImg(randMemeImgUrl);
  };

  useEffect(() => {
    console.log("test run");
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => setMemeimg(response.data.memes));
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={text.topText}
            onChange={handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={text.bottomText}
            onChange={handleChange}
          />
          <button>Generate</button>
        </form>
        <div className="meme">
          <img src={randomImg} alt="random meme" />
          <h2 className="top">{text.topText}</h2>
          <h2 className="bottom">{text.bottomText}</h2>
        </div>
      </div>
      )
    </div>
  );
};
export default MemeStuff;
