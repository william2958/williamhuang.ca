const MONTHS = [
	"",
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

export const parseMonthAndYear = (month, year) => {
	return `${MONTHS[month]} ${year}`
};
