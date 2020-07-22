document.addEventListener('DOMContentLoaded', () => {
  const skills = document.querySelector('.skill-set');

  if(skills) {
    skills.addEventListener('click', addSkills);
    selectedSkills();
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

const selectedSkills = () => {
  const skillsSelected = Array.from(document.querySelectorAll('.skill-set .active'));

  skillsSelected.forEach(skillSelected => {
    skills.add(skillSelected.textContent);
  })

  const skillsArray = [...skills]
  document.querySelector('#skills').value = skillsArray;
}