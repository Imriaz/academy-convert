import React from 'react';
import iosApp from "../../images/ios_app.png";
import androidApp from "../../images/android_app.png";
import j2ee from "../../images/j2ee_training.png";
import "./Courses.css";

const Courses = () => {
    return (
    <section className='cpcourses'>
        <aside className='cpcourses__start-line'>&nbsp;</aside>
        <header>
          <h1 className='cpcourses__course-text'>Cross platform courses</h1>
          <p className='cpcourses__choose'>Choose from the best courses to build a strong foundation with us</p>
        </header>
        <main className="cpcourses__courses">
          <img className='cpcourses__courses__item' src={iosApp} alt="Ios App"></img>
          <img className='cpcourses__courses__item' src={androidApp} alt="Android App"></img>
          <img className='cpcourses__courses__item'  src={j2ee} alt="J2ee"></img>
        </main>
    </section>
  )
}

export default Courses;
