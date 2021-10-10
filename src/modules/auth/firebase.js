import "firebase/firestore";
import * as firebaseSource from "firebase";
import "firebase/firestore";
import store from "../../utils/store";
import utils from "../../utils/utils";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class Firebase {
  async login(email, password) {
    let status = null;
    const login = await firebaseSource
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const userInfo = Object.entries(res.user)[5][1].b;
        const token = userInfo["g"];
        const userId = userInfo["h"];
        this.authme(token, userId);
      })
      .catch((error) => {
        if (error != null && error.code != null) {
          status = {
            login: false,
            error: error.code,
          };
        }
      });
    if (status != null) {
      return status;
    }
    //const info = await this.authme();
    return true;
  }

  async authme(token, userId) {
    const res = await axios({
      method: "get",
      url: process.env.REACT_APP_LOGPOT_API + "/auth/me",
      headers: {
        Accept: "application/json",
        Authorization: token,
      },
      params: {
        user_id: userId,
      },
    })
      .then((res) => {
        let response = res.data.data
        response["token"] = token
        response["token_expired_at"] = Date.now()

        store.dispatch({
          type: "LOGIN",  
          data: response,
        });
      })
      .catch(() => {
        return "error";
      });
  }

  // Logout
  async logOut() {
    store.dispatch({
      type: "LOGOUT",
    });
    await firebaseSource.auth().signOut();
  }
}

const firebase = new Firebase();

export default firebase;
