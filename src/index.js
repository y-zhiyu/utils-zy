const formatTime = (date, str) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${[year, month, day].map(formatNumber).join(str ? str : "/")} ${[
    hour,
    minute,
    second,
  ]
    .map(formatNumber)
    .join(":")}`;
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : `0${n}`;
};

const formatDateUTC = () => {
  const date = new Date();
  const _date = date.toUTCString();

  return _date;
};

const verifyPhoneNum = (data) => {
  let myreg = /^[1][3,4,5,7,8,6,9][0-9]{9}$/;
  if (!myreg.test(data)) {
    return false;
  } else {
    return true;
  }
};

module.exports = {
  formatTime,
  formatDateUTC,
  verifyPhoneNum
};
