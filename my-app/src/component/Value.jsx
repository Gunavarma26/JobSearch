// Value page

import React from 'react'
import { RiRefreshLine } from "react-icons/ri";
import { TbAirBalloon } from "react-icons/tb";
import { FiAward } from "react-icons/fi";
import '../style/value.css'
import { Button } from 'antd';
import { ImArrowRight } from "react-icons/im";

const Value = ({inputRef}) => {

 
    return (
        <div className="value_continer">
            <div className="line">
                <p>The value that holds us true and to account</p>
            </div>
            <div className="content_continer">
                <div className="content1">
                    <div className="contone">
                        <div className="value_head">
                            <div className='Simplicity' >
                                <RiRefreshLine />
                            </div>
                            <span className='valuespan' >Simplicity</span>
                        </div>
                        <p>Things beinf made beautiful simple are at the heart of everything we do.</p>
                    </div>
                </div>
                <div className="content2">
                    <div className="contone">
                        <div className="value_head">
                            <div className='Social_Good' >
                                <TbAirBalloon />
                            </div>
                            <span className='valuespan' >Social Good </span>
                        </div>
                        <p>We believe in making things better for everyone, even if just by a little bit!</p>
                    </div>
                </div>
                <div className="content3">
                    <div className="contone">
                        <div className="value_head">
                            <div className='Trust' >
                                <FiAward />
                            </div>
                            <span className='valuespan' >Trust</span>
                        </div>
                        <p>We work on the basis of creating trust which can be nurtued through authenticity and transparency.</p>
                    </div>
                </div>
            </div>

            <div className="contenttwo">
                <div>
                    <h2 style={{ color: "blue", fontFamily: '-moz-initial', fontWeight: "555" }} >Ready to switch a acreer ?</h2>
                    <p style={{ fontFamily: 'inherit', fontWeight: '566', fontSize: "22px" }} >Let's get started!</p>
                </div>
                <div>
                    <Button className='getstart' onClick={() => inputRef.current.focus()}>Get Started <ImArrowRight style={{ marginTop: "2px", fontSize: "20px" }} /> </Button>
                </div>
            </div>
        </div>
    )
}

export default Value