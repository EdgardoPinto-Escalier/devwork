exports.formNewVacancy = (req, res) => {
  res.render("new-vacancy", {
    pageName: "New Job Vacancy",
    tagline: "Fill out the form and post your job vacancy",
  });
}