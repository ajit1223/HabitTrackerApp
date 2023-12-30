
// habits model for storing data
const Habits = require('../models/habits');


// rendering home page on website
module.exports.home = async function (req, res) {
    // rendering homepage and 
    // getting all the habits from database
    const myHabits = await Habits.find({});
    return res.render('home', {
        // all the habits inside the database
        myHabits: myHabits
    });
}


// create a new Habit inside the database
module.exports.createHabit = async function (req, res) {
    try {
        // getting today's date
        let date = new Date().toString();
        date = `${date.slice(4, 15)}`;
        // weekly dates
        const weekStatus = Array(7).fill(null);

        // creating new element in mongodb
        const doc = await Habits.create({
            // getting the value of name 
            name: req.body.name,
            createdAt: date,
            weeklyStatus: weekStatus,
            completedDays: 0
        });

        // return res
        return res.redirect('back');
    } catch (error) {
        console.log(error);
        res.redirect('back');
    }
};