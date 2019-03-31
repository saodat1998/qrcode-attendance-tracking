import Firebase from 'firebase'
var config = {
    apiKey: "AIzaSyDAsbVh0Tukp9UOjffbXTsWID3hPvte8Go",
    authDomain: "summer-8033c.firebaseapp.com",
    databaseURL: "https://summer-8033c.firebaseio.com",
    projectId: "summer-8033c",
    storageBucket: "summer-8033c.appspot.com",
    messagingSenderId: "142179983291"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
