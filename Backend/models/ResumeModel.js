const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema(
  {
    ProjectName: String,
    personalDetails: {
      name: String,
      email: String,
      phoneNumber: String,
    },
    address: {
      streetAddress: String,
      city: String,
      state: String,
      zipCode: String,
      country: String,
    },
    education: [
      {
        name: String,
        institute: String,
        degree: String,
        percentage: String,
        passingYear: String,
      },
    ],
    achievements: [
      {
        title: String,
        dateAchieve: String,
        description: String,
      },
    ],

    workExperience: [
      {
        company: String,
        timeperiod: String,
        description: String,
      },
    ],

    projects: [
      {
        project: String,
        duration: String,
        completionDate: String,
      },
    ],

    skills: [
      {
        name: String,
      },
    ],
  },
  {
    timestamp: true,
  }
);

const Resume = new mongoose.model('Resume', resumeSchema);
module.exports = Resume;

// ProjectName: {
//   type: String,
// },
// FName: {
//   type: String,
// },
// LName: {
//   type: String,
// },
// DOB: {
//   type: Date,
//   default: Date.now,
// },
// Email: {
//   type: String,
// },
// pNo: {
//   type: String,
// },

// street: {
//   type: String,
// },
// city: {
//   type: String,
// },
// state: {
//   type: String,
// },
// country: {
//   type: String,
// },

// Education: [
//   {
//     institution: {
//       type: String,
//     },
//     degree: {
//       type: String,
//     },
//     percentage: {
//       type: String,
//     },
//     yop: {
//       type: Date,
//     },
//   },
// ],

// Skills: [
//   {
//     skill: {
//       type: String,
//     },
//     level: {
//       type: String,
//     },
//   },
// ],
