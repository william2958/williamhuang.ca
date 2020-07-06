import React from 'react';
import axios from '../../utils/axios';
import InputSimple from "../../components/UI/Inputs/TextInput/InputSimple";
import Button from "../../components/UI/Button";
import {AdminLoginWrapper} from "./styles";
import { toast } from 'react-toastify';
import {setUser} from "../../actions/authActions";
import {connect} from "react-redux";

class AdminLogin extends React.Component {

    state = {
        email: '',
        password: ''
    };

    submitForm = () => {
        this.login();
    };

    login = async () => {
        try {
            const response = (await axios.post('/auth/adminSignIn', {
                email: this.state.email,
                password: this.state.password,
            })).data;

            const user = response.user;

            this.props.setUser(user);

            // dispatch(loggedIn(user));
            // dispatch(successAlert('Logged In!'));

            this.props.history.push('/admin');
        } catch (err) {
            // dispatch(errorAlert(err.response.data.message));
            toast.error('Incorrrect Credentials!');
            console.error('There was an error while logging in:', err);
        }
    };

    render() {
        return (
            <AdminLoginWrapper>
                Admin Login
                <InputSimple type="text" name="email" label="email" value={this.state.email} onChange={(e) => {this.setState({email: e.target.value})}}/>
                <InputSimple type="password" name="password" label="password" value={this.state.password} onChange={(e) => {this.setState({password: e.target.value})}}/>
                <Button center primary onClick={this.submitForm}>Submit Form</Button>
            </AdminLoginWrapper>
        )
    }

}

export default {
    component: connect(null, { setUser })(AdminLogin)
};
