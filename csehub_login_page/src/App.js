import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import '../node_modules/firebaseui/dist/firebaseui.css';
//import Form from './components/Form.js'

class App extends Component {
    constructor(props) {
        super(props);
        var config = {
            apiKey: "AIzaSyAw8bha316J7zLwz-JN2GaUp3w8RioRxP0",
            authDomain: "csehub-420.firebaseapp.com",
            databaseURL: "https://csehub-420.firebaseio.com",
            projectId: "csehub-420",
            storageBucket: "csehub-420.appspot.com",
            messagingSenderId: "719021972711"
        };
        firebase.initializeApp(config);

        var uiConfig = {
            signInSuccessUrl: '<url-to-redirect-to-on-success>',
            signInOptions: [
                // Leave the lines as is for the providers you want to offer your users.
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
                //firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
                //firebase.auth.PhoneAuthProvider.PROVIDER_ID
            ],
            // Terms of service url.
            tosUrl: '<your-tos-url>'
        };

        // Initialize the FirebaseUI Widget using Firebase.
        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        ui.start('#firebaseui-auth-container', uiConfig);
    }
    render(){
        return (<dev id="firebaseui-auth-container"></dev>);
  }
}

export default App;
