import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import { RestaurantData } from "../../mocks/RestaurantData";
import "@testing-library/jest-dom";
//mock of fetch for test case
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RestaurantData);
    },
  });
});

test("Shimmerload  on Homepage", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const Shimmer = body.getByTestId("shimmer");
  expect(Shimmer.children.length).toBe(20);

  console.log(Shimmer);
});

test("Restaurant should load on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("searchBtn")));

  const restaurant_list = body.getByTestId("restaurant-list");

  expect(restaurant_list.children.length).toBe(21);
});

test("Search for string  on Homepage", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(() => expect(body.getByTestId("searchBtn")));

  const input = body.getByTestId("searchInput");

  const searchBtn = body.getByTestId("searchBtn");

  fireEvent.change(input, {
    target: {
      value: "ice",
    },
  });

  fireEvent.click(searchBtn);
  const restaurant_list = body.getByTestId("restaurant-list");

  expect(restaurant_list.children.length).toBe(2);
});
