import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <h1>Navbrand</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="all-books">View Books</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
