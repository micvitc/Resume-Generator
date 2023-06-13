const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({

  ProjectName: {
    type: String,
    required: [true, 'Required feild'],
    unique: [true, 'Already Exists'],
  },
  Fname: {
    type: String,
    required: [true, 'Required feild'],
    maxlength: [10, 'Excceding maximum character length'],
  },
  Lname: {
    type: String,
    required: [true, 'Required feild'],
    maxlength: [10, 'Excceding maximum character length'],
  },
  DOB: {
    type: Date,
    required: [true, 'Required feild'],
    default: Date.now,
  },

  email: {
    type: String,
    required: [true, 'Required feild'],
    maxlength: [20, 'Excceding maximum character length'],
  },

  phoneNo: [
    {
      countryCode: {
        type: String,
        required: [true, 'Required feild'],
        maxlength: [3, 'Excceding maximum character length'],
      },
      pNo: {
        type: String,
        required: [true, 'Required feild'],
        maxlength: [10, 'Excceding maximum character length'],
      },
    },
  ],

  address: [
    {
      street: {
        type: String,
        required: [true, 'Required feild'],
      },
      city: {
        type: String,
        required: [true, 'Required feild'],
      },
      state: {
        type: String,
        required: [true, 'Required feild'],
      },
      country: {
        type: String,
        required: [true, 'Required feild'],
      },
    },
  ],

  gender: {
    type: String,
    enum: ['Male', 'Female', 'Prefer not to say'],
  },

  education: {
    type: String,
    enum: ['Post Graduate', 'Under Graduate', 'PHD', 'Schooling', 'Other'],
    required: [true, 'Required feild'],
  },

  otherEducation: {
    type: String,
  },

  workExperience: [
    {
      placeOfWork: {
        type: String,
        required: [true, 'Required feild'],
      },
      workDescription: {
        type: String,
        required: [true, 'Required feild'],
      },
    },
  ],

  skills: [
    {
      skillName: {
        type: String,
        required: [true, 'Required feild'],
      },
      skillLevel: {
        type: Number,
        enum: [1, 2, 3, 4, 5],
        default: 3,
      },
    },
  ],
  profileUrl: {
    type: String,
    required: [true, 'Required feild'],
  },
})


const Resume=new mongoose.model('Resume', resumeSchema);
module.exports=Resume;































// const resumeSchema = new mongoose.Schema({
//   Fname: {
//     type: String,
//     required: [true, 'Required feild'],
//     maxlength: [10, 'Excceding maximum character length'],
//   },
//   Lname: {
//     type: String,
//     required: [true, 'Required feild'],
//     maxlength: [10, 'Excceding maximum character length'],
//   },
//   DOB: {
//     type: Date,
//     required: [true, 'Required feild'],
//     default: Date.now,
//   },

//   email: {
//     type: String,
//     required: [true, 'Required feild'],
//     maxlength: [20, 'Excceding maximum character length'],
//   },

//   phoneNo: [
//     {
//       countryCode: {
//         type: String,
//         required: [true, 'Required feild'],
//         maxlength: [3, 'Excceding maximum character length'],
//       },
//       pNo: {
//         type: String,
//         required: [true, 'Required feild'],
//         maxlength: [10, 'Excceding maximum character length'],
//       },
//     },
//   ],

//   address: [
//     {
//       street: {
//         type: String,
//         required: [true, 'Required feild'],
//       },
//       city: {
//         type: String,
//         required: [true, 'Required feild'],
//       },
//       state: {
//         type: String,
//         required: [true, 'Required feild'],
//       },
//       country: {
//         type: String,
//         required: [true, 'Required feild'],
//       },
//     },
//   ],

//   gender: {
//     type: String,
//     enum: ['Male', 'Female', 'Prefer not to say'],
//   },

//   education: {
//     type: String,
//     enum: ['Post Graduate', 'Under Graduate', 'PHD', 'Schooling', 'Other'],
//     required: [true, 'Required feild'],
//   },

//   otherEducation: {
//     type: String,
//   },

//   workExperience: [
//     {
//       placeOfWork: {
//         type: String,
//         required: [true, 'Required feild'],
//       },
//       workDescription: {
//         type: String,
//         required: [true, 'Required feild'],
//       },
//     },
//   ],

//   skills: [
//     {
//       skillName: {
//         type: String,
//         required: [true, 'Required feild'],
//       },
//       skillLevel: {
//         type: Number,
//         enum: [1, 2, 3, 4, 5],
//         default: 3,
//       },
//     },
//   ],
//   profileUrl: {
//     type: String,
//     required: [true, 'Required feild'],
//   },
// })


// const Resume=new mongoose.model('Resume', resumeSchema);
// module.exports=Resume;
