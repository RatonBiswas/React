import React, { Component } from 'react';

import {connect} from 'react-redux';
import { signIn, signOut} from '../actions'
class GoogleAuth extends Component {
    state = {
        isSignedIn: null
    }
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId:'547112337839-7h1jpvbbcat5efn4io4b6e9d6bkev1na.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn : this.auth.isSignedIn.get()})
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn()
        }else{
            this.props.signOut()
        }
    }

    signOut= () =>{
        this.auth.signOut()
    }
    
    signIn = () =>{
         this.auth.signIn()
    }

    renderAuthButton() {
        if(this.state.isSignedIn === null){
            return null
        }else if(this.state.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.signOut}>
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }else{
            return (
                <button className="ui red google button" onClick={this.signIn}>
                    <i className="google icon"/>
                    Sign in with Google
                </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

export default connect(null,{signIn,signOut})(GoogleAuth);