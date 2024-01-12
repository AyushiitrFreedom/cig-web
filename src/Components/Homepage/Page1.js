import React from 'react'
import '../Homepage/Page1.css'
import home_bg_2 from '../Images/home_bg_2.png'
import { Link } from 'react-router-dom'

function Page1() {
  const HomeopenWindow1 = () => {
    window.open("https://www.linkedin.com/company/corporate-interactions-group/");
  };
  return (
    <>
      <div className="HomepageContainer">
        <div className="col1page1">
          <div className="headingpage1">
            <p><strong>Bridging the gap between<br />
              Corporate and Academia</strong>
            </p>
            <p className="containtpage1">
              By providing a platform for academia and<br />
              industry to interact. CIG proffers to<br />
              <strong> Connect | Collaborate | Innovate.</strong>
            </p>

            <a href="#" onClick={HomeopenWindow1}>
              <button type="button" class="btn btn-primary btncomponent my-4">Let’s Collaborate</button>
            </a>
          </div>
        </div>
        <div className="col2page1">
          <img className='page1bg' src={home_bg_2} alt='homepagebg' />
        </div>
      </div>
    </>
  )
}

export default Page1