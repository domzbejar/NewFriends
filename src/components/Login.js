import React,{Component} from 'react';

class Login extends Component{

    render(){
        return(
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="login_with" data-show-faces="false" data-auto-logout-link="true" data-use-continue-as="false"></div>
        )
    }
}
export default Login;
