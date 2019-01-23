import React from "react"
import { Container } from "reactstrap"
import About from "./content/About";
import Education from "./content/Education";
const Content = ({}) => {
    return (    
    <div>
        <Container>
            <About/>
            <Education/>
        </Container>
    </div>
    )
    
} 
export default Content;