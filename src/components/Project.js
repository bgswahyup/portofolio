import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/scrollbar';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import itImage from '../assets/it.jpg';
import financeImage from '../assets/finance.jpg';
import healthcareImage from '../assets/healthcare.jpg';
import agricultureImage from '../assets/agriculture.jpg';
import environmentImage from '../assets/environment.jpg';


// Import Swiper core and required modules
import { Navigation, Pagination, EffectCoverflow, Scrollbar } from 'swiper/modules';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow, Scrollbar]}
          effect="coverflow"
          centeredSlides={true}
          slidesPerView={3}  // Ubah ini sesuai kebutuhan
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true} // Aktifkan navigation
          scrollbar={false}  /* Nonaktifkan scrollbar */
          className="project-items"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1440: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide className="project-item">
            <img src={itImage} alt="Project 1" />
            <div className="project-info">
              <h3>Technology</h3>
              <p>Proyek Terkait dengan Artificial Inteligence</p>
              <div className="project-links">
                <a href="https://github.com/project-link1" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://project-live-link1.com" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View More
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide className="project-item">
            <img src={financeImage} alt="Project 2" />
            <div className="project-info">
              <h3>Finance</h3>
              <p>Proyek Terkait dengan Keuangan</p>
              <div className="project-links">
                <a href="https://github.com/project-link2" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://project-live-link2.com" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View More
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="project-item">
            <img src={healthcareImage} alt="Project 2" />
            <div className="project-info">
              <h3>Healthcare</h3>
              <p>Proyek Terkait dengan Kesehatan</p>
              <div className="project-links">
                <a href="https://github.com/project-link2" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://project-live-link2.com" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View More
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide className="project-item">
            <img src={agricultureImage} alt="Project 2" />
            <div className="project-info">
              <h3>Agriculture</h3>
              <p>Proyek Terkait dengan Pertanian</p>
              <div className="project-links">
                <a href="https://github.com/project-link2" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://project-live-link2.com" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View More
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide className="project-item">
            <img src={environmentImage} alt="Project 2" />
            <div className="project-info">
              <h3>Environmental</h3>
              <p>Proyek Terkait dengan Lingkungan Hidup</p>
              <div className="project-links">
                <a href="https://github.com/project-link2" target="_blank" rel="noopener noreferrer">
                  <FaGithub /> View Code
                </a>
                <a href="https://project-live-link2.com" target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> View More
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Tambahkan lebih banyak slide sesuai kebutuhan */}
        
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
