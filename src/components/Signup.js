/**
 * Sign Up With Firebase
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Row, Button } from 'reactstrap';
import { Container, Col} from 'reactstrap';
import { loginUser } from '../redux/action';

class SignUpUser extends Component {

	state = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	}

	/**
	 * On User Signup
	 */
	onUserSignUp = async () => {
		const { email, password, firstName, lastName } = this.state;
		if (email !== '' && password !== '') {
            let signUpData = await localStorage.getItem('signUPData')
            let newUser = {email:email,password:password,firstName:firstName,lastName:lastName}      
            console.log('signUpData',signUpData)
            if(signUpData != null && signUpData != 'null'){
                console.log('sdsssssssfs')
                signUpData.push(newUser)
            } else{
                console.log('sdfs')
                signUpData = []
                signUpData.push(newUser)
            }
            let res = await localStorage.setItem("signUPData",JSON.stringify(signUpData))
            
            let token = await localStorage.setItem("token",email)
            this.props.history.push('/');
            console.log('res',res)
        }
	}

	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	render() {
		const { firstName, lastName, email, password } = this.state;
		return (
            <Container className="mt-10" >
                <Row className="m-0">
                <Col md={6} className="mx-auto text-center justify-content mt-10" style={{border:"1px solid gray"}}>
                <Row className="m-0">
									<div className="session-body text-center">
										<div className="session-head mb-15">
											<h2>SignUp</h2>
										</div>
										<Form>
											<FormGroup className="has-wrapper">
												<Input
													type="text"
													value={firstName}
													name="firstName"
													id="firstName"
													className="has-input input-lg"
													placeholder="Enter First Name"
													onChange={(e) => this.setState({ firstName: e.target.value })}
												/>
												<span className="has-icon"><i className="ti-user"></i></span>
											</FormGroup>
											<FormGroup className="has-wrapper">
												<Input
													type="text"
													value={lastName}
													name="lastName"
													id="lastName"
													className="has-input input-lg"
													placeholder="Enter Last Name"
													onChange={(e) => this.setState({ lastName: e.target.value })}
												/>
												<span className="has-icon"><i className="ti-user"></i></span>
											</FormGroup>
											<FormGroup className="has-wrapper">
												<Input
													type="mail"
													value={email}
													name="user-mail"
													id="user-mail"
													className="has-input input-lg"
													placeholder="Enter Email Address"
													onChange={(e) => this.setState({ email: e.target.value })}
												/>
												<span className="has-icon"><i className="ti-email"></i></span>
											</FormGroup>
											<FormGroup className="has-wrapper">
												<Input
													value={password}
													type="Password"
													name="user-pwd"
													id="pwd"
													className="has-input input-lg"
													placeholder="Password"
													onChange={(e) => this.setState({ password: e.target.value })}
												/>
												<span className="has-icon"><i className="ti-lock"></i></span>
											</FormGroup>
											<FormGroup className="mb-15">
												<Button
													className="btn-info text-white btn-block w-100"
													variant="raised"
													size="large"
													onClick={this.onUserSignUp}>
													Sign Up
                            					</Button>
											</FormGroup>

										</Form>
									</div>
                    </Row>
                    
                                    
                    <div>
                        <a className="mr-15" onClick={() => this.onUserSignUp()}>Create New account?</a>
                        <Button variant="raised" className="btn-light" onClick={() => this.onUserSignUp()}>Sign Up</Button>
                    </div>
                </Col>
                    </Row>
                </Container>
		);
	}
}

// Set Props when actions are dispatch
const mapStateToProps = state => ({
    loading: state.signup.loading,
});

// connect action with store for dispatch
export default connect(mapStateToProps, {
    loginUser,
})(SignUpUser);

