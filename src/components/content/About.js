import React ,{Component} from "react"
import { Container } from "reactstrap";
import { Divider  } from "antd";
import "./content.css"

export default class About extends Component {
    render()
    {
        return(
            <div>
                <Container>
                    <div className="Font">
                        <p><Divider style={{fontSize:"28px"}}>ABOUT ME</Divider></p>
                        <p>Date of Birth  : </p>
                        <p>Address : </p>
                        <p>Interesting Things : React-Native , C++ , JAVA</p>
                        <Divider />
                    </div>     
                </Container>
            </div>
        )
    }
}