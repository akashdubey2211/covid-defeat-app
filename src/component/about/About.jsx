import React from 'react'
import './about.css'
import Vaccine from '../assests/agency-1.svg'
const About = () => {
    return (
        <div>
            <section class="about" id="about">
            <div class="container">
                <div class="heading text-center">
                    <h2>About
                        <span>Us</span></h2>
                    <p><span>Covid-Defeat</span> Basically helps you to get all information about covid information with centres fro vaccination.
                      
                    </p>
                </div>
                <div class="row">
                    <div class="col-lg-6">
                        <img src={Vaccine} alt="about" class="img-fluid" width="100%"/>
                    </div>
                    <div class="col-lg-6">
                        <h5>Covid-Defeat helps you to get actual data on the realtime.</h5>
                        <p>I Hope i'ts really helps you while searching vaccination centres.</p>
                        <div class="row">
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
Helpline Number:</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    +91-11-23978046</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>    Toll Free:</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    1075</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i> Helpline Email ID:</h4>
                            </div>
                            <div class="col-md-6">
                                <h4>
                                    <i class="far fa-star"></i>
                                    ncov2019@gov.in</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default About
