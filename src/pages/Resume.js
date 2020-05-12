import React from 'react';
import './resume.css';
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { RiSendPlane2Line } from "react-icons/ri"


function Resume() {

    return (
        <div className="resume">
            <div className="w3-content w3-justify w3-text-grey w3-padding-64" id="about">

                <h2>Education</h2>
                <p style={{
                    fontSize: '18px',
                    paddingBottom: '12px',
                    paddingTop: '20px'
                }}>
                    <RiSendPlane2Line size='15px' color=' #cc0000' style={{
                        marginLeft: '20px',
                        marginRight: '10px'
                    }} />2000-2006</p>

                <h5 style={{
                    marginLeft: '50px'
                }}>
                    SDN Ciptomulyo 2 Regroup
                        </h5>


                <p>Some text about me. ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

                <p style={{
                    fontSize: '18px',
                    paddingBottom: '12px',
                    paddingTop: '20px'
                }}>
                    <RiSendPlane2Line size='15px' color=' #cc0000' style={{
                        marginLeft: '20px',
                        marginRight: '10px'
                    }} />2006-2009</p>

                <h5 style={{
                    marginLeft: '50px'
                }}>
                    SMP Al-Hidayah
                        </h5>


                <p>Some text about me.m quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

                <p style={{
                    fontSize: '18px',
                    paddingBottom: '12px',
                    paddingTop: '20px'
                }}>
                    <RiSendPlane2Line size='15px' color=' #cc0000' style={{
                        marginLeft: '20px',
                        marginRight: '10px'
                    }} />2010-2014</p>

                <h5 style={{
                    marginLeft: '50px'
                }}>
                    SMKN 11 Malang
                        </h5>


                <p>Some a. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

                <p style={{
                    fontSize: '18px',
                    paddingBottom: '12px',
                    paddingTop: '20px'
                }}>
                    <RiSendPlane2Line size='15px' color=' #cc0000' style={{
                        marginLeft: '20px',
                        marginRight: '10px'
                    }} />2014-2016</p>

                <h5 style={{
                    marginLeft: '50px'
                }}>
                    Universitas Negeri Malang
                        </h5>


                <p>Some tion ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>


            </div>




        </div >
    )
}

export default Resume;