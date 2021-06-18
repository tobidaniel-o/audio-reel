import React from 'react'
import Navigation from "../../components/Navigation/navigation.component";
import "./category-header.styles.scss";

function CategoryHeader({header}) {
  return (
    <div className="category-header-container">
      <header className="category-header">
        <div className="wrapper">
          <Navigation />
          <h1>{header}</h1>
        </div>
      </header>
    </div>
  );
}

export default CategoryHeader
