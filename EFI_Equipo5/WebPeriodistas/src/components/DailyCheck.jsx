import React from 'react';
import '../styles/tarjeta.css';

const DailyCheck = () => {
  return (
    <div className="daily-check">
      <div className="card">
        <div className="content">
          <div className="back">
            <div className="back-content">
              <i className='pi pi-check-circle' style={{ fontSize: '40px', color: '#fff' }}></i>
              <strong>Check Diario</strong>
              <p>Checkea y disftura de <br />descuentos exclusivos!</p>
            </div>
          </div>
          <div className="front">
            <div className="img">
              <div className="circle"></div>
              <div className="circle" id="right"></div>
              <div className="circle" id="bottom"></div>
            </div>
            <div className="front-content">
              <small className="badge">Pasta</small>
              <div className="description">
                <div className="title">
                  <p className="title"><strong>Check Diario</strong></p>
                  <svg
                    fillRule="nonzero"
                    height="15px"
                    width="15px"
                    viewBox="0,0,256,256"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g style={{ mixBlendMode: 'normal' }} textAnchor="none" fontSize="none" fontWeight="none" fontFamily="none" strokeDashoffset={0} strokeMiterlimit={10} strokeLinejoin="miter" strokeLinecap="butt" strokeWidth={1} stroke="none" fillRule="nonzero" fill="#20c997">
                      <g transform="scale(8,8)">
                        <path d="M25,27l-9,-6.75l-9,6.75v-23h18z" />
                      </g>
                    </g>
                  </svg>
                </div>
                <p className="card-footer">30 Mins &nbsp; | &nbsp; 1 Serving</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyCheck;
