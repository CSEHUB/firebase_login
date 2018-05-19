import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import workspace from './component/addWorkspace.js';
import firebase from 'firebase';
import firebaseui from 'firebaseui';
import '../node_modules/firebaseui/dist/firebaseui.css';
//import Form from './components/Form.js'
import {addWidget} from "./component/addWidget.js";
import {addWorkspace} from "./component/addWorkspace";
import {deleteWidget} from "./component/deleteWidget";
import {deleteWorkspace} from "./component/deleteWorkspace"
import {initiUser} from "./component/initiUser";

export const provider = new firebase.auth.GoogleAuthProvider();

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user : null,
            workspace : null,
            widget : null,
            user_info : null
        };
        var config = {
            apiKey: "AIzaSyCB0IqPLvU1voinSsKzpx5_C5uiD6zy1tY",
            authDomain: "cse110firebase-420.firebaseapp.com",
            databaseURL: "https://cse110firebase-420.firebaseio.com",
            projectId: "cse110firebase-420",
            storageBucket: "cse110firebase-420.appspot.com",
            messagingSenderId: "880026239154"
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
      componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
                //this.testDateBase(user);
                var exists=true;
                //console.log(firebase.database().ref("users/"+user.uid));
                initiUser(firebase,user);
                //console.log(this.state.user_info);
                const userRef = firebase.database().ref("users/");
                userRef.child(user.uid).on('value',(snapshot)=>{
                    console.log(snapshot.val());
                    var user_data=JSON.stringify(snapshot.val());
                    this.setState({user_info:user_data});
                });
                const workspaces_info={
                    name: "CSE110",
                    position : 1,
                    widget_id: null
                }
                addWorkspace(firebase,workspaces_info);
                const widget_info={
                    url : "www.piazza.com",
                    website_name : "piazza",
                    position : 1,
                    width:{
                        medium: "w-12"
                    },
                    height: "100px"
                }
                //addWidget(firebase,widget_info);
                //console.log(this.state.user_info);
            }

        });
    }


    /*testDateBase(user){
        //const usersRef = firebase.database().ref("users/"+user.uid);
        //const workspacesRef = firebase.database().ref("workspaces/");
        //const widgetsRef = firebase.database().ref("widgets");
        const widget_info={
            url : "www.piazza.com",
            website_name : "piazza",
            position : 1,
            width:{
                medium: "w-12"
            },
            height: "100px"
        }
        //addWidget(firebase,)
        //var widgetPostRef=widgetsRef.push(widget_info);
        //var widgetId=widgetPostRef.key;
        const workspaces_info={
            name: "CSE110",
            position : 1,
            widget_id: widgetId
        }
        //var workspacePostRef=workspacesRef.push(workspaces_info);
        //var workspaceId=workspacePostRef.key;
        const user_info={
            email:user.email,
            workspace : workspaceId,
            last_workspace : workspaceId,
            background_color: "blue"
        }
        //usersRef.set(user_info);

    }*/
    loginSucessful(){
        //var loginOrNot="";
        // var laji="nimabi";
        //var user = firebase.auth().currentUser;
        //console.log(user.displayName);
        /*await firebase.auth().onAuthStateChanged(function(user) {
            //console.log(user.displayName);
            if(user!=null){
                console.log(user.displayName);
                //laji="caonima";
                //console.log(laji);
                var loginOrNot="firebaseui-auth-container";
                return loginOrNot;
            }else{
                return "";
            }
        });*/
        //console.log(laji);
/*
        if (user) {
            //console.log(user.displayName);
            //loginOrNot="";
        } else {
            loginOrNot="firebaseui-auth-container";
        }
     */
        //console.log(loginOrNot);
        //return loginOrNot;
    }

    loginCallback(loginOrNot){
        return loginOrNot;
    }
    logout = () =>{
        firebase.auth().signOut()
            .then(() => {
                this.setState({
                    user: null
                });
            });
    }

    login = () =>{
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const user = result.user;
                this.setState({
                    user
                });
            });
    }


    render(){
        return (
            <dev>
            <dev>{this.state.user ?
                <dev id="">{this.state.user_info}</dev>
                :
                <dev id="firebaseui-auth-container"></dev>
            }</dev>
                <dev>
            {this.state.user ?
                <button onClick={this.logout}>Logout</button>
                :
                <button onClick={this.login}>Log In</button>
            }
                </dev>
            </dev>
        );
  }
}

export default App;
