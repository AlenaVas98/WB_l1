import moment from "https://cdn.skypack.dev/moment";

export function info(date, format) {
  return moment(date).format(format);
}
