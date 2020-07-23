const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');
const vacanciesController = require('../controllers/vacanciesController');

module.exports = () => {
  router.get('/', homeController.showJobs);

  // Create new vacancies
  router.get('/job-vacancies/new', vacanciesController.formNewVacancy);
  router.post('/job-vacancies/new', 
    vacanciesController.addNewVacancy
  );

  // Show Job Vacancy
  router.get('/job-vacancies/:url', vacanciesController.showVacancy);

  // Edit Job Vacancy
  router.get('/job-vacancies/edit/:url', vacanciesController.formEditVacancy);
  router.post('/job-vacancies/edit/:url', vacanciesController.editVacancy);

  return router;
}
