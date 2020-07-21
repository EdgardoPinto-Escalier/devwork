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

// Show one job vacancy
exports.showVacancy = async (req, res, next) => {
  const vacancy = await Vacancy.findOne({ url: req.params.url }).lean();

  // If there are not results
  if(!vacancy) return next();

  res.render('vacancy', {
    vacancy,
    pageName: vacancy.title,
    bar: true
  })
}