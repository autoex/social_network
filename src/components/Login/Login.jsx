import React from "react";


let Login = (props) => {


    return (
        <div>
            <h1>Log in</h1>
            <LoginForm />

        </div>
    )
};

let LoginForm =(props)=> {


    return (
        <form>
            <p>
                <input type={"text"} name="" id="" placeholder={'Login'}/>
            </p>
            <p>
                <input type={"text"} name="" id="" placeholder={'Password'}/>
            </p>
            <p>
                <input type={"checkbox"} name="" id="rememberMe"/>
                <label htmlFor="rememberMe">remember me</label>
            </p>
            <p>
                <button >Login</button>
            </p>

        </form>
    )



};

export default Login;