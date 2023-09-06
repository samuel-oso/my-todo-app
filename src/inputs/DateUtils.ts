export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const suffix = getDaySuffix(day);

  return `${day}${suffix} ${month}, ${year}`;
};

const getDaySuffix = (day: number) => {
  if (day >= 11 && day <= 13) {
    return "th";
  }
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const formatTaskDate = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date(); // Get the current date

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return "Today";
  }

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Note: Months are zero-based, so we add 1
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};
