import { useState } from "react";
import Navbar from "../components/Navbar";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;
    setShippingAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = () => {
    const orderDetails = {
      shippingAddress,
      paymentMethod,
    };
    console.log("Order Submitted:", orderDetails);
    // Proceed with order submission logic here
  };

  return (
    <>
      <Navbar />
      <div className="m-5 mt-32">
        <h1 className="font-heading text-4xl font-bold mb-9 ml-20">Checkout</h1>
        <div className="flex justify-center mb-10">
          <div
            className={`w-4 h-4 rounded-full mx-2 ${
              currentStep === 1 ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
          <div
            className={`w-4 h-4 rounded-full mx-2 ${
              currentStep === 2 ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        </div>
        <div className="flex flex-col items-center rounded-3xl shadow-md w-fit m-auto p-10 bg-stone-50">
          {currentStep === 1 && (
            <div className="w-full max-w-lg">
              <h2 className="text-2xl font-semibold mb-6">Enter Shipping Address</h2>
              <form className="bg-stone-50 flex flex-col">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={shippingAddress.name}
                    onChange={handleShippingAddressChange}
                    placeholder="Full Name"
                    className="input-field bg-stone-50 border-b-2 border-stone-400 px-2 h-12 mx-4 my-2"
                    required
                  />
                  <input
                    type="text"
                    name="street"
                    value={shippingAddress.street}
                    onChange={handleShippingAddressChange}
                    placeholder="Street Address"
                    className="input-field bg-stone-50 border-b-2 border-stone-400 px-2 h-12 mx-4 my-2"
                    required
                  />
                  <input
                    type="text"
                    name="city"
                    value={shippingAddress.city}
                    onChange={handleShippingAddressChange}
                    placeholder="City"
                    className="input-field bg-stone-50 border-b-2 border-stone-400 px-2 h-12 mx-4 my-2"
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    value={shippingAddress.state}
                    onChange={handleShippingAddressChange}
                    placeholder="State"
                    className="input-field bg-stone-50 border-b-2 border-stone-400 px-2 h-12 mx-4 my-2"
                    required
                  />
                  <input
                    type="text"
                    name="postalCode"
                    value={shippingAddress.postalCode}
                    onChange={handleShippingAddressChange}
                    placeholder="Postal Code"
                    className="input-field bg-stone-50 border-b-2 border-stone-400 px-2 h-12 mx-4 my-2"
                    required
                  />
                  <input
                    type="text"
                    name="country"
                    value={shippingAddress.country}
                    onChange={handleShippingAddressChange}
                    placeholder="Country"
                    className="input-field bg-stone-50 border-b-2 border-stone-400 px-2 h-12 mx-4 my-2"
                    required
                  />
                </div>
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="btn btn-primary w-fit ml-4 px-6 py-2 bg-slate-800 rounded-lg text-white mt-14"
                >
                 Proceed to payment method options
                </button>
              </form>
            </div>
          )}
          {currentStep === 2 && (
            <div className="w-96 max-w-lg h-52 ">
              <h2 className="text-2xl font-semibold mb-6">Payment Method</h2>
              <form>
                <select
                  value={paymentMethod}
                  onChange={handlePaymentMethodChange}
                  className="input-field bg-stone-50 border-b-2 border-stone-400"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Debit Card">Debit Card</option>
                  <option value="PayPal">PayPal</option>
                  <option value="UPI">UPI</option>
                </select>
                <div className="flex justify-between mt-24">
                  <button
                    type="button"
                    onClick={handlePreviousStep}
                    className="btn btn-secondary border-2 border-stone-200 bg-stone-200 px-4 py-2 text-stone-800 rounded-lg"
                  >
                    Back to shipping address 
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="btn btn-secondary border-2 bg-blue-700 px-4 py-2 text-white rounded-lg"
                  >
                    Submit Order
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Checkout;
