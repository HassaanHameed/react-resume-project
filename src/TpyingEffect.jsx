import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import "./App.css";

function TypingEffect() {
  return (
    <div className="App">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString("Designer")
            .pauseFor(800)
            .deleteAll()
            .typeString("Developer")
            .pauseFor(800)
            .deleteAll()
            .typeString("Freelancer")
            .pauseFor(800)
            .deleteAll()
            .typeString("Photographer")
            .pauseFor(800)
            .deleteAll()
            .start();
        }}
      />
    </div>
  );
}

export default TypingEffect;
