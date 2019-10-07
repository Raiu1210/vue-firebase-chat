import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyC41A9F0Cd6qLDnS1CWWTJFtXMlOQU9FU8",
  authDomain: "vue-firebase-chat-9b72e.firebaseapp.com",
  databaseURL: "https://vue-firebase-chat-9b72e.firebaseio.com",
  projectId: "vue-firebase-chat-9b72e",
  storageBucket: "vue-firebase-chat-9b72e.appspot.com",
  messagingSenderId: "108722078339",
  appId: "1:108722078339:web:abc909eb25dc3c514ed1b6",
  measurementId: "G-H33RVXTG8N"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
