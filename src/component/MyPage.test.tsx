import {
  getByAltText,
  getByDisplayValue,
  getByLabelText,
  getByPlaceholderText,
  getByRole,
  getByTestId,
  getByText,
  getByTitle,
  render,
  screen,
} from "@testing-library/react";
import MyPage from "./MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />);

  //getByText => 텍스트를 이용해 찾는다. 정규표현식,문자열(모든 문장을 입력해야 한다[특수기호 포함]) 사용가능하다
  const textEl = screen.getByText(/로그인을 해주세요/);
  expect(textEl).toBeInTheDocument();

  // getbyRole은 HTML 요소가 가지고있는 default role을 이용해 찾습니다.
  const rolEl = screen.getByRole("button");
  expect(rolEl).toBeInTheDocument();
  expect(rolEl).toHaveTextContent("로그인");

  //heading 요소의 경우 option에 level요소를 추가하여 구분할 수 있다
  const headEl = screen.getByRole("heading", {
    level: 1,
  });
  expect(headEl).toBeInTheDocument();

  //input 과 textarea는 default role이 같아 option으로 구분해주어야 한다.
  //options의 name은 해당 default role의 innerHTML값을 입력해주면 해당 값을 가진 엘리먼트를 지목할 수 있따.
  //name => <label htmlFor="username">이름</label>
  //input=> <input type="text" id="username" />
  const textboxEl = screen.getByRole("textbox", {
    name: "이름", //label innerHTML 값
  });
  expect(textboxEl).toBeInTheDocument();

  //또는 그냥 getByLabelText를 사용하자
  const labelEl = screen.getByLabelText("이름");
  expect(labelEl).toBeInTheDocument();

  //같은 이름의 label이라면 options에 selector를 통해 구분하자
  const selectEl = screen.getByLabelText("이름", {
    selector: "input", // 태그이름
  });
  expect(selectEl).toBeInTheDocument();

  //input의 value를 통해 찾을 수 있다.
  const valueEl = screen.getByDisplayValue("tom");
  expect(valueEl).toBeInTheDocument();

  const testidEl = screen.getByTestId("my-div");
  expect(testidEl).toBeInTheDocument();
});

test("유저가 있으면 환영문구를 보여준다.", () => {
  const user = { name: "mike" };
  render(<MyPage user={user} />);
  const txtEl = screen.getByText(/mike님 환영합니다/);
  expect(txtEl).toBeInTheDocument();
});

//그 외에도 All을 붙여 매칭되는 요소들을 배열로 반환 받을 수 있다.
// getByRole => getAllByRole
// getByLabelText => getAllByLabelText
// getByPlaceholderText => getAllByPlaceholderText
// getByText => getAllByText
// getByDisplayValue => getAllByDisplayValue
// getByAltText => getAllByAltText
// getByTitle => getAllByTitle
// getByTestId => getAllByTestId
