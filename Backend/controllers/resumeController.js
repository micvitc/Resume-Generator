const resumeSchema = require('../models/ResumeModel.js');

global.FormData = {};

//post data into mongoDB creating new resume

module.exports.checkResume = async (req, res, next) => {
  try {
    const { ProjectName, name } = req.query;
    const exists = await resumeSchema.findOne({
      ProjectName,
      'personalDetails.name': name,
    });

    let check = false;
    if (exists) check = true;
    const response = [check];

    res.status(200).json(response);
  } catch (err) {
    next(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports.postPersonal = async (req, res, next) => {
  try {
    const { ProjectName, name, email, phoneNumber} = req.body;

    const newResume = new resumeSchema({
      ProjectName,
      personalDetails: {
        name,
        email,
        phoneNumber,
      },
    });

    await newResume.save();

    FormData.ProjectName = ProjectName;
    FormData.personalDetails = {
      name,
      email,
      phoneNumber,

    };

    return res.status(200).json({ added: true, msg: 'added' });
  } catch (err) {
    next(err);
    res.status(500).json({ message: 'Internal server error.' });
  }
};

module.exports.postAddress = async (req, res, next) => {
  try {
    const { streetAddress, city, state, zipCode, country } = req.body;

    const resume = await resumeSchema.findOne({
      ProjectName: FormData.ProjectName,
      'personalDetails.name': FormData.personalDetails.name,
    });
    resume.address = {
      streetAddress,
      city,
      state,
      zipCode,
      country,
    };

    await resume.save();

    res.status(200).json({ added: true, msg: 'added' });
  } catch (err) {
    next(err);
    res.status(500).json(err);
  }
};

module.exports.postEducation = async (req, res, next) => {
  try {
    const { educationFields } = req.body;

    const resume = await resumeSchema.findOne({
      ProjectName: FormData.ProjectName,
      'personalDetails.name': FormData.personalDetails.name,
    });
    if (!resume) {
      res.status(404).json({ added: false });
    }

    if (!Array.isArray(resume.education)) {
      resume.education = [];
    }
    educationFields.forEach((element) => {
      const { name, institute, degree, percentage, passingYear } = element;
      resume.education.push({
        name,
        institute,
        degree,
        percentage,
        passingYear,
      });
    });

    await resume.save();

    res.status(200).json({ added: true, resume });
  } catch (err) {
    next(err);
    res.status(500).json(err);
  }
};

module.exports.postAchievements = async (req, res, next) => {
  try {
    const { achievementFields } = req.body;

    const resume = await resumeSchema.findOne({
      ProjectName: FormData.ProjectName,
      'personalDetails.name': FormData.personalDetails.name,
    });

    if (!resume) {
      res.status(404).json({ added: false });
    }
    if (!Array.isArray(resume.achievements)) {
      resume.achievements = [];
    }
    achievementFields.forEach((element) => {
      const { title, dateAchieve, description } = element;
      resume.achievements.push({
        title,
        dateAchieve,
        description,
      });
    });

    await resume.save();

    res.status(200).json({ added: true, resume });
  } catch (err) {
    next(err);
    res.status(500).json(err);
  }
};

module.exports.postExperience = async (req, res, next) => {
  try {
    const { workExperiences } = req.body;

    const resume = await resumeSchema.findOne({
      ProjectName: FormData.ProjectName,
      'personalDetails.name': FormData.personalDetails.name,
    });

    if (!resume) {
      res.status(404).json({ added: false });
    }
    if (!Array.isArray(resume.workExperience)) {
      resume.workExperience = [];
    }

    workExperiences.forEach((element) => {
      const { company, timeperiod, description } = element;
      resume.workExperience.push({
        company,
        timeperiod,
        description,
      });
    });

    await resume.save();

    res.status(200).json({ added: true, resume });
  } catch (err) {
    next(err);
    res.status(500).json(err);
  }
};

module.exports.postProjects = async (req, res, next) => {
  try {
    const { fields } = req.body;

    const resume = await resumeSchema.findOne({
      ProjectName: FormData.ProjectName,
      'personalDetails.name': FormData.personalDetails.name,
    });

    if (!resume) {
      res.status(404).json({ added: false });
    }
    if (!Array.isArray(resume.projects)) {
      resume.projects = [];
    }
    fields.forEach((element) => {
      const { project, duration, completionDate } = element;
      resume.projects.push({
        project,
        duration,
        completionDate,
      });
    });

    await resume.save();

    res.status(200).json({ added: true, resume });
  } catch (err) {
    next(err);
    res.status(500).json(err);
  }
};

module.exports.postSkills = async (req, res, next) => {
  try {
    const { skills } = req.body;

    const resume = await resumeSchema.findOne({
      ProjectName: FormData.ProjectName,
      'personalDetails.name': FormData.personalDetails.name,
    });

    if (!resume) {
      res.status(404).json({ added: false });
    }
    if (!Array.isArray(resume.skills)) {
      resume.skills = [];
    }

    skills.forEach((element) => {
      const { name } = element;
      resume.skills.push({
        name,
      });
    });

    await resume.save();
    res.status(200).json({ added: true, resume });
  } catch (err) {
    next(err);
    res.status(500).json(err);
  }
};


//fetch selected resume

module.exports.getResume = async (req, res, next) => {
  try {
    const resume = await resumeSchema.findOne({
      ProjectName: FormData.ProjectName,
      'personalDetails.name': FormData.personalDetails.name,
    });
    const ProjectName = FormData.ProjectName;
    const personal = resume.personalDetails;
    const address = resume.address;

    const education = resume.education;

    const achievements = resume.achievements;
    const experiences = resume.workExperience;
    const projects = resume.projects;
    const skills = resume.skills;

    const response = [
      ProjectName,
      personal,
      address,
      education,
      achievements,
      experiences,
      projects,
      skills,
    ];
    res.status(200).json(response);
  } catch (err) {
    next(err);
    res.status(500).json(err);
  }
};