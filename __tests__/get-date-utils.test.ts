import moment from "moment-timezone";
import getCurrentDateandTime from "../src/utils/get-date-utils";


describe("getCurrentDateandTime", () => {
  it("should return the current date and time in the Asia/Manila timezone", () => {
    const expectedDate = moment().tz("Asia/Manila").format("YYYY-MM-DD HH:mm:ss");
    const actualDate = getCurrentDateandTime();

    expect(actualDate.currentDateFull).toEqual(expectedDate);
  });
});



