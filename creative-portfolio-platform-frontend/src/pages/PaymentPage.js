import React from 'react';
import Navbar from '../components/shared/Navbar';
import Footer from '../components/layout/Footer';

const PaymentPage = () => {
  return (
    <>
      <Navbar />
      <div className="payment-page">
        <h1>Payment</h1>
        <p>Process payments securely.</p>
        {/* Payment form or integration will go here */}
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;
