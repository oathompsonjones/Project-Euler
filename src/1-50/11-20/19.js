let daysFound = 0;
for (let date = new Date(1901, 0, 1); date <= new Date(2000, 11, 31); date.setDate(date.getDate() + 1))
    if (date.getDay() === 0 && date.getDate() === 1)
        daysFound++;
console.log(daysFound);