export function addWidget(firebase,workspaceId,widget){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const workspacesRef = firebase.database().ref("workspaces/"+workspaceId);
            const widgetsRef = firebase.database().ref("widgets");
            var widgetPostRef = widgetsRef.push(widget);
            var widgetId = widgetPostRef.key;
            workspacesRef.child("widgets").child(widgetId).set(true);
        }
    });
}