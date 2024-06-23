import React from "react";

const HomepageRight = (props) => {
  // Data destructuring
  const { Button } = props.data;

  return (
    <div>
      {
      Button.map((b, index) => 
        {
        return (
          <div>
            <button>{b.text}</button>
            <p>{b.url}</p>
          </div>
        );
      })}
    </div>
  );
};

export default HomepageRight;
