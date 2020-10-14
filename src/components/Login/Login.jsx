import React from "react";
import {Field, reduxForm} from "redux-form";


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

let LoginForm = (props) => {


    return (
        <form onSubmit={props.handleSubmit}>
            <p>
                <Field component={"input"} name={"login"} placeholder={'Login'}/>
            </p>
            <p>
                <Field component={"input"} name={"password"} placeholder={'Password'}/>
            </p>
            <p>
                <Field component={"input"} type={"checkbox"} name={"rememberMe"} id={"rememberMe"}/>
                <label htmlFor="rememberMe">remember me</label>
            </p>
            <p>
                <button>Login</button>
            </p>

        </form>
    )


};


const LoginReduxForm = reduxForm({
    // a unique name for the form
    form: 'login'
})(LoginForm);


export default Login;