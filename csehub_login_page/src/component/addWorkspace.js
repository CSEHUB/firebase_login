export function addWorkspace(firebase,workspace){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const usersRef = firebase.database().ref("users/"+user.uid);
            const workspacesRef = firebase.database().ref("workspaces");
            var newPostRef=workspacesRef.push(workspace);
            var postID=newPostRef.key;
            console.log(postID);
            usersRef.child("workspaces").child(postID).set(true);
        }
    });
}

