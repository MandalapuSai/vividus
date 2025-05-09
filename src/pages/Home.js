import React from 'react'
import First_Img from '../assets/image.jpg';
import Second_img from '../assets/image_1.png';


export default function Home() {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-md-6'>
                    <div>
                        <img src={First_Img} alt='' style={{ width: '100%' }} />
                    </div>
                </div>

                <div className='col-md-6 d-flex align-items-center'>
                    <div>
                        <p>
                            At Vividus Science Private Limited, we are dedicated to advancing innovation in science and technology.
                            With a focus on quality, research, and sustainability, we strive to deliver reliable solutions.
                            Our commitment is to excellence, integrity, and the future of scientific progress.
                        </p>
                        <p>
                            We believe in the power of knowledge to drive transformation.
                            Our team continuously explores new possibilities through research and collaboration.
                            Every solution we create is designed to make a lasting impact.
                        </p>
                        <p>
                            From idea to implementation, we stand by precision and professionalism.
                            Client satisfaction is at the core of our operations and values.
                            Join us in shaping a smarter, healthier, and more innovative tomorrow.
                        </p>
                    </div>
                </div>
            </div>

            <div className='row mt-5 mb-5'>

                <div className='col-md-6 d-flex align-items-center'>
                    <div>
                        <p>
                            At Vividus Science, we merge scientific precision with innovative thinking to address modern-day challenges. Our approach is grounded in deep research, rigorous standards, and a passion for impactful solutions that enhance quality of life.
                        </p>
                        <p>
                            Whether it’s in healthcare, industrial science, or technology services, we are committed to delivering results that matter. Our multidisciplinary team works closely with clients to ensure every product and solution aligns with their vision and values.
                        </p>
                        <p>
                            We value transparency, responsibility, and continuous growth. By embracing cutting-edge tools and nurturing talent, we pave the way for breakthroughs that shape a more sustainable and intelligent future for all.
                        </p>
                    </div>
                </div>


                <div className='col-md-6'>
                    <div>
                        <img src={Second_img} alt='' style={{ width: '100%' }} />
                    </div>
                </div>
            </div>


        </div>
    )
}
