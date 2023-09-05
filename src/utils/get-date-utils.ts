import moment from "moment-timezone";

function getCurrentDateandTime() {
  const currentDateNew = moment()
    .tz("Asia/Manila")
    .format("YYYY-MM-DD HH:mm:ss");

  return {
    currentDateFull: currentDateNew,
  };
}

export default getCurrentDateandTime;
