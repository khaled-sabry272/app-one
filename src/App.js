function App() {
    return (
      <div className="main">
        <header className="webhead"> PreRoz </header>{" "}
        <nav className="navbar">
          <ul>
            <li>
              <a href="www.com" className="cative">
                HOME{" "}
              </a>{" "}
            </li>{" "}
            <li>
              <a href="www.com"> ABOUT </a>{" "}
            </li>{" "}
            <li>
              <a href="www.com"> SERVIGE </a>{" "}
            </li>{" "}
            <li>
              <a href="www.com"> DESIGN </a>{" "}
            </li>{" "}
            <li>
              <a href="www.com"> CONTACT </a>{" "}
            </li>{" "}
          </ul>{" "}
        </nav>{" "}
        <div className="search">
          <input type="search" id="search" placeholder="text search" />
          <button className="shr"> search </button>{" "}
        </div>{" "}
        <section className="informationsection">
          <h1>
            Web Design & amp; <br />
            <span> Development </span> <br />
            course{" "}
          </h1>{" "}
          <p>
            Web esign is a specialisation of Design stream.They also use HTML.{" "}
            <br />
            CSS.WYSIWYG editing software.mark up validators etc... <br />
            to create design elements.{" "}
          </p>{" "}
          <br />
          <button> JOIN US </button>{" "}
        </section>{" "}
        <aside className="form">
          <h1> Login Here </h1>{" "}
          <form>
            <input type="mail" placeholder="username" size={50} /> <br /> <br />
            <input type="password" size={50} placeholder="password" />
            <input
              type="submit"
              defaultValue="Login"
              className="login"
              value={"send"}
            />{" "}
          </form>{" "}
          <p className="preone"> Don 't have an account?</p>{" "}
          <p className="pretwo">
            <a href="www.com"> Sign up </a> here{""}{" "}
          </p>{" "}
          <p className="pretree"> Log in with </p>{" "}
          <div className="acoin">
            <a href="www.com">
              <i className="fab fa-facebook" />
            </a>{" "}
            <a href="www.com">
              <i className="fab fa-instagram" />
            </a>{" "}
            <a href="www.com">
              <i className="fab fa-twitter" />
            </a>{" "}
            <a href="www.com">
              <i className="fab fa-google" />
            </a>{" "}
            <a href="www.com">
              <i className="fab fa-skype" />
            </a>{" "}
          </div>{" "}
        </aside>{" "}
      </div>
    );
}

export default App;