import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("userList test", () => {
  const users = ["tom", "jane", "mike"];
  test("ul이 있다", () => {
    render(<UserList users={users} />);
    const ulEl = screen.getByRole("list");
    expect(ulEl).toBeInTheDocument();
  });

  test("li가 3개 나오는가?", () => {
    // render(<UserList users={users} />);
    render(<UserList users={[]} />);
    //getBy 쿼리를 이용하여 찾을때 해당 요소가 없다면 0을 넣어도 실패한다.
    // const ulEl = screen.getAllByRole("listitem");
    //둘다 안댐
    // expect(ulEl).toHaveLength(0);
    // expect(ulEl).not.toHaveLength(0);

    //요소가 빈배열이거나 해당 요소가 없어지는 경우가 발생하면 queryBy를 활용하자
    const qrEl = screen.queryByRole("listitem");
    expect(qrEl).not.toBeInTheDocument();

    const qrAEl = screen.queryAllByRole("listitem");
    expect(qrAEl).toHaveLength(0);
  });

  test("0.5초후 제목이 나타남", async () => {
    render(<UserList users={users} />);

    //debug는 렌더링 된 돔 트리를 보여준다!
    // screen.debug();

    //0.5초뒤에 나타나기때문에 찾지 못한다.
    // const titleEl = screen.getByRole("heading", {
    //   name: "사용자 목록",
    // });

    //findByRole쿼리는 promise이다. default delay가 1초이다.(기본값으로 1초동안 응답을 기다린다)
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        //응답 대기시간을 지정할 수 있다.(넉넉하게 잡아주자)
        timeout: 2000,
      }
    );
    expect(titleEl).toBeInTheDocument();
  });
});
