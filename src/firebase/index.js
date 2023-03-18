import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSamNfrTsRrTvxk4t2KkF8sfaYswSgz8k",
  authDomain: "vue-exam-86976.firebaseapp.com",
  projectId: "vue-exam-86976",
  storageBucket: "vue-exam-86976.appspot.com",
  messagingSenderId: "496356501138",
  appId: "1:496356501138:web:04f46bf7ba0a90a465a84b",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
