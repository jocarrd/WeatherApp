export const getDayName = (dt: number) => {
  return new Date(dt * 1000).toLocaleString("es", { weekday: "long" });
};
export const getMonthName = (dt: number) => {
  return new Date(dt * 1000).toLocaleString("es", { month: "long" });
};
export const getDate = (dt: number) => {
  return new Date(dt * 1000).getDate();
};
export const getYear = (dt: number) => {
  return new Date(dt * 1000).toLocaleString("es", { year: "numeric" });
};
export const localeTimeString = (dt: number) => {
  return new Date(dt * 1000).toLocaleTimeString();
};
