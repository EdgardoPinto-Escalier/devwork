const mongoose = require("mongoose");
const Vacancy = mongoose.model("Vacancy");

exports.showJobs = async (req, res, next) => {
  const vacancies = await Vacancy.find().lean();
  if(!vacancies) return next();

  res.render('home', {
    pageName: 'DevWork',
    greetings: 'Welcome to DevWork',
    tagline: 'Search and Publish Developer Jobs',
    bar: true,
    button: true,
    vacancies
  })
}