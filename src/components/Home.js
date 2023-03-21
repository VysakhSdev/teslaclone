import React from 'react'
import styled from "styled-components"
import Section  from "./Section"

function Home() {
  return (
    <Container >
        <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        RightBtnText="view inventory"
        />
        <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        RightBtnText="Demo Drive"/>
        <Section
        title="Model 3"
        description="Leasing starting at $349/mo"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        RightBtnText="Demo Drive"/>
        <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        RightBtnText=" View inventory"/>
        <Section
         title="Solar Panels"
         description="Lowest Cost Solar Panels in America"
         backgroundImg="solar-panel.jpg"
         leftBtnText=" Order Now"
         RightBtnText="Learn More"/>
         <Section
         title="Solar Roof"
         description="Produce Clean Energy From Your Roof"
         backgroundImg="solar-roof.jpg"
         leftBtnText=" Order Now"
         RightBtnText="Learn More"/>
         <Section
         title="Accessories"
         description=""
         backgroundImg="accessories.jpg"
         leftBtnText=" Order Now"

         />
        
   </Container>
  )
}

export default Home

const Container =styled.div`
`



