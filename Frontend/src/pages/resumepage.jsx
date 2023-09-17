import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/resumepage.css';
import jsPDF from 'jspdf';
import { getResumeRoute } from '../utils/frontendRoutes';

function Resume() {
  const [pName, setPName] = useState(null);
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    image: '',
  });
  const [address, setAddress] = useState({
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
  });
  const [education, setEducation] = useState([]);
  const [achievements, setAchievements] = useState([]);
  const [workExperience, setExperience] = useState([]);
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  const [data1, setData1] = useState({});
  const [data2, setData2] = useState({});
  const [data3, setData3] = useState({});
  const [data4, setData4] = useState({});
  const [data5, setData5] = useState({});
  const [data6, setData6] = useState({});
  const [data7, setData7] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const rspns = await axios.get(getResumeRoute);
      const response = rspns.data;
      setPName(response[0]);
      setData1(response[1]);
      setData2(response[2]);
      setData3(response[3]);
      setData4(response[4]);
      setData5(response[5]);
      setData6(response[6]);
      setData7(response[7]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setPersonalDetails({
      ...personalDetails,
      name: data1.name,
      email: data1.email,
      phoneNumber: data1.phoneNumber,
      image: data1.image,
    });
  }, [data1]);

  useEffect(() => {
    if (data2) {
      setAddress({
        ...address,
        streetAddress: data2.streetAddress,
        city: data2.city,
        state: data2.state,
        zipCode: data2.zipCode,
        country: data2.country,
      });
    }
  }, [data2]);

  useEffect(() => {
    if (Array.isArray(data3)) {
      setEducation(data3);
    }
  }, [data3]);

  useEffect(() => {
    if (Array.isArray(data4)) {
      setAchievements(data4);
    }
  }, [data4]);

  useEffect(() => {
    if (Array.isArray(data5)) {
      setExperience(data5);
    }
  }, [data5]);

  useEffect(() => {
    if (Array.isArray(data6)) {
      setProjects(data6);
    }
  }, [data6]);

  useEffect(() => {
    if (Array.isArray(data7)) {
      setSkills(data7);
    }
  }, [data7]);


  const handleDownload = () => {
    const doc = new jsPDF();

    if (personalDetails.name) {
      doc.text(personalDetails.name, 20, 20);
    }
    if (personalDetails.email && personalDetails.phone) {
      doc.text(personalDetails.email + ' | ' + personalDetails.phoneNumber, 20, 30);
    }
    if (address) {
      doc.text(
        `${address.streetAddress}, ${address.city}, ${address.state}, ${address.country} - ${address.zipCode}`,
        20,
        40
      );
    }

    doc.setFontSize(16);
    if (education.length > 0) {
      doc.text('Education', 20, 60);
      doc.setFontSize(12);
      education.forEach((edu, index) => {
        doc.text(
          `${edu.name}, ${edu.institute}, ${edu.degree}, ${edu.percentage}, ${edu.passingYear}`,
          20,
          70 + index * 10
        );
      });
    }

    if (skills.length > 0) {
      doc.setFontSize(16);
      doc.text('Skills', 20, 100);
      doc.setFontSize(12);
      skills.forEach((skill, index) => {
        doc.text(skill.name, 20, 110 + index * 10);
      });
    }

    if (projects.length > 0) {
      doc.setFontSize(16);
      doc.text('Projects', 20, 140);
      doc.setFontSize(12);
      projects.forEach((project, index) => {
        doc.text(
          `${project.project}, ${project.duration}, ${project.description}`,
          20,
          150 + index * 10
        );
      });
    }

    if (achievements.length > 0) {
      doc.setFontSize(16);
      doc.text('Achievements', 20, 180);
      doc.setFontSize(12);
      achievements.forEach((achievement, index) => {
        doc.text(
          `${achievement.title}, ${achievement.dateAchieved}, ${achievement.description}`,
          20,
          190 + index * 10
        );
      });
    }

    if (workExperience.length > 0) {
      doc.setFontSize(16);
      doc.text('Work Experience', 20, 220);
      doc.setFontSize(12);
      workExperience.forEach((experience, index) => {
        doc.text(
          `${experience.company}, ${experience.timeperiod}, ${experience.description}`,
          20,
          230 + index * 10
        );
      });
    }

    doc.save(`${pName}.pdf`);
  };


  return (
    <div className="resume">
      <button onClick={handleDownload}>Download Resume</button>

      <h1>Resume</h1>

      {personalDetails && (
        <div>
          <h2>Personal Details</h2>
          <p>Name: {personalDetails.name}</p>
          <p>Email: {personalDetails.email}</p>
          <p>Phone: {personalDetails.phoneNumber}</p>
        </div>
      )}

      {address && (
        <div>
          <h2>Address</h2>
          <p>{address.streetAddress}</p>
          <p>{address.city}</p>
          <p>{address.state}</p>
          <p>
            {address.country} - {address.zipCode}
          </p>
        </div>
      )}

      {education.length > 0 && (
        <div>
          <h2>Education</h2>
          <ul>
            {education.map((edu, index) => (
              <li key={index}>
                {edu.name}, {edu.institute}, {edu.degree}, {edu.percentage},
                {edu.passingYear}
              </li>
            ))}
          </ul>
        </div>
      )}

      {achievements.length > 0 && (
        <div>
          <h2>Achievements</h2>
          <ul>
            {achievements.map((achievement, index) => (
              <li key={index}>
                {achievement.title}, {achievement.dateAchieved},{' '}
                {achievement.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {workExperience.length > 0 && (
        <div>
          <h2>Work Experience</h2>
          <ul>
            {workExperience.map((experience, index) => (
              <li key={index}>
                {experience.company}, {experience.timeperiod},
                {experience.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {projects.length > 0 && (
        <div>
          <h2>Projects</h2>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                {project.project}, {project.duration}, {project.completionDate}
              </li>
            ))}
          </ul>
        </div>
      )}

      {skills.length > 0 && (
        <div>
          <h2>Skills</h2>
          {skills.map((item, index) => (
            <p key={index}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Resume;
