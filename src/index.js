import React from "react";
import ReactDom from "react-dom/client";
import Menu from "./menu.json";

// CSS
import "./index.css";

// Images
import logo from "./images/zen.png";
import spiceImage from "./images/spice.png";
import ramen from "./images/ramen.webp";
import shoyu from "./images/shoyu.png";
import sushi from "./images/sushi.webp";
import poke from "./images/poke.png";
import appetizer from "./images/appetizer.webp";
import dessert from "./images/dessert.webp";
import beverage from "./images/beverage.webp";
import beer from "./images/beer.webp";
import sake from "./images/sake.webp";

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

function Operation() {
  return (
    <>
      <div className="business-information">
        <span>957 Joe Frank Harris Pkwy SE</span>
        <span>Cartersville, GA 30120</span>
        <span>(470) 227-7125</span>
      </div>
      <div className="operation">
        <span>
          <strong>Hours of Operation</strong>
        </span>
        <span>Monday: Closed</span>
        <span>Tuesday: Closed</span>
        <span>Wednesday: 11:30am - 8:30pm</span>
        <span>Thursday: 11:30am - 8:30pm</span>
        <span>Friday: 11:30am - 9:00pm</span>
        <span>Saturday: 11:30am - 9:00pm</span>
        <span>Sunday: 12:00pm - 8:00pm</span>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer>&copy; {new Date().getFullYear()} ZEN RAMEN & SUSHI BURRITO</footer>
  );
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
    <section id={props.navId} className="anchor-target">
      <div className="section-subheading">
        {props.image ? <img src={props.image} alt="Ramen" /> : null}
        <h2>{props.heading}</h2>
      </div>
      <div className="section-subcontent">
        {props.menuItem.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="item-heading">
                <h3>
                  {item.name}
                  {item.raw ? "*" : null}
                  {spiceLevel(item.spiceLevel)}
                </h3>
                <span className="price">
                  <strong>{item.price}</strong>
                </span>
              </div>
              <div>
                {item.ingredients
                  ? item.ingredients.map((ingredient) => {
                      return <span className="ingredient">{ingredient}</span>;
                    })
                  : null}
              </div>
              <div>{item.description ? item.description : null}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function NavBar() {
  return (
    <section>
      <div className="section-heading">
        <div className="nav-bar-heading">ZEN MENU</div>
        <div className="nav-bar">
          <a className="nav-item" href="#appetizer-section">
            APPETIZER
          </a>
          <a className="nav-item" href="#tonkotsu-ramen-section">
            TONKOTSU RAMEN
          </a>
          <a className="nav-item" href="#shoyu-ramen-section">
            SHOYU RAMEN
          </a>
          <a className="nav-item" href="#poke-section">
            POKE BOWL
          </a>
          <a className="nav-item" href="#burrito-section">
            SUSHI BURRITO
          </a>
          <a className="nav-item" href="#dessert-section">
            DESSERT
          </a>
          <a className="nav-item" href="#beverage-section">
            BEVERAGE
          </a>
          <a className="nav-item" href="#beer-section">
            BEER
          </a>
          <a className="nav-item" href="#sake-section">
            SAKE
          </a>
        </div>
        <div className="nav-footer">
          *CONSUMING RAW OR UNDERCOOKED MEATS, POULTRY, SEAFOOD, SHELLFISH OR
          EGGS MAY INCREASE YOUR RISK OF FOODBORNE ILLNESS. PLEASE INFORM YOUR
          SERVER OF FOOD ALLERGIES.
        </div>
      </div>
      <div className="section-content">
        <Section
          navId="appetizer-section"
          heading="APPETIZER"
          image={appetizer}
          menuItem={Menu["appetizer"]}
        />
        <Section
          navId="tonkotsu-ramen-section"
          heading="TONKOTSU RAMEN"
          image={ramen}
          menuItem={Menu["ramen"]["tonkotsu"]}
        />
        <Section
          navId="shoyu-ramen-section"
          heading="SHOYU RAMEN"
          image={shoyu}
          menuItem={Menu["ramen"]["shoyu"]}
        />
        <Section
          navId="poke-section"
          heading="POKE BOWL"
          image={poke}
          menuItem={Menu["pokeBowl"]}
        />
        <Section
          navId="burrito-section"
          heading="SUSHI BURRITO"
          image={sushi}
          menuItem={Menu["burrito"]}
        />
        <Section
          navId="dessert-section"
          heading="DESSERT"
          image={dessert}
          menuItem={Menu["dessert"]}
        />
        <Section
          navId="beverage-section"
          heading="BEVERAGE"
          image={beverage}
          menuItem={Menu["beverage"]}
        />
        <Section
          navId="beer-section"
          heading="BEER"
          image={beer}
          menuItem={Menu["alcohol"]["beer"]}
        />
        <Section
          navId="sake-section"
          heading="SAKE"
          image={sake}
          menuItem={Menu["alcohol"]["sake"]}
        />
      </div>
    </section>
  );
}

function App() {
  return (
    <div>
      <Header />
      {}
      <Operation />
      <NavBar />
      <Footer />
    </div>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
