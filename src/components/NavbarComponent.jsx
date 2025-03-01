import CartWidget from "./CartWidgetComponent";

const NavbarComponent = () => {
  return (
    <nav className="navContainer" style={{display:"flex", justifyContent: 'space-between', alignItems: 'center'}}>
      <img src="./logo.png" alt="" style={{maxHeight: '20px', maxWidth: '20px'}} />
      <a className="navlink" href="">Coder Flex Shop</a>
      <a className="navlink" href="">Nuevos</a>
      <a className="navlink" href="">Mas vendidos</a>
      <a className="navlink" href="">Ofertas</a>
      <CartWidget/>
    </nav>
  );
};

export default NavbarComponent;
