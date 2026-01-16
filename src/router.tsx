import { createBrowserRouter } from "react-router";
import Directory from "./pages/Directory/Directory";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Directory,
  },
]);
