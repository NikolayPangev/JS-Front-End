function meeting(arrStr) {

    const meeting = {};

    for (const element of arrStr) {
        const [day, name] = element.split(' ');
        
        if (!meeting.hasOwnProperty(day)) {
            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    
    for (const [key, value] of Object.entries(meeting)) {
        console.log(`${key} -> ${value}`);
    }
}