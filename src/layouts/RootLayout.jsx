import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <h1>Navbrand</h1>
        <nav>
          <NavLink path="/">Add Book</NavLink>
          <NavLink path="all-books">All Books</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
