exports.showJobs = (req, res) => {
  res.render('home', {
    pageName: 'DevWork',
    tagline: 'Search and Publish Developer Jobs',
    bar: true,
    button: true
  })
}