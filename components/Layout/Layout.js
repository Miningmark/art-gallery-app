import Navigation from "../Navigation/Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <h1>Art Gallery</h1>
      {children}
      <Navigation />
    </div>
  );
}
