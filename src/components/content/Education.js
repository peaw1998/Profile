import React, { Component } from "react"
import { Container } from "reactstrap";
import { Divider, Timeline } from "antd";
import "./content.css"

export default class Education extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div className="Font">
                        <p><h2>Education</h2></p>
                        <div style={{ paddingLeft: "5%" }}>
                            <Timeline>
                                <Timeline.Item color="green">High School</Timeline.Item>
                                <Timeline.Item color="green">University</Timeline.Item>
                            </Timeline>
                        </div>
                        <Divider/>
                    </div>
                </Container>
            </div>
        )
    }
}