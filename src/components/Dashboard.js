import React from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patients: [
          {
          name : "patientDetail",
          redirect: "patient-details",
          description : "Display Patients Details"
        },
        {
            name : "patientList",
            redirect: "patient-list",
            description : "Display Patients List"
          },
          {
              name: "Add Patient",
              redirect : "add-patient",
              description : "Add Patients Data"
          }
    ],
    };
  }

  render() {
    return (
      <Row className="m-0">
          {this.state.patients && this.state.patients.length
            ? this.state.patients.map((details, index) => {
                return (
                  <Col md={3} key={index} className="m-5">
                    <div className="text-center">
                      <Card>
                        <CardImg
                          top
                          width="100%"
                          src={details.url ? details.url : 'https://static.wikia.nocookie.net/animated_inanimate_battle/images/a/a3/Image-not-found.png/revision/latest?cb=20200723230444'}
                          alt={details.name}
                        />
                        <CardBody>
                          <CardTitle tag="h5">{details.name}</CardTitle>
                          <CardSubtitle tag="h6" className="mb-2 text-muted">
                            {details.description}
                          </CardSubtitle>
                          <Button style={{ background: "transparent" }}>
                            <Link
                              to={{
                                pathname: details.redirect
                              }}
                            >
                              {details.name}
                            </Link>
                          </Button>
                        </CardBody>
                      </Card>
                    </div>
                  </Col>
                );
              })
            : null}
      </Row>
    );
  }
}

export default Home;
