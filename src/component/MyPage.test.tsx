import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);
  const textEl = screen.getByText(/로그인을 해주세요/);
  const rolEl = screen.getByRole("button");
  expect(textEl).toBeInTheDocument();
  expect(rolEl).toBeInTheDocument();
  expect(rolEl).toHaveTextContent("로그인");
});

test("유저가 있으면 환영문구를 보여준다.", () => {
  const user = { name: "mike" };
  render(<MyPage user={user} />);
  const txtEl = screen.getByText(/mike님 환영합니다/);
  expect(txtEl).toBeInTheDocument();
});
