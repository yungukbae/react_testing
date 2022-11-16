import React from "react";

const Hello = (props: { user: { name?: string; age: number } }) => {
  return props.user.name ? <h1>HELLO {props.user.name}</h1> : <div>HELLO</div>;
};

export default Hello;
