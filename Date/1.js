let a = new Date();
console.log(a); // Output will be in ISO 8601 format
// Output: 2024-03-22T10:18:30.600Z (will change with time and date)
//  2024-03-22: YYYY-MM-DD
//T: TIME
//10:18:30.600: HH:MIN:SEC:MILI_SEC
//Z: TIME ZONE, "Zulu time" OR UTC
console.log("");
console.log(`TIME:`)
console.log(a.getTime()); //it returns the number of milliseconds since January 1, 1970 (00:00:00 UTC) (Unix Epoch)
console.log(a.getTimezoneOffset());
console.log(a.getHours());     // will give the hours example if it is 3:20 PM it will give 15, Note taht it is in railway format
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getMilliseconds());
console.log("");
console.log(`DATE:`)
console.log(a.getDate())       //date
console.log(a.getMonth())
console.log(a.getDay());        // DATE SUNDAY:1-SATURDAY:6
console.log(a.getFullYear());
console.log(a.getUTCDate()); // UTC DATE
console.log(a.getUTCDay())   //UTC DATE SUNDAY:1-SATURDAY:6

