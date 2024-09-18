import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layouts/RootLayout";
import AllBooks, { booksLoader } from "./pages/AllBooks";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="all-books" element={<AllBooks />} loader={booksLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
