import React from 'react'
import heroImg from "../assets/img/model1-removebg-preview.png"
import "../styles/hero.css";

const Hero = () => {
  return <section id='#'>
    <div className="container">
        <div className="hero__wrapper">
            <div className="hero__content">
                <h2 className='section__title' data-aos-duration="1000" data-aos="fade-up">Energy, strength, and confidence.<br></br><span className="highlights"> Exercise </span> delivers it all</h2>
                <p data-aos-duration="1100" data-aos="fade-up" data-aos-delay="100">Regular exercise is key to maintaining a healthy lifestyle. It boosts physical and <br></br> mental well-being, lowers the risk of chronic diseases, enhances heart health, <br></br>uplifts mood, relieves stress, and promotes restful sleep.</p>

                <div className="hero__btns" data-aos-duration="1200" data-aos="fade-up" data-aos-delay="200">
                    <button className='register__btn'>Get Started</button>
                    <button className='watch_btn'>Watch Video</button>
                </div>
            </div>

            <div className='hero__img'>
                <div className="hero__img-wrapper">
                    <div className="box-01">
                        <div className="box-02">
                            <div className="box-03">
                                <div className="box__img">
                                    <img src={heroImg} alt="err" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  
}


export default Hero
