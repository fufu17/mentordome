import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import GetStartedHome from './views/GetStartedHome';
import PricingHome from './views/PricingHome';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};



// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/7.14.5/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   var firebaseConfig = {
//     apiKey: "AIzaSyCe7C6TU9Mp_WzqfqnJs_C12RvG98kDrpU",
//     authDomain: "mentordome-886a6.firebaseapp.com",
//     databaseURL: "https://mentordome-886a6.firebaseio.com",
//     projectId: "mentordome-886a6",
//     storageBucket: "mentordome-886a6.appspot.com",
//     messagingSenderId: "817983847446",
//     appId: "1:817983847446:web:44b5290f804dbac8ae4937",
//     measurementId: "G-DWL2YJJJKY"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

const App = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/signup" component={GetStartedHome} layout={LayoutDefault} />
          <AppRoute exact path="/pricing" component={PricingHome} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}


export default App;