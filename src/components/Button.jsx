import React from "react";

const Button = (props) => {
  return (
    <>
      <button
        onClick={() => {
          if (props.calculate) {
            return props.calculate(props.value);
          }
          props.input(props.button);
        }}
      >
        {props.button}
      </button>
    </>
  );
};

export default Button;
