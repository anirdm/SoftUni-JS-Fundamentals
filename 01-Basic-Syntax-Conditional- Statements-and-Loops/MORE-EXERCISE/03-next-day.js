function nextDay(year, month, day) {
    const inputDate = new Date(year, month - 1, day); // Month is 0-based
    
    // Calculate tomorrow's date by adding 1 to the day
    inputDate.setDate(inputDate.getDate() + 1);

    const tomorrowYear = inputDate.getFullYear();
    const tomorrowMonth = inputDate.getMonth() + 1; 
    const tomorrowDay = inputDate.getDate();

    console.log(`${tomorrowYear}-${tomorrowMonth}-${tomorrowDay}`);
}
