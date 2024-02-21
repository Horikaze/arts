import { format, fromUnixTime } from "date-fns";

export const convertUnixDateHours = (date: number) => {
  try {
    if (!date) {
      return "";
    }
    return format(fromUnixTime(date / 1000), "dd-MM-yyyy");
  } catch (error) {
    console.log(error);
    return "";
  }
};
