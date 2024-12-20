import React from "react";
import ReactDom from "react-dom/client";
import Menu from "./menu.json";

// CSS
import "./index.css";

// Images
import logo from "./images/Zen.png";
import spiceImage from "./images/spice.png";

// console.log(Menu);

function Logo() {
  return <img className="logo" src={logo} alt="Zen Logo" />;
}

function Header() {
  return (
    <>
      <header className="header">
        <Logo />
      </header>
    </>
  );
}

function Footer() {
  return <footer>&copy; {new Date().getFullYear()} Zen Ramen & Sushi Burrito</footer>;
}

function Section(props) {
  const spiceLevel = (level) => {
    const spiceImageArray = [];
    for (let i = 0; i < level; i++) {
      spiceImageArray.push(
        <img
          className="spice-image"
          src={spiceImage}
          alt={`Level ${level} Spice`}
        />
      );
    }
    return spiceImageArray;
  };

  return (
    <section>
      <div className="section-heading">
        <h2>{props.heading}</h2>
      </div>
      <div className="section-content card">
        {props.menuItem.map((item) => {
          return (
            <div key={item.id}>
              <div className="item-heading">
                <h3>
                  {item.name}
                  {item.raw ? "**" : null}
                  {spiceLevel(item.spiceLevel)}
                </h3>
                <p>
                  <strong>{item.price}</strong>
                </p>
              </div>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Section heading="Ramen" menuItem={Menu["ramen"]} />
      <Section heading="Poke Bowl" menuItem={Menu["pokeBowl"]} />
      <Section heading="Sushi Burrito" menuItem={Menu["burrito"]} />
      <Footer />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
