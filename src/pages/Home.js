import React from 'react';
import './home.css';
import { FaBootstrap } from "react-icons/fa";




function Home() {

    return (
        <div className="home">


            <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="hello" >
                <h5 className="w3-text-light-grey" >Hello, i am</h5>
                <h1 className="w3-text-light-grey " style={{ marginBottom: '-20px', paddingBottom: '0px' }} >Setiawan</h1>
                <h1 className="w3-text-light-grey " style={{ marginBottom: '25px', paddingBottom: '0px' }}>Radiansyah</h1>

                <p>
                    A self-taugh Web-Developer. i have recently started learning standart HTML, CSS, Javascript and React Framework. My plan is Web-Developer to become a career move for me.
                </p>

                <br></br>
                <p>I woud love to have senior have peer to check my work and give me advice required for my own developer</p>
                <div>
                    <button class="w3-button w3-hover-red w3-gray w3-round-xlarge">Contact Me</button>
                    <FaBootstrap size='22px' color='purple' style={{
                        marginRight: '10px'
                    }} />
                </div>

            </div>



        </div>

    )

}

export default Home;