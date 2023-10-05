function reqiredReading(bookPages, pagesReadInHour, daysLimit) {
    let totalTime = bookPages / pagesReadInHour;
    let requiredHoursPerDay = totalTime / daysLimit;

    console.log(requiredHoursPerDay);
}

