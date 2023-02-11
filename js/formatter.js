// format description
const descriptionEl = document.getElementById("description");
descriptionEl.innerHTML = descriptionEl.innerText;

// format date
const dates = document.getElementsByClassName("date");

for (let i = 0; i < dates.length; i++) {
  const dateValue = dates[i].innerText;
  const dateObject = getDate(dateValue);

  if (dateObject instanceof Date && !isNaN(dateObject)) {
    const dateFormatted = dateObject.toLocaleDateString("it-IT", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    dates[i].innerHTML = dateFormatted;
  }
}

// format time
const times = document.getElementsByClassName("time");

for (let i = 0; i < times.length; i++) {
  const timeValue = times[i].innerText;
  const date = getDate(timeValue);

  if (date instanceof Date && !isNaN(date)) {
    const timeFormatted = date.toLocaleTimeString("it-IT", {
      hour: "2-digit",
      minute: "2-digit",
    });

    times[i].innerHTML = timeFormatted;
  }
}

// assuming the raw format is DD/MM/YYYY HH:mm:ss
function getDate(rawDate) {
  const dateMatch = rawDate.match(/\d{2}\/\d{2}\/\d{4} \d{2}:\d{2}:\d{2}/);
  if (!dateMatch) return "Invalid Date";

  const [date, time] = dateMatch[0].split(" ");
  const [day, month, year] = date.split("/");
  const [hours, minutes, seconds] = time.split(":");
  const isoDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;

  return new Date(isoDate);
}
