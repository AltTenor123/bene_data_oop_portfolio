import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Midterm from "./pages/Midterm";
import Finals from "./pages/Finals";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "midterm", Component: Midterm },
      { path: "finals", Component: Finals },
      { path: "contact", Component: Contact },
    ],
  },
]);
