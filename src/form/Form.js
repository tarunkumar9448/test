import SuccessImg from '../image/card.jpg';
import React, { Component } from 'react';
import InputMask from 'react-input-mask';
import './Form.css';


class Form extends Component {
 render(){ 
     return (
      <div className="formSection">
        <div className="container d-flex vh-100">
            <div className="center-card m-auto bg-white rounded">
                <h4 className="m-4 m-0"><strong>Checkout</strong></h4>
                <ul className="nav mb-3 border border-start-0 border-end-0 px-4 d-flex justify-content-between" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="px-0 nav-link d-flex align-items-center active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true"><object className="me-2" data="https://image.flaticon.com/icons/svg/126/126486.svg" width="15" height="15"></object>DETAILS</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="px-0 nav-link d-flex align-items-center" id="pills-profile-tab" data-bs-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false"><object className="me-2" data="https://image.flaticon.com/icons/svg/633/633611.svg" width="15" height="15"></object>PAYMENT</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="px-0 nav-link d-flex align-items-center" id="pills-contact-tab" data-bs-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false"><object className="me-2" data="https://image.flaticon.com/icons/svg/447/447147.svg" width="15" height="15"></object>SUCCESS</a>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active px-4" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <h6 className="text-muted">Fill this form with your identity.</h6>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="email" className="form-control" id="name" placeholder="" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="" />
                            <small>The download link be sent to this email</small>
                        </div>
                        <div className="mb-4">
                            <button type="button" className="btn btn-info w-100">Continue</button>
                        </div>
                    </div>
                    <div className="tab-pane fade px-4" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <h6 className="text-muted">Fill this form with your credit card details.</h6>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-sm-8">
                                    <label htmlFor="cardNumber" className="form-label">Card Number</label>
                                    <InputMask {...this.props} mask="9999-9999-9999-9999" maskChar=" " className="form-control" id="cardNumber"/>
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="expire" className="form-label">Expire</label>
                                    <InputMask {...this.props} mask="99/99" maskChar=" " className="form-control"  id="expire"/>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <div className="row">
                                <div className="col-sm-8">
                                    <label htmlFor="name" className="form-label">Name on Card</label>
                                    <input type="email" className="form-control" id="name" placeholder="" />
                                </div>
                                <div className="col-sm-4">
                                    <label htmlFor="cvv" className="form-label">Code</label>
                                    <InputMask {...this.props} mask="999" maskChar=" " className="form-control"  id="cvv"/>
                                </div>
                            </div>
                        </div>
                        <p className="my-3 d-flex align-items-center"><object className="me-1" data="https://image.flaticon.com/icons/svg/481/481195.svg" width="15" height="15"></object>Secure Payment</p>
                        <div className="mb-3">
                            <button type="button" className="btn btn-info w-100">Continue</button>
                        </div>
                    </div>
                    <div className="tab-pane fade text-center px-4" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <figure>
                            <img src={SuccessImg} alt="card" />
                        </figure>
                        <h5 className="text-muted">Payment Successful</h5>
                        <p className="text-secondary mb-4">Your Payment was successful. You can now download PDF file of your payment from following link. </p>
                        <div className="mb-3">
                            <button type="button" className="btn btn-info w-100">DownloadPDF</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
          }
}

export default Form;
