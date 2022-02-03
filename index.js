document.write("Hello! I'm Satybay Aisha and my group is CS-2123" + '<p>');
var date = new Date();
var current_year = date.getFullYear();
var current_day = date.getDate();
var current_month = date.getMonth();
var monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var current_day_of_week = date.getDay();
var dayOfWeek = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"]
var current_hour = date.getHours();
var current_minute = date.getMinutes();
var current_second = date.getSeconds();
document.write("Year: " + current_year + '<br>')
document.write("Today is: " + dayOfWeek[current_day_of_week] + '<br>')
document.write("Day: " + current_day  + '<br>')
document.write("Month: " + monthOfYear[current_month] + '<br>')
document.write("Current time is: " + current_hour + ' ' + ' : ' + current_minute + ' : ' + current_second + '<p>')
    var date1 = new Date("06/20/2021");

    var date2 = new Date("07/20/2024");

    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 60* 60* 24)
    document.write("Total number of days between dates <br>"+ date1 + "<br> and <br>"+ date2 + " is: <br> "+ Difference_In_Days+" days left untill the freedom ");
