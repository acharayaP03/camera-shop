import React from "react";
import { createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";


// pages
import { Home, Products, ProductDetail, Search } from "./pages";

// components
import { Header, Footer } from "./components";

const Layout = ({ children }: any) => (
    <div>
      <Header />
      <Outlet/>
      <Footer />
    </div>
);


const Router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/products", element: <Products /> },
            { path: "/products/:id", element: <ProductDetail /> },
            { path: "/search", element: <Search /> },
        ]
    }
])
function App() {
  return (
      <div>
            <RouterProvider router={Router}/>
      </div>
  )
}

export default App
