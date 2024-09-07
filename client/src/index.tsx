import ReactDOM from "react-dom/client";
import "./index.css";

import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

export type Review = {
  review: string;
  liked: number;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<RouterProvider router={router} />);
