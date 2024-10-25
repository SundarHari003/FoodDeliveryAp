import { Trash2 } from 'lucide-react';
import React, { useState } from 'react';
import { FaApplePay, FaCheckCircle, FaMinus, FaPlus, FaPlusCircle } from 'react-icons/fa';
import { PiCurrencyInrLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import { MdKeyboardArrowDown, MdOutlineArrowDropDown, MdOutlineArrowDropUp, MdOutlineLocalOffer } from "react-icons/md";
const FoodCart = () => {
  const [Apply, setApply] = useState(false)
  const [selectPaymentMode, setSelectPaymentMode] = useState('')
  const [selectPAymentOptions, setSelectPAymentOption] = useState('')
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [selected, setSelected] = useState('');
  const isFormComplete = cardNumber && cardHolder && expiryDate && cvv;
  const handleRadioChange = (value) => {
    setSelected(value);
  };
  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Cheeseburger',
      image: 'https://via.placeholder.com/100',
      price: 44.00,
      quantity: 2,
      platform: 'Meal',
    },
    {
      id: 2,
      name: 'Grilled Chicken',
      image: 'https://via.placeholder.com/100',
      price: 249.99,
      quantity: 1,
      platform: 'Meal',
    },
    {
      id: 3,
      name: 'Caesar Salad',
      image: 'https://via.placeholder.com/100',
      price: 110.99,
      quantity: 1,
      platform: 'Salad',
    },
  ]);
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { id: 1, title: "Cart" },
    { id: 2, title: "Address" },
    { id: 3, title: "Payment" },
  ];

  const handleStepClick = (stepId) => {
    setCurrentStep(stepId);
  };
  const handlePaymentChange = (value) => {
    setSelectPaymentMode(prevState => prevState == value ? " " : value)
  }
  const handlePaymentOptionChange = (value) => {
    setSelectPAymentOption(prevState => prevState == value ? " " : value)
  }
  return (
    <div>
      <div>
        <div className="w-full flex flex-row justify-between items-center py-5">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex-1">
              <div
                className={`flex z-10 items-center justify-center w-8 h-8 sm:w-10 sm:h-10 mx-auto rounded-full cursor-pointer transition-colors duration-300 
          ${currentStep >= step.id ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}
                onClick={() => handleStepClick(step.id)}
              >
                {currentStep > step.id ? (
                  <FaCheckCircle className="text-white z-10" />
                ) : (
                  <span className="text-sm sm:text-base">{index + 1}</span>
                )}
              </div>
              <p
                className={`text-center mt-2 text-xs sm:text-sm ${currentStep >= step.id ? "text-orange-500 font-semibold" : "text-gray-500"
                  }`}
              >
                {step.title}
              </p>
              {index < steps.length - 1 && (
                <div
                  className={`absolute top-4 -z-10 left-[50%] w-full h-1 bg-gray-200 transition-colors duration-300 block ${currentStep > step.id ? "bg-orange-500" : ""
                    }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {
        currentStep == 1 ?
          <div className=' grid grid-cols-1 md:grid-cols-[66%,auto] items-start  gap-4 px-4'>
            <div className=' flex flex-col gap-4'>
              <div className='flex items-center justify-between p-3 border border-gray-200 rounded-md'>
                <div className='w-5/6'>
                  <span className='text-orange-400 font-medium'>Delivery to: Hari Sundar, 60001 </span>
                  <p className='break-words w-full text-xs italic'>
                    dajksdjkadhkdasdsaasdjdhjahdkjashdjkadhjdhjkahdjjkasdsadsadadasasjjdccmznbxcnzbcnmbnxvbnvbnxcvnv
                  </p>
                </div>
                <button className='font-medium text-orange-500'>Change</button>
              </div>
              <div className=' border border-gray-200 rounded-md '>
                {
                  cart?.map((item, index) => (
                    <div key={index} className={`${index != cart.length - 1 ? "border-b border-e-gray-200" : " "} relative flex items-center justify-between p-3`}>
                      <div className=' flex items-center gap-2'>
                        <img src={item.image} alt='food' className='w-[6rem] h-[6rem] rounded-md' />
                        <div className=' grid grid-cols-1 gap-2'>
                          <span className=' text-orange-600 font-medium text-lg'>{item?.name}</span>
                          <span className=' text-xl flex gap-1 items-center'><PiCurrencyInrLight className=' font-normal' />{item?.price}</span>
                          <span className=' text-gray-300 text-xs'>{item?.platform}</span>
                        </div>
                      </div>
                      <div className='flex items-end h-24'>
                        <div className=' flex items-center gap-2'>
                          <FaMinus className=' bg-gray-200 text-white p-1 rounded-lg' size={25} />
                          <span>0</span>
                          <FaPlus className=' bg-orange-600 text-white p-1 rounded-lg' size={25} />
                        </div>
                      </div>
                      <Trash2 color="#ff0000" strokeWidth={1} className=' absolute top-2 right-2 cursor-pointer' />
                    </div>
                  ))
                }
              </div>
            </div>
            <div className=' grid grid-cols-1'>
              <div className='border border-gray-200 rounded-md'>
                <div className='flex items-center justify-between p-3' onClick={() => setApply(!Apply)}>
                  <div className='flex items-center gap-1'>
                    <MdOutlineLocalOffer className='text-gray-500' />
                    <span className='font-medium'>Apply Coupon</span>
                  </div>
                  <div>
                    <MdKeyboardArrowDown />
                  </div>
                </div>
                <div
                  className={`${Apply ? 'h-auto p-3 border-t border-t-gray-200 opacity-100' : 'h-0 p-0 opacity-0'
                    } transition-all duration-300 overflow-hidden flex items-center justify-center gap-2`}
                >
                  {Apply && (
                    <>
                      <input
                        type='text'
                        className='border border-gray-200 rounded-md py-1 px-2'
                        placeholder='Enter Coupon'
                      />
                      <button className='text-white bg-orange-400 py-1 px-2 rounded-md'>Apply</button>
                    </>
                  )}
                </div>
              </div>
              <h1 className=' text-orange-500 text-xl font-normal py-3'>Order Summary</h1>
              <div className=' border border-gray-200 rounded-md'>
                <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                  <div>
                    <span>Cart Total</span>
                    <span className=' text-xs'>{`(Excl. of all taxes)`}</span>
                  </div>
                  <div className=' font-medium text-gray-700 flex items-center gap-1'>
                    <PiCurrencyInrLight size={17} />
                    <span className=' font-medium'>2316.30</span>
                  </div>
                </div>
                <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                  <span>GST</span>
                  <div className=' text-gray-700 flex items-center gap-1'>
                    <PiCurrencyInrLight size={17} />
                    <span className=' '>2316.30</span>
                  </div>
                </div>
                <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                  <span>Delivery Charges</span>
                  <div className=' font-medium text-gray-700 flex items-center gap-1'>
                    <PiCurrencyInrLight size={17} />
                    <span className=' font-medium'>2316.30</span>
                  </div>
                </div>
                <div className='  flex item-center justify-between p-3'>
                  <span className=' font-medium text-gray-700'>Total</span>
                  <div className=' font-medium text-gray-700 flex items-center gap-1'>
                    <PiCurrencyInrLight size={17} />
                    <span className=' font-medium'>2316.30</span>
                  </div>
                </div>
              </div>
              <button className=' bg-orange-400 px-2 py-1 text-white rounded-md my-3 w-2/4'>Place Order</button>
            </div>
          </div> :
          currentStep == 2 ?
            <div className=' grid grid-cols-1 md:grid-cols-[66%,auto] gap-4 px-4  md:pt-10'>
              <div className=' w-full md:h-full flex items-center justify-center'>
                <div className=' w-full md:w-2/4 md:border border-gray-200 rounded-md md:p-5 md:h-full '>
                  <span className=' w-full text-gray-600 font-medium text-sm md:p-3'>Delivery to</span>
                  <div className=' hidden w-full flex-col items-center justify-center gap-2 md:h-full  md:flex'>
                    <FaPlusCircle className='w-1/4 h-1/4 text-gray-400 rounded-full' />
                    <span className=' text-gray-400'>Add Address</span>
                  </div>
                  <button className=' rounded-md border border-orange-600 flex md:hidden p-3 items-center justify-center gap-2 w-full '>
                    <FaPlus className=' text-orange-600 rounded-full' />
                    <span className=' text-orange-600'>Add Address</span>
                  </button>
                </div>
              </div>
              <div>
                <h1 className=' text-orange-500 text-xl font-normal py-3'>Order Summary</h1>
                <div className=' border border-gray-200 rounded-md'>
                  <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                    <div>
                      <span>Cart Total</span>
                      <span className=' text-xs'>{`(Excl. of all taxes)`}</span>
                    </div>
                    <div className=' font-medium text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' font-medium'>2316.30</span>
                    </div>
                  </div>
                  <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                    <span>GST</span>
                    <div className=' text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' '>2316.30</span>
                    </div>
                  </div>
                  <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                    <span>Delivery Charges</span>
                    <div className=' font-medium text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' font-medium'>2316.30</span>
                    </div>
                  </div>
                  <div className='  flex item-center justify-between p-3'>
                    <span className=' font-medium text-gray-700'>Total</span>
                    <div className=' font-medium text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' font-medium'>2316.30</span>
                    </div>
                  </div>
                </div>
                <button className=' bg-orange-400 px-2 py-1 text-white rounded-md my-3 w-full md:w-2/4'>Continue to Payment</button>
              </div>
            </div> :
            <div className=' px-4 grid grid-cols-1 md:grid-cols-[66%,auto] gap-4'>
              <div className=' flex flex-col gap-4 '>
                <div className='flex items-center justify-between p-3 border border-gray-200 rounded-md h-fit'>
                  <div className='w-5/6'>
                    <span className='text-orange-400 font-medium'>Delivery to: Hari Sundar, 60001 </span>
                    <p className='break-words w-full text-xs italic'>
                      dajksdjkadhkdasdsaasdjdhjahdkjashdjkadhjdhjkahdjjkasdsadsadadasasjjdccmznbxcnzbcnmbnxvbnvbnxcvnv
                    </p>
                  </div>
                  <button className='font-medium text-orange-500'>Change</button>
                </div>
                <div className=''>
                  <h2 className=' text-orange-500  font-medium pb-3'>Payment Option</h2>
                  <div className=' border border-gray-200 rounded-md mb-3'>
                    <div className=' border-b border-b-gray-200 p-3' onClick={() => handlePaymentChange("Cash")}>
                      <div className=' flex items-center  justify-between' >
                        <span className={`${selectPaymentMode == "Cash" ? "text-orange-400" : ""}`}>Cash On Delivery</span>
                        <input
                          type='radio'
                          name='but'
                          checked={selectPaymentMode == "Cash"}
                          className='w-4 h-4'
                        />
                      </div>
                    </div>
                    <div className=' border-b border-b-gray-200 p-3 '>
                      <div className='flex items-center justify-between' onClick={() => handlePaymentChange("UPI")} >
                        <span className={`${selectPaymentMode == "UPI" ? "text-orange-400" : ""}`}>Pay with UPI APP</span>
                        <MdOutlineArrowDropDown className={`${selectPaymentMode == "UPI" ? "text-orange-400 rotate-180" : " rotate-0"} transition-all duration-150`} />
                      </div>
                      <div
                        className={`${selectPaymentMode == "UPI" ? 'h-auto p-3 px-5 opacity-100' : 'h-0 p-0 opacity-0'
                          } transition-all duration-300 overflow-hidden gap-2`}
                      >
                        {selectPaymentMode == "UPI" && (
                          <div className=' grid grid-cols-1 gap-3 '>
                            <div className=' flex items-center justify-between p-3 w-full' onClick={() => handlePaymentOptionChange("GPAY")}>
                              <div className=' flex items-center gap-2'>
                                <FcGoogle />
                                <span className=' text-gray-500 font-sm font-medium'>Google Pay</span>
                              </div>
                              <input
                                type="radio"
                                className=' w-4 h-4'
                                checked={selectPAymentOptions == "GPAY"}
                              />
                            </div>
                            <div className=' flex items-center justify-between p-3' onClick={() => handlePaymentOptionChange("PAYTM")}>
                              <div className=' flex items-center gap-2'>
                                <div className=' flex items-center'>
                                  <span className=' text-sky-500 text-xs font-semibold font-mono'>PAY</span>
                                  <span className='  text-xs font-semibold font-mono'>TM</span>
                                </div>
                                <span className=' text-gray-500 font-sm font-medium'>Paytm</span>
                              </div>
                              <input
                                type="radio"
                                className=' w-4 h-4'
                                checked={selectPAymentOptions == "PAYTM"}
                              />
                            </div>
                            <div className=' flex items-center justify-between p-3'>
                              <div className=' flex items-center gap-2' onClick={() => handlePaymentOptionChange("APPLEPAY")}>
                                <FaApplePay />
                                <span className=' text-gray-500 font-sm font-medium'>Apple Pay</span>
                              </div>
                              <input
                                type="radio"
                                className=' w-4 h-4'
                                checked={selectPAymentOptions == "APPLEPAY"}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className=' border-b border-b-gray-200 p-3' >
                      <div className=' flex items-center  justify-between' onClick={() => handlePaymentChange("card")}>
                        <span className={`${selectPaymentMode == "card" ? "text-orange-400" : ""}`}>Credit/Debit Card</span>
                        <MdOutlineArrowDropDown className={`${selectPaymentMode == "card" ? "text-orange-400 rotate-180" : " rotate-0"} transition-all duration-150`} />
                      </div>
                      <div
                        className={`${selectPaymentMode == "card" ? 'h-auto p-3 px-5 opacity-100' : 'h-0 p-0 opacity-0'
                          } transition-all duration-300 overflow-hidden gap-2`}
                      >
                        {selectPaymentMode == "card" && (
                          <div className="flex flex-col items-center p-4 bg-gray-100">
                            <div className="w-full max-w-sm">
                              {/* Card Number Input */}
                              <input
                                type="text"
                                placeholder="Card Number"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-orange-500"
                              />

                              {/* Card Holder Name Input */}
                              <input
                                type="text"
                                placeholder="Card Holder Name"
                                value={cardHolder}
                                onChange={(e) => setCardHolder(e.target.value)}
                                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-orange-500"
                              />

                              {/* Expiry Date Input */}
                              <input
                                type="text"
                                placeholder="Expiry Date (MM/YY)"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-orange-500"
                              />

                              {/* CVV Input */}
                              <input
                                type="text"
                                placeholder="CVV"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="w-full p-2 mb-4 border rounded-lg focus:outline-none focus:border-orange-500"
                              />
                            </div>

                            {/* Submit Button */}
                            {isFormComplete && (
                              <button className="mt-4 px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
                                Submit
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className='  p-3' >
                      <div className=' flex items-center  justify-between' onClick={() => handlePaymentChange("NetBanking")} >
                        <span className={`${selectPaymentMode == "NetBanking" ? "text-orange-400" : ""}`}>Net Banking</span>
                        <MdOutlineArrowDropDown className={`${selectPaymentMode == "NetBanking" ? "text-orange-400 rotate-180" : " rotate-0"} transition-all duration-150`} />
                      </div>
                      <div
                        className={`${selectPaymentMode == "NetBanking" ? 'h-auto p-3 px-5 opacity-100' : 'h-0 p-0 opacity-0'
                          } transition-all duration-300 overflow-hidden gap-2`}
                      >
                        {selectPaymentMode == "NetBanking" && (
                          <div className=' grid grid-cols-1 gap-3 '>
                            <div className=' flex items-center justify-between p-3 w-full' onClick={() => handlePaymentOptionChange("Indian")}>
                              <div className=' flex items-center gap-2'>
                                <span className=' text-gray-500 font-sm font-medium'>Indian Overseas Bank</span>
                              </div>
                              <input
                                type="radio"
                                className=' w-4 h-4'
                                checked={selectPAymentOptions == "Indian"}
                              />
                            </div>
                            <div className=' flex items-center justify-between p-3' onClick={() => handlePaymentOptionChange("Axis")}>
                              <div className=' flex items-center gap-2'>
                                <span className=' text-gray-500 font-sm font-medium'>Axis Bank</span>
                              </div>
                              <input
                                type="radio"
                                className=' w-4 h-4'
                                checked={selectPAymentOptions == "Axis"}
                              />
                            </div>
                            <div className=' flex items-center justify-between p-3'>
                              <div className=' flex items-center gap-2' onClick={() => handlePaymentOptionChange("State")}>
                                <span className=' text-gray-500 font-sm font-medium'>State Bank</span>
                              </div>
                              <input
                                type="radio"
                                className=' w-4 h-4'
                                checked={selectPAymentOptions == "State"}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h1 className=' text-orange-500 text-xl font-normal py-3'>Order Summary</h1>
                <div className=' border border-gray-200 rounded-md'>
                  <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                    <div>
                      <span>Cart Total</span>
                      <span className=' text-xs'>{`(Excl. of all taxes)`}</span>
                    </div>
                    <div className=' font-medium text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' font-medium'>2316.30</span>
                    </div>
                  </div>
                  <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                    <span>GST</span>
                    <div className=' text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' '>2316.30</span>
                    </div>
                  </div>
                  <div className=' border-b flex item-center justify-between p-3 border-t-gray-200'>
                    <span>Delivery Charges</span>
                    <div className=' font-medium text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' font-medium'>2316.30</span>
                    </div>
                  </div>
                  <div className='  flex item-center justify-between p-3'>
                    <span className=' font-medium text-gray-700'>Total</span>
                    <div className=' font-medium text-gray-700 flex items-center gap-1'>
                      <PiCurrencyInrLight size={17} />
                      <span className=' font-medium'>2316.30</span>
                    </div>
                  </div>
                </div>
                <button className=' bg-orange-400 px-2 py-1 text-white rounded-md my-3 w-full md:w-2/4'>Conform Order</button>
              </div>
            </div>
      }
    </div>
  );
};

export default FoodCart;
