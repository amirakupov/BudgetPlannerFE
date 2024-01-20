import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

const Footer = () => {
    return (
        <footer className="footer py-5" style={{ backgroundColor: '#fafaf2', color: '#92b359' }}>
            <div className="container-lg d-flex flex-column" style={{ minHeight: '50vh' }}>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <h5>About Us</h5>
                        <p style={{ fontSize: '14px' }}>We help you maintain your budget </p>
                        <p style={{ fontSize: '14px' }}>and properly distribute your finances!</p>
                    </div>
                    <div className="col-md-4 text-end">
                        <h5>Contact Us</h5>
                        <address>
                            <p style={{ fontSize: '14px' }}>accountable@mail.com</p>
                            <p style={{ fontSize: '14px' }}>+43 123 1234 33</p>
                        </address>
                    </div>
                    <div className="col-md-4 text-end">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li><a href="#"><img src="/meta.png" alt="Meta" style={{ width: '30px', height: '30px' }} /></a></li>
                            <li><a href="#"><img src="/instagram.png" alt="Instagram" style={{ width: '30px', height: '30px' }} /></a></li>
                        </ul>
                    </div>
                </div>

                <div className="row mt-auto">
                    <div className="col-12 text-center">
                        <p style={{ fontSize: '12px' }} className="mb-4">&copy; 2024 Accountable</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;




