function pascalCaseSplitter(str) {   
    console.log(str.split(/(?=[A-Z])/).join(", "));
}

pascalCaseSplitter('ThisIsSoAnnoyingToDo');