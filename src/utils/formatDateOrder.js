export const dateFunc = (date) => {
  const newDate = new Date(date);
  const año = newDate.getFullYear();
  const mes = newDate.getMonth() + 1;
  const dia = newDate.getDate();
  const horas = newDate.getHours();
  const minutos = newDate.getMinutes();
  const segundos = newDate.getSeconds();
  const newDateFormat = `${dia}/${mes}/${año}`;
  const newHourFormat = `${horas}:${minutos}:${segundos}`;
  return { date: newDateFormat, time: newHourFormat };
};
