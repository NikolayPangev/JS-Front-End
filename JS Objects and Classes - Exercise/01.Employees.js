function assignPersonalNumbers(employeeNames) {
    const employees = {};

    employeeNames.forEach((name) => {
        const personalNum = name.length;
        employees[name] = personalNum;
    });

    for (const name in employees) {
        const personalNum = employees[name];
        console.log(`Name: ${name} -- Personal Number: ${personalNum}`);
    }
}