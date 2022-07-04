export const days = [
  "domingo",
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
];
export const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const getDayName = (dt) => {
  return days[new Date(dt * 1000).getDay()];
};
export const getMonthName = (dt) => {
  return months[new Date(dt * 1000).getMonth()];
};
export const getDate = (dt) => {
  return new Date(dt * 1000).getDate();
};

export const localeTimeString = (dt) => {
  return new Date(dt * 1000).toLocaleTimeString();
};
