import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history'
import App from './App';
import * as firebase from 'firebase';

const history = createMemoryHistory();

// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>

var firebaseConfig = {
      apiKey: "AIzaSyCe7C6TU9Mp_WzqfqnJs_C12RvG98kDrpU",
      authDomain: "mentordome-886a6.firebaseapp.com",
      databaseURL: "https://mentordome-886a6.firebaseio.com",
      projectId: "mentordome-886a6",
      storageBucket: "mentordome-886a6.appspot.com",
      messagingSenderId: "817983847446",
      appId: "1:817983847446:web:44b5290f804dbac8ae4937",
      measurementId: "G-DWL2YJJJKY"
    };

firebase.initializeApp(firebaseConfig);
firebase.analytics();

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router history={history}>
      <App />
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
