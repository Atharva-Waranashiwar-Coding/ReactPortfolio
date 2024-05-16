import React from "react";
import data from "../../data/index.json";

export default function WorkExperience() {
  return (
    <section className="work-experience-section" id="workExperience">
      <div className="portfolio-container">
        <p className="section--title">Work Experience</p>
        <h1 className="section--heading">Professional Journey</h1>
      </div>
      <div className="work-experience-section-container">
        {data?.workExperience?.map((item, index) => (
          <div key={index} className="work-experience-card">
            <div className="work-experience-logo">
              <img className="work-experience-img"src={item.companyLogo} alt={item.companyName} />
            </div>
            <div className="work-experience-card-content">
              <h3 className="work-experience-company">{item.companyName}</h3>
              <p className="work-experience-position">{item.position}</p>
              <p className="work-experience-duration">{item.duration}</p>
              <ul className="work-experience-responsibilities">
                {item.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
