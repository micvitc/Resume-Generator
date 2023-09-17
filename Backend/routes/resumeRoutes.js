const {
  postPersonal,
  postEducation,
  postAddress,
  postSkills,
  getResume,
  postAchievements,
  postExperience,
  postProjects,
  checkResume,
} = require('../controllers/resumeController.js');

const router = require('express').Router();

router.post('/personal', postPersonal);
router.post('/address', postAddress);
router.post('/education', postEducation);
router.post('/achievements', postAchievements);
router.post('/experience', postExperience);
router.post('/projects', postProjects);
router.post('/skills', postSkills);

// router.get('/allResumes', getAll);
router.get('/getSelected', getResume);
router.get('/check', checkResume);

// router.put('/edit', editSelected);

// router.delete('/delEdu', deleteEducation);
// router.delete('/delSkill', deleteSkill);
// router.delete('/delete', deleteSelected);
module.exports = router;
