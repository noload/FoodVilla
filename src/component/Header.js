const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://www.graphicdesk.in/images/client/logo8.png"
      />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-item">
          <ul>
            <li className="active">Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
