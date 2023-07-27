function timeCalculator(data) {
  const unixTime = data * 1000;
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const unixDate = new Date(unixTime);
  const minutes = Math.floor((Date.now() - unixDate) / 1000 / 60);
  const hours = Math.floor((Date.now() - unixDate) / 1000 / 60 / 60);
  const day = unixDate.getDate();
  const month = monthNames[unixDate.getMonth()];
  const newsDate = month + " " + day;

  if (minutes == 0) return "Loaded now - " + newsDate;
  if (minutes == 1) return minutes + " minute ago - " + newsDate;
  if (minutes < 60) return minutes + " minutes ago - " + newsDate;
  if (hours == 1) return hours + " hour ago - " + newsDate;
  if (hours < 24) return hours + " hours ago - " + newsDate;
  else return newsDate;
}

export default timeCalculator;
