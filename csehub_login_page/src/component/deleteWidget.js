export function deleteWidget(firebase,widgetId){
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            const widgetsRef = firebase.database().ref("widgets");
            widgetsRef.child(widgetId).setValue(null);
        }
    });
}