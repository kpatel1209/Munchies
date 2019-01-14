<script src="https://www.gstatic.com/firebasejs/5.7.3/firebase.js"></script>
    
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDkLXOZ7vgc4GDQ7hA3_J8A3p1sQlaOqtg",
        authDomain: "munchies-8ae91.firebaseapp.com",
        databaseURL: "https://munchies-8ae91.firebaseio.com",
        projectId: "munchies-8ae91",
        storageBucket: "munchies-8ae91.appspot.com",
        messagingSenderId: "487852272756"
    };
    
    firebase.initializeApp(config);

    const db = firebase.database;   // database service
    const auth = firebase.auth;     // authentication service