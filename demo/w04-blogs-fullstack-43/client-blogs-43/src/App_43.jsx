import { createBrowserRouter, RouterProvider } from "react-router";
import {
  HomeLayoutPage_43,
  BlogStaticPage_43,
  HomePage_43,
  BlogLocalJsonPage_43,
  BlogNodePage_43,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayoutPage_43 />,
    children: [
      {
        index: true,
        element: <HomePage_43 />,
      },
      {
        path: "static_43",
        element: <BlogStaticPage_43 />,
      },
      {
        path: "localjson_43",
        element: <BlogLocalJsonPage_43 />,
      },
      {
        path: "node_43",
        element: <BlogNodePage_43 />,
      },
    ],
  },
]);

const App_43 = () => {
  return <RouterProvider router={router} />;
};

export default App_43;
