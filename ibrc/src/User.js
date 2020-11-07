import { firestore } from "firebase";
import fire from "./config/fire";

class User {
  #userProps = {
    fName: "fname",
    lName: "lname",
    emailValue: "default@gmail.com",
    password: "daDHsdhhwdoiwdjpiqdwjo",
    gradDate: "",
    location: "",
    timeZone: "",
    SOI: "",
  }
  //todo: throw error if required fields not met
  createUserInDB = () => {
    console.log(this.emailValue)

    fire.firestore().collection('UserData').get().then((snap) => {
      fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .set(this.#userProps);
   })
    
  };
  handleSignUp = () =>{
    fire
      .auth()
      .createUserWithEmailAndPassword(this.#userProps.emailValue, this.#userProps.password).then(()=>{
        if (fire.auth().currentUser != null){
          this.createUserInDB();
      }
    })
      .catch((err) => {
        console.log(err.message);
      });
  };
  get firstName() {
    return this.#userProps.fName;
  }
  set firstName(value) {
    this.#userProps.fName = value;
  }
  get lastName() {
    return this.#userProps.lName;
  }
  set lastName(value) {
    this.#userProps.lName = value;
  }
  get email() {
    return this.#userProps.emailValue;
  }
  set email(email) {
    this.#userProps.emailValue = email;
  }
  get password() {
    return this.#userProps.password;
  }
  set password(value) {
    this.#userProps.password = value;
  }
  get gradDate() {
    return this.#userProps.gradDate;
  }
  set gradDate(value) {
    this.#userProps.gradDate = value;
  }
  get timeZone() {
    return this.#userProps.timeZone;
  }
  set timeZone(value) {
    this.#userProps.timeZone = value;
  }
  get location() {
    return this.#userProps.location;
  }
  set location(value) {
    this.#userProps.location = value;
  }
  get SOI() {
    return this.#userProps.SOI;
  }
  set SOI(value) {
    this.#userProps.SOI = value;
  }
}

export default User;
