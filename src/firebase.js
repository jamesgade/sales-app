import {initializeApp} from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyDqXIhue9mUQ5BzLYsy7Z9Gkf5gAbBy680",
  authDomain: "sales-app-d2bea.firebaseapp.com",
  projectId: "sales-app-d2bea",
  storageBucket: "sales-app-d2bea.appspot.com",
  messagingSenderId: "1040933370207",
  appId: "1:1040933370207:web:814516afc3e404ad39deea",
  databaseURL:"https://sales-app-d2bea-default-rtdb.firebaseio.com",
};
export const app=initializeApp(firebaseConfig)