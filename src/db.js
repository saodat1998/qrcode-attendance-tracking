import Firebase from 'firebase'
var config = {
        apiKey: "AIzaSyBhqoA_0w0zJ7zsItdzwAFLI06sr13q0Kc",
        authDomain: "qrcode-cb458.firebaseapp.com",
        databaseURL: "https://qrcode-cb458.firebaseio.com",
        projectId: "qrcode-cb458",
        storageBucket: "qrcode-cb458.appspot.com",
        messagingSenderId: "454068512108"
};

let app = Firebase.initializeApp(config);
export const db = app.database();
