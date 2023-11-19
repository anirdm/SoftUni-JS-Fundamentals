function employess(arr) {
    for(let name of arr) {
        let employee = { name, number: name.length };
        console.log(`Name: ${employee.name} -- Personal Number: ${employee.number}`);
    }
}

employess([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ]);