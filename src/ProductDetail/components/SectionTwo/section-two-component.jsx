import React from "react";
import "./section-two.styles.scss";

function SectionTwo({
  firstFeature,
  secondFeature,
  firstNumberOfUnits,
  firstUnitType,
  secondNumberOfUnits,
  secondUnitType,
  thirdNumberOfUnits,
  thirdUnitType,
  fourthNumberOfUnits,
  fourthUnitType,
  fifthNumberOfUnits,
  fifthUnitType,
}) {
  return (
    <>
      <main className="main">
        <article className="article">
          <h2>features</h2>
          <p>{firstFeature}</p>
          <p>{secondFeature}</p>
        </article>

        <aside className="aside">
          <h2>in the box</h2>
          <ul>
            <li>
              <span>{firstNumberOfUnits}</span>
              {firstUnitType}
            </li>
            <li>
              <span>{secondNumberOfUnits}</span>
              {secondUnitType}
            </li>
            <li>
              <span>{thirdNumberOfUnits}</span>
              {thirdUnitType}
            </li>
            <li>
              <span>{fourthNumberOfUnits}</span>
              {fourthUnitType}
            </li>
            <li>
              <span>{fifthNumberOfUnits}</span>
              {fifthUnitType}
            </li>
          </ul>
        </aside>
      </main>
    </>
  );
}

export default SectionTwo;
