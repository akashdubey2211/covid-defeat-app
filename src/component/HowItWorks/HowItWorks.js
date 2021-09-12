import React from 'react'
import './style.css'

const HowItWorks = () => {
    return (
        <div>
           <section class="work-porcess-area section">
            <div class="container">


        <div class="section-header">
          
                            <h2>How It Works.</h2>
          <p>By simply search by Pincode code & by District name with State name.</p>
        </div>
                <div class="process-info">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="single-process first text-center">
                                <i class="fas fa-search"></i>
                                <h4>Register on Cowin Website.</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-process secend text-center">
                                <i class="fas fa-cog"></i>
                                <h4>Search by Pincode.
                                </h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-process thard text-center">
                                <i class="fas fa-globe"></i>
                                <h4>By District name with State.</h4>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="single-process last text-center">
                                <i class="fas fa-sync-alt"></i>
                                <h4>Get details about</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default HowItWorks
