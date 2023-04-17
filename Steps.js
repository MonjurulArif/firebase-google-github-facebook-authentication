/*
----------------------------------------
  INITIAL SETUP
-----------------------------------------
1. visite: console.firebase.google.com
2. create a new firebase project
3. visit docs (go to docs)
4. register web app > firebase project name > click web > give name and register
5. install firebase for project-name: npm install firebase
6. Dangerous: get firebase config and put it in firebase.init.js
7. export app from firebase.init.js
-----------------------------------------
  SETUP THE PROVIDER
------------------------------------------
8. create auth using getAuth from firebase by using app from firebase.init.js
9. create a GoogleAuthProvider using new keyword 
10. go to firebase Build > Authentication > Sign In method
11. Enable google sign in method
12. create a button for google sign in method with a click handler
13. inside the event handler, call signInWithPopup with auth, provider
14. after signInWithPopup .then result , error
-------------------------------------------
  DISPLAY DATA
  ----------------------------------------

  ------------------------
  ADD A NEW SIGN IN METHOD
  -------------------------
  1. enable the signIn method
  2. create Github, twitter, Facebook, etc. app create
  3. get clientId and secret


 */
