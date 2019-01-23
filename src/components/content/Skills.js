import React, { Component } from "react"
import { Container } from "reactstrap";
import { Divider, Row, Col } from "antd";
import "./content.css"
import "./animated.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJava, faJs, faStackOverflow, faHtml5, faCss3 } from "@fortawesome/fontawesome-free-brands";


export default class Skills extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="Font">
                        <p><h2>Skills</h2></p>
                        <div>
                            <Container className="flex">
                                <FontAwesomeIcon className="faReact" icon={faReact} size="6x" />
                                <FontAwesomeIcon className="faJava" icon={faJava} size="6x" />
                                <FontAwesomeIcon className="faJs" icon={faJs} size="6x" />
                                <FontAwesomeIcon className="faHtml5" icon={faHtml5} size="6x" />
                                <FontAwesomeIcon className="faCss3" icon={faCss3} size="6x" />
                                <FontAwesomeIcon className="faStack" icon={faStackOverflow} size="6x" />
                            </Container>
                        </div>
                        <Divider />
                    </div>
                </Container>
            </div>
        )
    }
}