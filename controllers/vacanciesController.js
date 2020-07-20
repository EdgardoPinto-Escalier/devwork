const mongoose = require('mongoose');
const Vacancy = mongoose.model('Vacancy');

exports.formNewVacancy = (req, res) => {
  res.render("new-vacancy", {
    pageName: "New Job Vacancy",
    tagline: "Fill out the form and post your job vacancy",
  });
}

// Add new job vacancies to the DB
exports.addNewVacancy = async (req, res) => {
  const vacancy = new Vacancy(req.body);

  //Create skills array
  vacancy.skills = req.body.skills.split(',');
  
  // Save to the DB
  const newVacancy = await vacancy.save()
  // Re route
  res.redirect(`/job-vacancies/${newVacancy.url}`);

}