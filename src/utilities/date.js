export const getDayName = (dt) => {
  return new Date(dt * 1000).toLocaleString("es", { weekday: "long" });
};
export const getMonthName = (dt) => {
  return new Date(dt * 1000).toLocaleString("es", { month: "long" });
};
export const getDate = (dt) => {
  return new Date(dt * 1000).getDate();
};
export const getYear = (dt) => {
  return new Date(dt * 1000).toLocaleString("es", { year: "numeric" });
};
export const localeTimeString = (dt) => {
  return new Date(dt * 1000).toLocaleTimeString();
};
