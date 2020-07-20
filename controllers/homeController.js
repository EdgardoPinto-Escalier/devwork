exports.showJobs = (req, res) => {
  res.render('home', {
    pageName: 'DevWork',
    greetings: 'Welcome to DevWork',
    tagline: 'Search and Publish Developer Jobs',
    bar: true,
    button: true
  })
}