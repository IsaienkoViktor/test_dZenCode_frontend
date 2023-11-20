import { parseISO, format } from "date-fns";

export const formatDate = (dateString) => {
  const date = parseISO(dateString);
  const newDate = format(date, "dd.MM.yy HH:mm");
  return newDate;
};
