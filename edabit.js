// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:
// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.
function acceptIntoMovie(age, isSupervised) {
	if (age >= 15) {
		return true
	} if (age < 15 && isSupervised == true) {
		return true
	} else {
		return false
	}
}
// -OR-
const acceptIntoMovie = (age, isSupervised) => age >= 15 || isSupervised



// Write a function that returns true if a year is a leap, otherwise return false.
// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.
// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.
// Look at the examples, and if you need help, look at the resources panel.
function leapYear(year) {
	return year % 4 === 0;
}

const convert = (minutes) => minutes * 60