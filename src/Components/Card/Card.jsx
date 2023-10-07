import React from 'react';

const Card = ({ data }) => {
  return (
    data.map(dat => {
      let gradientBackground;
      if (dat.color === "blue") {
        gradientBackground = "linear-gradient(to bottom, #0a7cbe, #123086)";
      } else if (dat.color === "orange") {
        gradientBackground = "linear-gradient(to bottom, orange, red)";
      } else if (dat.color === "pink") {
        gradientBackground = "linear-gradient(to bottom, pink, purple)";
      } else if (dat.color === "purple") {
        gradientBackground = "linear-gradient(to bottom, violet, indigo)";
      } else if(dat.color === "green") {
        gradientBackground = "linear-gradient(to bottom, #00cc00, #006600)";
      } else if (dat.color === "yellow") {
        gradientBackground = "linear-gradient(to bottom, #ffff00, #ffcc00)";
      } else if (dat.color === "red") {
        gradientBackground = "linear-gradient(to bottom, #ff0000, #cc0000)";
      } else {
        gradientBackground = "white"; 
      }

      return (
        <div
          key={dat.id}
          className='flex flex-col justify-center items-center w-[300px] h-[400px] border-solid border-2 m-3'
          style={{
            border: "2px solid",
            background: gradientBackground
          }}
        >
          <img className='w-[200px] h-[200px] m-5' src={dat.url} alt="" />
          <div className='w-full text-center text-white text-3xl' >
            <p>{dat.name}</p>
          </div>
        </div>
      );
    })
  );
}

export default Card;
