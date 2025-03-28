import React from "react";
import { Carousel } from "antd";
import Footer from "./Footer";
import Guest from "./Guest";
import Sample_Image_1 from "../../public/images/sample_image_amrita_1.jpg";
import Sample_Image_2 from "../../public/images/sample_image_amrita_2.jpg";

function Home({
  openDropdown,
  toggleDropdown, 
  handleSelect, 
  selectedUrl, 
}) {



  return (
    <div className="home-page">
      

      {/* Main Image */}
      <div className="main-image">
        <img
          src="https://admin.amritahospitals.org/sites/default/files/amrita%20logo.svg"
          alt="Amrita Hospital Logo"
        />
      </div>

      <div className="home-title">AIMS Research Portal</div>
      <p className="home-text">
      Amrita Hospital, located in Kochi, is one of Asia's largest private hospitals. Established in 1998 by Sri Mata Amritanandamayi Devi (AMMA), it has provided advanced healthcare to over 10 million individuals. The hospital has expanded to Faridabad, Delhi, and operates using the Amrita Hospital Information Suite (HIS), developed by Amrita Technologies. This system securely stores extensive patient data, which has been accumulated over two decades. This data serves as a valuable resource for doctors, researchers, students, and collaborators, supporting future studies, informed decision-making, and problem-solving for societal benefit.
      <br />
      <br />

      To further enhance data collection and research capabilities, a dedicated mobile app is being introduced. This app will facilitate prospective data collection from patients, supporting community health initiatives and clinical research projects. By allowing real-time data entry and secure patient interactions, the app aims to improve early disease detection, monitor public health trends, and provide valuable insights for medical advancements.
      <br />
      <br />
      The use of this app is governed by the Amrita Hospital Data Sharing Policy(
      <a href="https://research.amritahospitals.org/files/Data_Sharing_Policy_AIMS_Review.pdf" target="_blank" rel="noopener noreferrer">Open</a>
      ), ensuring that all collected data is securely managed and utilized in compliance with ethical and regulatory standards. Patient confidentiality, data security, and responsible usage are central to this policy, reinforcing Amrita Hospital's commitment to maintaining the highest standards of medical research and public health initiatives.
      </p>

      {/* Carousel */}
      <Carousel autoplay autoplaySpeed={5000} className="carousel">
        <div>
          <img src={Sample_Image_1} alt="Sample 1" className="carousel-image" />
        </div>
        <div>
          <img src={Sample_Image_2} alt="Sample 2" className="carousel-image" />
        </div>
      </Carousel>


      <Guest
        openDropdown={openDropdown}
        toggleDropdown={toggleDropdown}
        handleSelect={handleSelect}
        selectedUrl={selectedUrl}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;