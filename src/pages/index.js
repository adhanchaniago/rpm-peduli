import React from "react"
import Logo from "../assets/logo.jpeg"
import Layout from "../components/layout"
import "../styles/index.scss"
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndexPage = () => {
  return (
      <Layout>
        <div className="div__tengah">
          <h2>
            <center>
              Selamat datang di Website Rumah Pemberdayaan Masyarakat
            </center>
          </h2>
          <div className="donasi__div">
            <div>
              <img className="donasi__logo" src={Logo} />
              <div className="div__text">
                <p className="donasi__title">
                  Banjir di daerah manakutahu dengan 7 skala richter
                </p>
                <br></br>
                <p>
                  Created by : 
                  <span> RPM Institute 
                    <VerifiedUserIcon style={{height: 15}} />
                  </span>
                </p>
                <p>
                  <ProgressBar now={90} className="div__progressbar" />
                </p>
                <p style={{fontSize:12, marginBottom: 0, width: 100}}>
                  Terkumpul :
                </p>
                <p style={{marginTop: 0}}>
                  Rp. 10.000.000
                </p>
              </div>
            </div>
          </div>
        </div>
	    </Layout>
  )
}

export default IndexPage
