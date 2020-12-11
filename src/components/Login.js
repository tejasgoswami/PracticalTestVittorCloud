import React, {Component,Fragment} from 'react';
import {Button, Container, Row, Col} from 'reactstrap';
import { Form, FormGroup, Input } from 'reactstrap';

class Login extends Component{
    state = {
		email: 'demo@example.com',
		password: 'test#123'
	}

    onUserLogin() {
		if (this.state.email !== '' && this.state.password !== '') {
			this.props.signinUserInFirebase(this.state, this.props.history);
		}
	}

	/**
	 * On User Sign Up
	 */
	onUserSignUp() {
		this.props.history.push('/signup');
	}

	//Auth0 Login
	loginAuth0() {
		// auth.login();
	}

    render(){

        const { email, password } = this.state;
        // const { loading } = this.props;
        
        console.log('sjdfgshdfjg')
        return(
            <Container className="mt-10" >
                <Row className="m-0">
                    <Col md={6} className="mx-auto text-center justify-content mt-10" style={{border:"1px solid gray"}}>
                        <h1>Login</h1>
                        
                        <Row className="m-0">
									<div className="session-body text-center">
										<div className="session-head mb-30">
										</div>
										<Form>
											<FormGroup className="has-wrapper">
												<Input
													type="mail"
													value={email}
													name="user-mail"
													id="user-mail"
													className="has-input input-lg"
													placeholder="Enter Email Address"
													onChange={(event) => this.setState({ email: event.target.value })}
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
													onChange={(event) => this.setState({ password: event.target.value })}
												/>
												<span className="has-icon"><i className="ti-lock"></i></span>
											</FormGroup>
											<FormGroup className="mb-15">
												<Button
													color="primary"
													className="btn-block text-white w-100"
													variant="raised"
													size="large"
													onClick={() => this.onUserLogin()}
												>
													Sign In
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
        )
    }
}


export default Login;