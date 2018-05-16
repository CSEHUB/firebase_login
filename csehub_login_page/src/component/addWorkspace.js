import React, { Component } from 'react';
import firebase from 'firebase';


class addWorkspace extends Component{
    constructor(props){
        super(props)
        var config = {
            apiKey: "AIzaSyAw8bha316J7zLwz-JN2GaUp3w8RioRxP0",
            authDomain: "csehub-420.firebaseapp.com",
            databaseURL: "https://csehub-420.firebaseio.com",
            projectId: "csehub-420",
            storageBucket: "csehub-420.appspot.com",
            messagingSenderId: "719021972711"
        };
        firebase.initializeApp(config);

    }

    addworkspace(workspace){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
                var exists=true;
                //console.log(firebase.database().ref("users/"+user.uid));
                const usersRef = firebase.database().ref("users");
                const workspacesRef = firebase.database().ref("workspaces");
                var newPostRef=workspacesRef.update(workspace);
                var postID=newPostRef.key;
                usersRef.child("workspaces").child(postID).setValue(true);
            }
        });
    }

}

export function addworkspace(workspace){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.setState({user});
            var exists=true;
            //console.log(firebase.database().ref("users/"+user.uid));
            const usersRef = firebase.database().ref("users");
            const workspacesRef = firebase.database().ref("workspaces");
            var newPostRef=workspacesRef.update(workspace);
            var postID=newPostRef.key;
            usersRef.child("workspaces").child(postID).setValue(true);
        }
    });
}

export default addWorkspace;

