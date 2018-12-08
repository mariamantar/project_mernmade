import React, { Component } from 'react';
import { Button, Row } from 'react-materialize';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import FacebookLogin from 'react-facebook-login';

import * as actions from '../actions/authActions';
import CustomInput from './CustomInput';

class LoginModal extends Component {
    constructor(props) {
        super(props);
    };

    onSubmit = async formData => {
        // We need to call some action creator that will contact backend server 
        await this.props.login(formData);
        if (!this.props.errorMessage) {
            // window.location.reload();
            // this.props.history.push('/search');
        }
    };

    responseFacebook = async res => {
        await this.props.oauthFacebook(res.accessToken);
        if (!this.props.errorMessage) {
            // window.location.reload();
            // this.props.history.push('/search');
        }
    };

    render () {
        return (
            <div>
            <h4 className="register-title">Log In</h4>
            <Row className="form-row">
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="email" type="email" id="login_email" label="Enter your email" component={CustomInput} />
                    <Field name="password" type="password" id="login_password" label="Enter your password" component={CustomInput} />
                    { this.props.errorMessage ?
                    <p className="form-group" style={{color: 'red', fontSize: '13px'}}>
                        *{ this.props.errorMessage }
                    </p>
                    : null}
                    <div className="register-btn-container"><Button className="header-button" type="submit">Sign In</Button></div>
                </form>
                <div className="strike">
                    <span>OR</span>
                </div>
                <div className="fb-btn-container">
                    <FacebookLogin
                        appId="749745868719206"
                        textButton=" Log in with Facebook"
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass="fb-btn"
                        icon="fa-facebook"
                    />
                </div>
            </Row>
            </div>
        )
    };
};

// linking backend props to frontend state
const mapStateToProps = state => {
    return {
        errorMessage: state.auth.errorMessage
    }
};

export default compose(
    withRouter,
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signin' })
)(LoginModal);