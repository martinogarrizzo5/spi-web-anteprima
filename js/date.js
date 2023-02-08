const dates = document.getElementsByClassName("date");

for (let i = 0; i < dates.length; i++) {
  const date = dates[i];
  const dateValue = date.innerHTML;
  const dateObject = new Date(dateValue);
  const dateFormatted = dateObject.toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  date.innerHTML = dateFormatted;
}
