import React from 'react'
import SectionMiniDetails from './Section-Mini-Details/section-mini-details.component'
import SectionMain from './Section-Main/Section-Main.component'
import './sections.styles.scss'

function Sections() {
  return (
    <div className="wrapper">
      <SectionMiniDetails />
      <SectionMain />
    </div>
  )
}

export default Sections
