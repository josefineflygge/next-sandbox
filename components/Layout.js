import Nav from "./Nav";

function Layout(props) {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
}

export default Layout;
