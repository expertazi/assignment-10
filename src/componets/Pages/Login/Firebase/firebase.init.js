import { initializeApp } from "firebase/app";
import FirebaseCconfig from "./firebase.configg";

const initializeAuthentication = () => {
  initializeApp(FirebaseCconfig);
};
export default initializeAuthentication;
