const WEEKDAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const shortDate = (timestamp: number) => {
    const d = new Date(timestamp * 1000);
    const weekDay = WEEKDAYS[d.getDay()];
    const month = MONTHS[d.getMonth()];
    const date = d.getDate();

    return `${weekDay}, ${month} ${date}`;
}

export const date = {
    shortDate,
};