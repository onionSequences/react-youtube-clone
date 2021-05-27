import moment from "moment";

export const dateToRightFormat = date => {
  const element = date;

  element.slice(0, element.indexOf("T"));
  element.replaceAll("-", ",");

  return moment([element]).fromNow();
};

export const viewsFormatter = num => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(0).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(0).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0).replace(/\.0$/, "") + "K";
  }
  return num;
};
