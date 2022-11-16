import React from "react";

const JoinButton = ({ age }: { age: number }) => {
  return (
    <div>
      <button disabled={age < 19}>가입</button>
      {age < 19 ? (
        <h2 style={{ color: "red" }}>성인만 가입이 가능합니다.</h2>
      ) : (
        <h2 style={{ color: "black" }}>가입이 가능합니다</h2>
      )}
    </div>
  );
};
export default JoinButton;
