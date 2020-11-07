import fire from "./config/fire";
import React, { useState } from "react";
const CurrentUser = {
  loggedIn: () => {
    if (fire.auth().currentUser != null) {
      return true;
    }
    return false;
  },
  //throw corresponding messages to different error such as wrong password.
  handleLogIn: (email, password) => {
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        console.log(err.message);
        throw new Error(err.message);
      });
  },
  getEmail: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().emailValue;
      });
  },
  setEmail: (value) => {
    fire
      .auth()
      .currentUser.updateEmail(value)
      .then(function () {
        let document = fire
          .firestore()
          .collection("UserData")
          .doc(fire.auth().currentUser.uid);
        fire.firestore().runTransaction(function (transaction) {
          // This code may get re-run multiple times if there are conflicts.
          return transaction.get(document).then(function (sfDoc) {
            if (!sfDoc.exists) {
              throw "Document does not exist!";
            }

            // Add one person to the city population.
            // Note: this could be done without a transaction
            //       by updating the population using FieldValue.increment()
            transaction.update(document, { emailValue: value });
          });
        });
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  },
  /**
   * returns a promis that conatins the firstname
   */
  getFirstName: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().fName;
      });
  },
  setFirstName: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { fName: value });
      });
    });
  },

  getLastName: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().lName;
      });
  },
  setLastName: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { lName: value });
      });
    });
  },
  getGradDate: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().gradDate;
      });
  },
  SetgradDate: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { gradDate: value });
      });
    });
  },
  getTimeZone: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().timeZone;
      });
  },
  setTimeZone: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { timeZone: value });
      });
    });
  },
  getLocation: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().location;
      });
  },
  setLocation: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { location: value });
      });
    });
  },
  getSOI: () => {
    return fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid)
      .get()
      .then((doc) => {
        return doc.data().SQI;
      });
  },
  setSOI: (value) => {
    let document = fire
      .firestore()
      .collection("UserData")
      .doc(fire.auth().currentUser.uid);
    fire.firestore().runTransaction(function (transaction) {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(document).then(function (sfDoc) {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        transaction.update(document, { SQI: value });
      });
    });
  },
};
export default CurrentUser;
