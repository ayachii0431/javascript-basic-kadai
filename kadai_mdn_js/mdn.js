const event = new Date(Date.UTC(2026, 2, 26, 3, 0, 0));
const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

console.log(event.toLocaleDateString(undefined, options));