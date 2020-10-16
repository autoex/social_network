import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


let Login = (props) => {
    const onSubmit = (formData)=> {
        console.log(formData)
    };

    return (
        <div>
            <h1>Log in</h1>
            <LoginReduxForm onSubmit={onSubmit}/>

        </div>
    )
};
let maxLength10 = maxLengthCreator(10);
let LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Input} name={"login"} placeholder={'Login'}  validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={'Password'}  validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} id={"rememberMe"}/>
                <label htmlFor="rememberMe">remember me</label>
            </div>
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


export default Login;