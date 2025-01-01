import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Menu from "./menu.json";

// CSS
import "./index.css";

// Images
import logo from "./images/zen.png";
import cloud from "./images/cloud.png";
import spiceImage from "./images/spice.png";
import combo from "./images/combo.png";
import ramen from "./images/ramen.webp";
import shoyu from "./images/shoyu.png";
import miso from "./images/miso.png";
import vampire from "./images/vampire.png";
import sushi from "./images/sushi.webp";
import poke from "./images/poke.png";
import kimchi from "./images/kimchi.webp";
import sauce from "./images/sauce.webp";
import protein from "./images/protein.webp";
import appetizer from "./images/appetizer.webp";
import dessert from "./images/dessert.webp";
import beverage from "./images/beverage.webp";
import lunar from "./images/lunar.jpg";
import beer from "./images/beer.webp";
import sake from "./images/sake.webp";

// Icons
import upArrow from "./icons/up-arrow.png";
import downArrow from "./icons/down-arrow.png";

// console.log(Menu);

function Logo() {
  return (
    <div className="image-container">
      <img className="cloud" src={cloud} alt="cloud" />
      <img className="logo" src={logo} alt="Zen Logo" />
    </div>
  );
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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleHours = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="business-information">
      <div className="street">957 JOE FRANK HARRIS PKWY SE</div>
      <div className="city-state-zip">CARTERSVILLE, GA 30120</div>
      <div className="phone">(470) 227-7125</div>
      <div className="operation" onClick={toggleHours}>
        HOURS OF OPERATION
        <span>{isExpanded ? <img className="icon" src={upArrow} alt="Up arrow" /> : <img className="icon" src={downArrow} alt="Down arrow" />}</span>
      </div>
      {isExpanded && (
        <>
          <div className="weekday-row closed">
            <span className="day">MONDAY</span>
            <span className="hours">CLOSED</span>
          </div>
          <div className="weekday-row closed">
            <span className="day">TUESDAY</span>
            <span className="hours">CLOSED</span>
          </div>
          <div className="weekday-row">
            <span className="day">WEDNESDAY</span>
            <div className="hours">
              <span>11:30AM</span>-<span>8:30PM</span>
            </div>
          </div>
          <div className="weekday-row">
            <span className="day">THURSDAY</span>
            <div className="hours">
              <span>11:30AM</span>-<span>8:30PM</span>
            </div>
          </div>
          <div className="weekday-row">
            <span className="day">FRIDAY</span>
            <div className="hours">
              <span>11:30AM</span>-<span>9:30PM</span>
            </div>
          </div>
          <div className="weekday-row">
            <span className="day">SATURDAY</span>
            <div className="hours">
              <span>11:30AM</span>-<span>9:30PM</span>
            </div>
          </div>
          <div className="weekday-row">
            <span className="day">SUNDAY</span>
            <div className="hours">
              <span>12:00PM</span>-<span>8:00PM</span>
            </div>
          </div>
          <div className="last-call">LAST CALL 20 MIN BEFORE CLOSE</div>
        </>
      )}
    </div>
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
          key={`spice-${i}`}
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
        <h4>{props.subheading ? props.subheading : null}</h4>
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
                  ? item.ingredients.map((ingredient, index) => {
                      return (
                        <span
                          key={`ingredient-${index}`}
                          className="ingredient"
                        >
                          {ingredient}
                        </span>
                      );
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
        <div className="nav-bar-heading">
          <a className="zen-menu" href="#top">
            ZEN MENU
          </a>
        </div>
        <div className="nav-bar">
          <a className="nav-item" href="#appetizer-section">
            APPETIZER
          </a>
          <a className="nav-item" href="#combo-section">
            COMBO
          </a>
          <a className="nav-item" href="#tonkotsu-ramen-section">
            TONKOTSU RAMEN
          </a>
          <a className="nav-item" href="#shoyu-ramen-section">
            SHOYU RAMEN
          </a>
          <a className="nav-item" href="#miso-ramen-section">
            MISO RAMEN
          </a>
          <a className="nav-item" href="#vampire-ramen-section">
            VAMPIRE RAMEN
          </a>
          <a className="nav-item" href="#kid-ramen-section">
            KID RAMEN
          </a>
          <a className="nav-item" href="#poke-section">
            POKE BOWL
          </a>
          <a className="nav-item" href="#burrito-section">
            SUSHI BURRITO
          </a>
          <a className="nav-item" href="#protein-section">
            PROTEIN
          </a>
          <a className="nav-item" href="#side-section">
            SIDE
          </a>
          <a className="nav-item" href="#sauce-section">
            SAUCE
          </a>
          <a className="nav-item" href="#dessert-section">
            DESSERT
          </a>
          <a className="nav-item" href="#beverage-section">
            BEVERAGE
          </a>
          <a className="nav-item" href="#seltzer-section">
            HARD SELTZER
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
          navId="combo-section"
          heading="COMBO"
          image={combo}
          menuItem={Menu["combo"]}
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
          navId="miso-ramen-section"
          heading="MISO RAMEN"
          image={miso}
          menuItem={Menu["ramen"]["miso"]}
        />
        <Section
          navId="vampire-ramen-section"
          heading="VAMPIRE RAMEN"
          subheading="BROTHLESS"
          image={vampire}
          menuItem={Menu["ramen"]["vampire"]}
        />
        <Section
          navId="kid-ramen-section"
          heading="KID RAMEN"
          image={shoyu}
          menuItem={Menu["ramen"]["kid"]}
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
          subheading="NO SUBSTITUTIONS"
          image={sushi}
          menuItem={Menu["burrito"]}
        />
        <Section
          navId="protein-section"
          heading="PROTEIN"
          image={protein}
          menuItem={Menu["proteins"]}
        />
        <Section
          navId="side-section"
          heading="SIDE"
          image={kimchi}
          menuItem={Menu["sides"]}
        />
        <Section
          navId="sauce-section"
          heading="SAUCE"
          image={sauce}
          menuItem={Menu["sauces"]}
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
          navId="seltzer-section"
          heading="HARD SELTZER"
          image={lunar}
          menuItem={Menu["alcohol"]["seltzer"]}
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
    <>
      <Header />
      <Operation />
      <NavBar />
      <Footer />
    </>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);
