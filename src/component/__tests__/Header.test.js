import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  //load Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //Check if logo is loader
  console.log(header);
  const logo = header.getAllByTestId("logo");
  console.log(logo);

  expect(logo[0].src).toBe(
    "https://www.graphicdesk.in/images/client/logo8.png"
  );
});
