import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  useLoaderData,
  createMemoryRouter,
  RouterProvider,
} from "react-router-dom";

import Shop from "../components/Shop";

jest.mock("../components/ShopItem", () => ({ name }) => {
  return <div data-testid="item">{name}</div>;
});

jest.mock("../components/Modal", () => ({ isOpen }) => {
  return (
    <div data-testid="modal" is-open={isOpen.toString()}>
      Modal
    </div>
  );
});

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLoaderData: jest.fn(),
}));

const mockItems = [
  {
    id: 1,
    name: "Item 1",
    images: ["img1.jpg"],
    description: "",
    price: 1,
  },
  {
    id: 2,
    name: "Item 2",
    images: ["img2.jpg"],
    description: "",
    price: 1,
  },
  {
    id: 3,
    name: "Item 3",
    images: ["img3.jpg"],
    description: "",
    price: 1,
  },
];

describe("Shop component", () => {
  test("renders list of items", () => {
    const routes = [
      {
        path: "/shop",
        element: <Shop items={mockItems} />,
      },
    ];

    const router = createMemoryRouter(routes, { initialEntries: ["/shop"] });

    render(<RouterProvider router={router} />);

    expect(screen.getAllByTestId("item").length).toBe(3);
    expect(screen.getAllByTestId("item")[0].textContent).toEqual("Item 1");
    expect(screen.getAllByTestId("item")[1].textContent).toEqual("Item 2");
    expect(screen.getAllByTestId("item")[2].textContent).toEqual("Item 3");
  });

  test("renders modal for item details when data provided", () => {
    const routes = [
      {
        path: "/shop/:itemId",
        element: <Shop items={[]} />,
      },
    ];
    const router = createMemoryRouter(routes, { initialEntries: ["/shop/1"] });

    useLoaderData.mockReturnValue(mockItems[0]);

    render(<RouterProvider router={router} />);

    expect(screen.getByTestId("modal")).toBeInTheDocument();
    expect(screen.getByTestId("modal")).toHaveAttribute("is-open", "true");
  });
});
