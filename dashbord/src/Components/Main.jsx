import React from 'react'
import Header from './Shared/Header'
import Nav from './Shared/Nav';
import Footer from './Shared/Footer'
import { Link } from 'react-router-dom';
import Lastjob from '../Pages/Lastjob'
import Totaljob from "./Totaljob";
import Totalcondidat from "./Totalcondidat";
import Totalcondidataccepté from "./Totalcondidataccepté";
import Totalcondidatrefusé from "./Totalcondidatrefusé";
function Main() {
  return (
   
      <>
    
 <Header></Header>

 
  <main className="main">
   <Nav></Nav>
    <div className="box-content">
      <div className="box-heading">
        <div className="box-title">
          <h3 className="mb-35">Dashboard</h3>
        </div>
        <div className="box-breadcrumb">
          <div className="breadcrumbs">
            <ul>
              <li>
                {" "}
                <a className="icon-home" href="index.html">
                  Admin
                </a>
              </li>
              <li>
                <span>Dashboard</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xxl-8 col-xl-7 col-lg-7">
          <div className="section-box">
            <div className="row">
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/doc.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                       <Totaljob></Totaljob>
                        <span className="font-sm status up">
                          25<span>%</span>
                        </span>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">
                      Postes Ajoutée
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/man.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                       <Totalcondidat></Totalcondidat>
                        <span className="font-sm status up">
                          5<span>%</span>
                        </span>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">Condidates Postulées</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/man.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                       <Totalcondidataccepté></Totalcondidataccepté>
                        <span className="font-sm status up">
                          12<span>%</span>
                        </span>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">Condidates Acceptée</p>
                  </div>
                </div>
              </div>
              <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-4 col-sm-6">
                <div className="card-style-1 hover-up">
                  <div className="card-image">
                    {" "}
                    <img
                      src="assets/imgs/page/dashboard/man.svg"
                      alt="jobBox"
                    />
                  </div>
                  <div className="card-info">
                    <div className="card-title">
                      <h3>
                        <Totalcondidatrefusé></Totalcondidatrefusé>
                        <span className="font-sm status up">
                          5<span>%</span>
                        </span>
                      </h3>
                    </div>
                    <p className="color-text-paragraph-2">Condidates Refusée</p>
                  </div>
                </div>
              </div>
             
              
            </div>
          </div>
         
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <h5>Dernier Postes</h5>
                
                  
                </div>
                <div className="panel-body">
                  
                 <Lastjob></Lastjob>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xxl-4 col-xl-5 col-lg-5">
          <div className="section-box">
            <div className="container">
              <div className="panel-white">
                <div className="panel-head">
                  <h5>Top Candidates</h5>
                  <a
                    className="menudrop"
                    id="dropdownMenu4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  />
                  <ul
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                    aria-labelledby="dropdownMenu4"
                  >
                    <li>
                      <a className="dropdown-item active" href="#">
                        Add new
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Settings
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Actions
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="panel-body">
                  <div className="card-style-3 hover-up">
                    <div className="card-image online">
                      <img
                        src="assets/imgs/page/dashboard/avata1.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Robert Fox</h6>
                      <span className="job-position">UI/UX Designer</span>
                    </div>
                    <div className="card-location">
                      {" "}
                      <span className="location">Chicago, US</span>
                    </div>
                    <div className="card-rating">
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <span className="font-xs color-text-mutted">(65)</span>
                    </div>
                  </div>
                  <div className="card-style-3 hover-up">
                    <div className="card-image online">
                      <img
                        src="assets/imgs/page/dashboard/avata2.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Cody Fisher</h6>
                      <span className="job-position">Network Engineer</span>
                    </div>
                    <div className="card-location">
                      {" "}
                      <span className="location">New York, US</span>
                    </div>
                    <div className="card-rating">
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <span className="font-xs color-text-mutted">(65)</span>
                    </div>
                  </div>
                  <div className="card-style-3 hover-up">
                    <div className="card-image online">
                      <img
                        src="assets/imgs/page/dashboard/avata3.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Jane Cooper</h6>
                      <span className="job-position">Content Manager</span>
                    </div>
                    <div className="card-location">
                      {" "}
                      <span className="location">Chicago, US</span>
                    </div>
                    <div className="card-rating">
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <span className="font-xs color-text-mutted">(65)</span>
                    </div>
                  </div>
                  <div className="card-style-3 hover-up">
                    <div className="card-image online">
                      <img
                        src="assets/imgs/page/dashboard/avata4.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Jerome Bell</h6>
                      <span className="job-position">Frontend Developer</span>
                    </div>
                    <div className="card-location">
                      {" "}
                      <span className="location">Chicago, US</span>
                    </div>
                    <div className="card-rating">
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <span className="font-xs color-text-mutted">(65)</span>
                    </div>
                  </div>
                  <div className="card-style-3 hover-up">
                    <div className="card-image online">
                      <img
                        src="assets/imgs/page/dashboard/avata5.png"
                        alt="jobBox"
                      />
                    </div>
                    <div className="card-title">
                      <h6>Floyd Miles</h6>
                      <span className="job-position">NodeJS Dev</span>
                    </div>
                    <div className="card-location">
                      {" "}
                      <span className="location">Chicago, US</span>
                    </div>
                    <div className="card-rating">
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <img
                        src="assets/imgs/page/dashboard/star.svg"
                        alt="jobBox"
                      />{" "}
                      <span className="font-xs color-text-mutted">(65)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
         
        </div>
      </div>
   
  
    </div>
  </main>

  
</>


  )
}

export default Main
