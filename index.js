const localeObject = require("./localeObject.js");

const timeDiffForHumans = (dateString, locale = "en") => {
  if (typeof dateString !== "string") {
    throw new Error("entered date must be a string");
  }

  let isValidDate = Date.parse(dateString);
  if (!isValidDate) {
    throw new Error("entered date is not valid");
  }

  let enteredTime = new Date(dateString);

  let nowTime = new Date();

  if (nowTime < enteredTime) {
    throw new Error("entered date is greater that current date");
  }

  let diff = Math.abs(nowTime - enteredTime);

  let minutes = Math.floor(diff / 1000 / 60);

  if (minutes < 60) {
    let time = Math.floor(minutes);
    if (time === 1) {
      return (
        time +
        " " +
        localeObject.minute.singular[locale] +
        " " +
        localeObject.ago[locale]
      );
    }
    return (
      time +
      " " +
      localeObject.minute.plural[locale] +
      " " +
      localeObject.ago[locale]
    );
  }

  if (minutes >= 60 && minutes <= 1440) {
    let time = Math.floor(minutes / 60);
    if (time === 1) {
      return (
        time +
        " " +
        localeObject.hour.singular[locale] +
        " " +
        localeObject.ago[locale]
      );
    }
    return (
      time +
      " " +
      localeObject.hour.plural[locale] +
      " " +
      localeObject.ago[locale]
    );
  }

  if (minutes > 1440 && minutes <= 43200) {
    let time = Math.floor(minutes / 1440);

    if (time === 1) {
      return (
        time +
        " " +
        localeObject.day.singular[locale] +
        " " +
        localeObject.ago[locale]
      );
    }
    return (
      time +
      " " +
      localeObject.day.plural[locale] +
      " " +
      localeObject.ago[locale]
    );
  }

  if (minutes > 43200 && minutes <= 518400) {
    let time = Math.floor(minutes / 43200);
    if (time === 1) {
      return (
        time +
        " " +
        localeObject.month.singular[locale] +
        " " +
        localeObject.ago[locale]
      );
    }
    return (
      time +
      " " +
      localeObject.month.plural[locale] +
      " " +
      localeObject.ago[locale]
    );
  }

  let time = Math.floor(minutes / 518400);
  if (time === 1) {
    return (
      time +
      " " +
      localeObject.year.singular[locale] +
      " " +
      localeObject.ago[locale]
    );
  }
  return (
    time +
    " " +
    localeObject.year.plural[locale] +
    " " +
    localeObject.ago[locale]
  );
};

module.exports = timeDiffForHumans;
