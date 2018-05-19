export function initiUser(firebase,user){
    const usersRef = firebase.database().ref("users");
    usersRef.child(user.uid).on('value',(snapshot)=>{
        //console.log(JSON.stringify(snapshot.val()));
        if(snapshot.val()==null){
            const userRef= firebase.database().ref("users/"+user.uid);
            const user_info = {
                username: user.displayName,
                email: user.email,
                workspaces: {
                    "default": true
                },
                background_color: "default"
            }
            userRef.set(user_info);
        }
    });
}