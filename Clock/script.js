var root = document.documentElement;
var hour;
var minute;
var second;
var date = new Date();
(function () {
    hour = date.getHours() % 12;
    minute = date.getMinutes();
    second = date.getSeconds();
})();
setInterval(function () {
    var accurateMinutes = minute + (second / 60);
    var accurateHour = hour + (minute / 60) + second / (60 * 60);
    var secDeg = (second / 60) * 360 - 90;
    var minDeg = (accurateMinutes / 60) * 360 - 90;
    var hourDeg = (accurateHour / 12) * 360 - 90;
    root.style.setProperty("--hourHand", hourDeg + "deg");
    root.style.setProperty("--minHand", minDeg + "deg");
    root.style.setProperty("--secHand", secDeg + "deg");
    if (second == 59) {
        if (Math.floor(accurateMinutes) == 59) {
            if (Math.floor(accurateHour) == 11) {
                hour = 0;
                minute = 0;
                second = 0;
            }
            else {
                minute = 0;
                second = 0;
                hour++;
            }
        }
        else {
            second = 0;
            minute++;
        }
    }
    else {
        second++;
    }
    console.log("Seconds" + second);
    console.log("minutesMinutes:" + Math.floor(accurateMinutes));
    console.log("Hours:" + Math.floor(accurateHour));
}, 1000);
