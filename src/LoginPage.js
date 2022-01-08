import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            pw: '',
            cpw: '',
            showRegister: false,
            showError: false,
            errorMsg: ''
        }
        this.handleClick = this.handleClick.bind(this);
        this.onUNChange = this.onUNChange.bind(this);
        this.onPWChange = this.onPWChange.bind(this);
        this.onCPWChange = this.onCPWChange.bind(this);
        this.resetAll = this.resetAll.bind(this);
        this.showRegisterScreen = this.showRegisterScreen.bind(this);

    }
    handleClick(){
        let self = this;
        let auth = getAuth();
        this.setState({ showError: false });
        if (this.state.showRegister) {
            if (this.state.pw !== this.state.cpw) {
                this.setState({ showError: true, errorMsg: 'Password not matching in Confirm Password' })
                return;
            }
            else{
                createUserWithEmailAndPassword(auth, this.state.userName, this.state.pw)
                .then(function (user) {
                    self.setState({ showError: true, errorMsg: 'User created successfully!' });
                })
                .catch(function (error) {
                    self.setState({ showError: true, errorMsg: 'There is a problem creating user!' });
                });
            }
        }
        else {
            signInWithEmailAndPassword(auth, this.state.userName, this.state.pw)
                .then(function (user) {
                    self.setState({ showError: true, errorMsg: 'User Logged in successfully!' });
                })
                .catch(function (error) {
                    self.setState({ showError: true, errorMsg: 'Please enter valid username/password' })
                });
        }
    }

    onUNChange(e){
        this.setState({ userName: e.target.value })
    }

    onPWChange(e){
        this.setState({ pw: e.target.value })
    }

    onCPWChange(e){
        this.setState({ cpw: e.target.value })
    }

    showRegisterScreen(){
        this.setState({ showRegister: !this.state.showRegister});
        this.resetAll();
    }

    resetAll(){
        this.setState({
            userName: '',
            pw: '',
            cpw: '',
            showError: false,
            errorMsg: ''
        });
    }

    render() {
        return (
            <div class="container">
                <section id="content">
                    <form action="">
                        <h1>Welcome to G27 Chat</h1>
                        <div>
                            <input type="text" placeholder="Username" value={this.state.userName} required="" id="username" onChange={this.onUNChange} />
                        </div>
                        <div>
                            <input type="password" placeholder="Password" value={this.state.pw} required="" id="password" onChange={this.onPWChange} />
                        </div>
                        {this.state.showRegister && <div>
                            <input type="password" placeholder="Confirm Password" value={this.state.cpw} required="" id="confirmpassword" onChange={this.onCPWChange} />
                        </div>}
                        {this.state.showError && <div>
                            <h5>{this.state.errorMsg}</h5>
                        </div>}
                        <div>
                            <input type="button" value={this.state.showRegister ? "Register Me" : "Log in"} onClick={this.handleClick} />
                            <span onClick={this.showRegisterScreen}>{this.state.showRegister ? 'Back to Login' : 'Register'}</span>
                        </div>
                    </form>
                </section>
            </div>
        );
    }

}

export default LoginPage;