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
                this.auth = window.gapi.auth2.getAuthInstance()
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) =>{
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())  
        }else{
            this.props.signOut()
        }
    }

    onSignOut= () =>{
        this.auth.signOut()
    }
    
    onSignIn = () =>{
         this.auth.signIn()
    }

    renderAuthButton() {
        if(this.props.isSignedIn === null){
            return null
        }else if(this.props.isSignedIn){
            return (
                <button className="ui red google button" onClick={this.onSignOut}>
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        }else{
            return (
                <button className="ui red google button" onClick={this.onSignIn}>
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
const mapStateToProps = state => {
    return { isSignedIn : state.auth.isSignedIn}
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);