import { createBrowserRouter, RouterProvider } from "react-router";
import {
  HomeLayoutPage_43,
  BlogStaticPage_43,
  HomePage_43,
  BlogLocalJsonPage_43,
  BlogNodePage_43,
  BookListPage_43,
  BlogSupaPage_43,
} from "./pages";
import {
  T11_ErrorExamplePage_43,
  T12_UseStateBasicsPage_43,
} from "./pages/tutorials";

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
      {
        path: "supa_43",
        element: <BlogSupaPage_43 />,
      },
      {
        path: "booklist_43",
        element: <BookListPage_43 />,
      },
    ],
  },
  {
    path: "/tutorials",
    element: <HomeLayoutPage_43 />,
    children: [
      {
        index: true,
        element: <HomePage_43 />,
      },
      {
        path: "t11_43",
        element: <T11_ErrorExamplePage_43 />,
      },
      {
        path: "t12_43",
        element: <T12_UseStateBasicsPage_43 />,
      },
    ],
  },
]);

const App_43 = () => {
  return <RouterProvider router={router} />;
};

export default App_43;
