export function deleteWidget(firebase,workspaceId){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const usersRef = firebase.database().ref("users/"+user.uid);
            const workspacesRef = firebase.database().ref("workspaces");
            usersRef.child("workspaces").child(workspaceId).setValue(null);
            workspacesRef.child(workspaceId).setValue(null);
        }
    });
}