import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import './footer.css'




const Footer1 = () => {
  return (
    <div>
       <MDBFooter className='text-center foot-div' color='white' >
      <MDBContainer className='p-4'>
        <section className='mb-4'>
        <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/anujithpalanghadan.anujithpalanghadan?mibextid=ZbWKwL'
            role='button'
          >
            <FaFacebook />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://x.com/Anujithp2k?s=09'
            role='button'
          >
            <FaTwitter/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
           <FaGoogle/>
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/4nujith.p__?igsh=MnN6cTVmdjVxdnpt'
            role='button'
          >
            <FaInstagram/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='#!'
            role='button'
          >
            <FaGithub/>
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#333333' }}
            href='#!'
            role='button'
          >
            <FaLinkedinIn/>
          </MDBBtn>
        </section>

        <section className=''>
          <div className=' foot-item'>

              <div className='d-flex justify-content-center align-items-center p-lg-3     '>
              <FaPhoneAlt className='icons'/>
              <h3><a href="">9895132405</a></h3>
              </div>
              <div className='d-flex justify-content-center align-items-center p-lg-3    '>
                <CiMail className='icons'/>
                <h3><a href="">anujithp007@gmail.com</a></h3>
              </div>
              <div className='d-flex justify-content-center align-items-center  '>
              <IoLocationOutline className='icons'/>
              <h3 >Taliparamba,Kannur,Kerala</h3>
              </div>
          </div>
          

              
            

         
        </section>

      
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          anujithp007@gmail.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer1
