import React from "react";
import Typewriter from "typewriter-effect";

export const BotTypeWriter = (props) => {
  return (
    <Typewriter
      options={{
        delay: props.delay ? props.delay : 50,
        cursor: "",
      }}
      onInit={(typewriter) => {
        props.title && typewriter.typeString(`<p>${props.title}</p>`);
        typewriter
          .typeString(`${props.content}`)
          .pauseFor(2500)
          .callFunction(() => {
            return null;
          })
          .start();
      }}
    />
  );
};
