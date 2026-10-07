import { createBrowserRouter } from "react-router";
import App from "./App";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Testimoni from "./pages/Testimoni";
import Faq from "./pages/Faq";
import FaqDetail from "./pages/FaqDetail";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/testimoni", element: <Testimoni /> },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/home/:id",
        element: <FaqDetail />,
      },
    ],
  },
]);
