import { store } from "react-notifications-component";

class Utils {

  formatDateTime(date) {
    if (date != null) {
      let changeDate = new Date(date);
      date = new Intl.DateTimeFormat("en-UY", { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit" }).format(changeDate);
    }
    return date;
  }

  formatCurrency(value) {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    });
    if (value !== null && value !== undefined && value !== "" && !isNaN(value)) {
      return formatter.format(value);
    }
    if (isNaN(value)) {
      return formatter.format(0);
    }
    return value;
  }

  sendNotification(title, message, type) {
    store.addNotification({
      title: title,
      message: message,
      type: type,
      insert: "bottom",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 2000,
        onScreen: true,
        click: true,
        touch: true,
        showIcon: true
      },
    });
  }
}

const utils = new Utils();

export default utils;
