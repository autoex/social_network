import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import classes from "../common/FormsControls/FormsControls.module.css"


let Login = (props) => {
    const onSubmit = (formData) => {

        console.log(formData.email, formData.password, formData.rememberMe);
        props.login(formData.email, formData.password, formData.rememberMe)

    };
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <h1>Log in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )
};
let maxLength25 = maxLengthCreator(25);
let LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"email"} placeholder={'Email'} validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={'Password'} type={'password'}
                       validate={[required, maxLength25]}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} id={"rememberMe"}/>
                <label htmlFor="rememberMe">remember me</label>
            </div>
            {props.error && <div className={classes.errorForm}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>

        </form>
    )


};


const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);