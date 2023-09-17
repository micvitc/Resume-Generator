import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/resumepage.css';
import { getResumeRoute } from '../utils/frontendRoutes';

function ResumeDisplay() {

  const [pName, setPName] = useState(null);
  const [personalDetails, setPersonalDetails] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    image: '',
  });
  const [address, setAddress] = useState({
    streetAddress: '',
    cit: '',
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
      console.log(response);
      console.log(response[2]);
      console.log(response[4][0].title);
      setPName(response[0]);
      setData1(response[1]);
      setData2(response[2]);
      setData3(response[3]);
      setData4(response[4]);
      setData5(response[5]);
      setData6(response[6]);
      setData7(response[7]);
      console.log(data5);
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
      console.log(address);
    }
  }, [data2]);

  useEffect(() => {
    if (Array.isArray(data3)) {
      setEducation(data3);
      console.log(education);
    }
  }, [data3]);

  useEffect(() => {
    if (Array.isArray(data4)) {
      setAchievements(data4);
      console.log(achievements);
    }
  }, [data4]);

  useEffect(() => {
    if (Array.isArray(data5)) {
      setExperience(data5);
      console.log(workExperience);
    }
  }, [data5]);

  useEffect(() => {
    if (Array.isArray(data6)) {
      setProjects(data6);
      console.log(projects);
    }
  }, [data6]);

  useEffect(() => {
    if (Array.isArray(data7)) {
      setSkills(data7);
      console.log(skills);
    }
  }, [data7]);

  return (
    <div>
      <div>Project Name : {pName}</div>
      {personalDetails && <div> Name: {personalDetails.name} </div>}
      {address && (
        <div>
          {address.city}, {address.state}
        </div>
      )}

      <div>
        {education.map((item, index) => (
          <p key={index}>
            name: {item.name}, institute: {item.institute}, degree:
            {item.degree}, percentage: {item.percentage}, passingYear:
            {item.passingYear}
          </p>
        ))}
      </div>

      <div>
        {achievements.map((item, index) => (
          <p key={index}>
            title: {item.title}, dateAchieved : {item.dateAchieved},
            description: {item.description}
          </p>
        ))}
      </div>
      <div>
        {workExperience.map((item, index) => (
          <p key={index}>
            company: {item.company}, timeperiod: {item.timeperiod}, description:{' '}
            {item.description}
          </p>
        ))}
      </div>
      <div>
        {projects.map((item, index) => (
          <p key={index}>
            project: {item.project}, duration: {item.duration}, completionDate:{' '}
            {item.completionDate}
          </p>
        ))}
      </div>
      <div>
        {skills.map((item, index) => (
          <p key={index}>name: {item.name}</p>
        ))}
      </div>
    </div>
  );
}

export default ResumeDisplay;
