document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelector('.skill-set');

  if(skills) {
    skills.addEventListener('click', addSkills);
  }
});

const skills = new Set();
const addSkills = (e) => {
  if(e.target.tagName === 'LI') {
    if(e.target.classList.contains('active')) {
      // Erase skill from the set and class also
        skills.delete(e.target.textContent);
        e.target.classList.remove("active");
    } else {
      // Add it to the set with the class
      skills.add(e.target.textContent);
      e.target.classList.add("active");
    }

  }

  const skillsArray = [...skills]
  document.querySelector('#skills').value = skillsArray;
}