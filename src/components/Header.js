import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './component.css'
import Profile from "../asset/pw.png"



export default class Header extends Component {
    render() {
        return (
            <div className = "Header-Font">
                <Jumbotron fluid>
                    <Container fluid>
                        <img src={Profile} className="pro-pic" style={{paddingBottom:"10px"}}/>
                        <h1 className="display-3" style={{fontSize:"100px"}}>PEAW</h1>
                        <div className="lead" style={{fontSize:"32px"}}>MISS PIMWIPA   SAKHULKHAM</div>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}