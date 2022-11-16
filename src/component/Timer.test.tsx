import { render } from "@testing-library/react";
import Timer from "./Timer";

test("초 표시", () => {
  // 123456789라는 고정된 값으로 항상 수행하기 떄문에 snapshot test에 성공한다
  Date.now = jest.fn(() => 123456789);
  const el = render(<Timer />);
  expect(el).toMatchSnapshot();
});
