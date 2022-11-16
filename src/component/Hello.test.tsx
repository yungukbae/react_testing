import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

const user = {
  name: "Tom",
  age: 30,
};

const noName = {
  age: 30,
};

test("Hello 라는 글자가 포함되는가?", () => {
  //컴포넌트를 불러와 렌더시킨다
  render(<Hello user={user} />);
  //스크린에 hello라는 글자가 포함되어있는지 확인한다.
  const helloEl = screen.getByText(/HELLO/i);
  //테스트 해본다.
  expect(helloEl).toBeInTheDocument();
});

test("snapshot: name 있음", () => {
  const el = render(<Hello user={user} />);
  expect(el).toMatchSnapshot();
});

test("snapshot: name 없음", () => {
  const el = render(<Hello user={noName} />);
  expect(el).toMatchSnapshot();
});
