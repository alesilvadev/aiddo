import "firebase/firestore";
import * as firebaseSource from "firebase";
import "firebase/firestore";
import store from "../../utils/store";
import utils from "../../utils/utils";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class Menu {
  async getMenu() {
    let retorno = null
    const userStore = store.getState();
    const token = userStore.user.token;
    const tokenExpired = userStore.user.token_expired_at;
    const userId = userStore.user.firebase_user_id;
    const menu_id = userStore.user.menus[0];
    if (this.checkToken(tokenExpired)) {
      const res = await axios({
        method: "get",
        url: process.env.REACT_APP_LOGPOT_API + "/getMenu",
        headers: {
          Accept: "application/json",
          Authorization: token,
        },
        params: {
          user_id: userId,
          id: menu_id
        },
      })
        .then((res) => {
          retorno = res.data.data
        })
        .catch(() => {
          return "error";
        });
    }
    return retorno
  }

  checkToken = (tokenExpiredTime) => {
    let valid = false;
    if (tokenExpiredTime != null && tokenExpiredTime != undefined && tokenExpiredTime != "") {
      const currentTime = Date.now();
      return currentTime - tokenExpiredTime > 3600;
    }
    return valid;
  };
}

const menu = new Menu();

export default menu;
