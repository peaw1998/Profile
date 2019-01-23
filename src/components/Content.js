import React from "react"
import { Container } from "reactstrap"
import About from "./content/About";
import Education from "./content/Education";
import Skills from "./content/Skills";

const Content = ({}) => {
    return (    
    <div>
        <Container>
            <About/>
            <Education/>
            <Skills/>
        </Container>
    </div>
    )
} 
export default Content;