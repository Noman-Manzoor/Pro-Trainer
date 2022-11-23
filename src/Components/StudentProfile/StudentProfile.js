import React from 'react'
import './StudentProfile.css'

export default function StudentProfile() {
    return (
        <div className='container-fluid bgColor2'>
            <div className='container py-5 '>
                <div className='row px-3 py-4  profileCard' >
                    <div className='left col-md-8' >
                        <h3><div class=" icons_styling2 text-white "> <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                        </svg></div> Student Profile</h3>

                        <div className='row my-5'>
                            <div className='col-md-6 mb-3' >
                                <div>
                                    <h6 className='mb-0 pb-1'>Full Name</h6>
                                    <input className=' bgColor3' type="text" name="" value="" style={{ outline: "none", border: "none", borderBottom: "1px solid grey", width: "94%" }} />
                                </div>
                            </div>
                            <div className='col-md-6' >
                                <div>
                                    <h6 className='mb-0 pb-1'>Qualification</h6>
                                    <input className=' bgColor3' type="text" name="" value="" style={{ outline: "none", border: "none", borderBottom: "1px solid grey", width: "94%" }} />
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5 mb-3'>
                            <div className='col-md-6 mb-3' >
                                <div>
                                    <h6 className='mb-0 pb-1'>Mobile Number <a href="#" className='text-decoration-none'>OTP Validation</a></h6>
                                    <input className=' bgColor3' type="text" name="" placeholder='+923176866425' value="" style={{ outline: "none", border: "none", borderBottom: "1px solid grey", width: "94%" }} />
                                </div>
                            </div>
                            <div className='col-md-6' >
                                <div>

                                    <div className='d-flex justify-content-center align-items-center p-1' style={{ width: "94%", border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                        <div className='yes py-2 d-flex bg text-white mx-1' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div>
                                                Fresher

                                            </div>
                                        </div>
                                        <div className='yes py-2 d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div>
                                                Experienced

                                            </div>
                                        </div>



                                    </div>


                                </div>
                            </div>
                        </div>
                        <div className='row questionsSection' >
                            <div className='col-md-12 text-white py-3 heading' style={{ backgroundColor: "#796ebd" }}>
                                <h4 className='text-center'><div class=" icons_styling2 text-white " > <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                </svg></div> Do you have any specific goal?</h4>
                            </div>

                            <div className='profileQuestionBgColor'>
                                <div >
                                    <div className='d-flex justify-content-between flex-wrap align-items-center pt-3' >
                                        <div className='d-flex'>
                                            <div className='mt-3  mx-2 questionDot'></div>
                                            <p className='mt-2'>  Prepare for a new job(fresher)</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                            <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div style={{ paddingRight: "12px" }}>
                                                    Yes

                                                </div>
                                            </div>
                                            <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div>
                                                    No

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap align-items-center pt-3' >
                                        <div className='d-flex'>
                                            <div className='mt-3  mx-2 questionDot'></div>
                                            <p className='mt-2'>  Prepare for a new job(fresher)</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                            <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div style={{ paddingRight: "12px" }}>
                                                    Yes

                                                </div>
                                            </div>
                                            <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div>
                                                    No

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap align-items-center pt-3' >
                                        <div className='d-flex'>
                                            <div className='mt-3  mx-2 questionDot'></div>
                                            <p className='mt-2'>  Prepare for a new job(fresher)</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                            <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div style={{ paddingRight: "12px" }}>
                                                    Yes

                                                </div>
                                            </div>
                                            <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div>
                                                    No

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap align-items-center pt-3' >
                                        <div className='d-flex'>
                                            <div className='mt-3  mx-2 questionDot'></div>
                                            <p className='mt-2'>  Prepare for a new job(fresher)</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                            <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div style={{ paddingRight: "12px" }}>
                                                    Yes

                                                </div>
                                            </div>
                                            <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div>
                                                    No

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                    <div className='d-flex justify-content-between flex-wrap align-items-center pt-3 pb-4' >
                                        <div className='d-flex'>
                                            <div className='mt-3  mx-2 questionDot'></div>
                                            <p className='mt-2'>  Prepare for a new job(fresher)</p>
                                        </div>
                                        <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                            <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div style={{ paddingRight: "12px" }}>
                                                    Yes

                                                </div>
                                            </div>
                                            <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div>
                                                    No

                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>
                    </div>
                    <div className='right col-md-4 px-0 pt-3' >
                        <div>
                            <div className='d-flex justify-content-between'>
                                <h6>Profile completed(Good)</h6>
                                <h6>75%</h6>

                            </div>
                            <div className='completionBar' >
                                <div className='primaryColor2 w-75 text-center'><span style={{ visibility: "hidden" }}>75%</span></div>
                            </div>
                        </div>

                        <div className='InterestCard text-white py-3 my-4 px-3'>
                            <h5 className='px-2'>Learning  Interest Area: </h5>
                            <div className='d-flex justify-content-around align-items-center'>
                                <input className=' InterestCardbg text-white' type="text" name="" placeholder='' style={{ outline: "none", border: "none", borderBottom: "1px solid #ffffff", width: "70%" }} />
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>
                                <div className='addBtn px-2 py-1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle-fill " viewBox="0 0 16 16">
                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" style={{ color: "#796ebd" }} />
                                    </svg>
                                </div>


                            </div>

                            <div className='px-2 d-flex align-items-center mt-4'>
                                <p className='pt-2 '>Python</p>
                                <div className=' px-1 mx-3 ' style={{ borderRadius: "30px", backgroundColor: "#796ebd", border: "2px solid white" }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x pb-1" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                            <div className='px-2 d-flex align-items-center' >
                                <p className='pt-2 '>NodeJs</p>
                                <div className=' px-1 mx-3 ' style={{ borderRadius: "30px", backgroundColor: "#796ebd", border: "2px solid white" }}>

                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x pb-1" viewBox="0 0 16 16">
                                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className='InterestCard text-white py-3 mt-5'>
                            <div className=' d-flex justify-content-center rightSideQuestionDiv px-1 mx-0 py-4'>
                                <div className=' my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3 ' style={{ backgroundColor: "#ffffff", color: "black", borderRadius: "10px"}}>
                                    <div className='px-2 py-2' style={{ backgroundColor: "#e99594", borderRadius: "30px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" style={{ color: "white" }} />
                                        </svg>
                                    </div>
                                    <p className='text-center my-2 px-2'>
                                        Do You have Laptop/PC for Learning?
                                    </p>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                            <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div style={{ paddingRight: "12px" }}>
                                                    Yes

                                                </div>
                                            </div>
                                            <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div>
                                                    No

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                                <div className=' my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3' style={{ backgroundColor: "#ffffff", color: "black", borderRadius: "10px" }}>
                                    <div className='px-2 py-2' style={{ backgroundColor: "#e99594", borderRadius: "30px" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                            <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" style={{ color: "white" }} />
                                        </svg>
                                    </div>
                                    <p className='text-center my-2 px-2'>
                                        Do You have Laptop/PC for Learning?
                                    </p>
                                    <div>
                                        <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                            <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div style={{ paddingRight: "12px" }}>
                                                    Yes

                                                </div>
                                            </div>
                                            <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                                <div className='mt-2 mx-2 questionDot2'></div>
                                                <div>
                                                    No

                                                </div>
                                            </div>



                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row mt-4 mb-5 px-0 mx-0' style={{ backgroundColor: "#796ebd", borderRadius: "10px" }} >
                        <div className='col-md-3  d-flex flex-column justify-content-center align-items-center py-3' style={{ backgroundColor: "#cbc6e4", borderRadius: "10px" }}>
                            <div className='col-md-12 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3' style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                                <div className='px-2 py-2' style={{ backgroundColor: "#e99594", borderRadius: "30px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" style={{ color: "white" }} />
                                    </svg>
                                </div>
                                <p className='text-center my-2 px-2'>
                                    Do You have Laptop/PC for Learning?
                                </p>
                                <div>
                                    <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                        <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div style={{ paddingRight: "12px" }}>
                                                Yes

                                            </div>
                                        </div>
                                        <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div>
                                                No

                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='col-md-9 rightSideDiv d-flex justify-content-center  align-items-center py-4' style={{ backgroundColor: "#8076cf", borderRadius: "10px" }} >
                            <div className='col-md-4 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3' style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                                <div className='px-2 py-2' style={{ backgroundColor: "#e99594", borderRadius: "30px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" style={{ color: "white" }} />
                                    </svg>
                                </div>
                                <p className='text-center my-2 px-2'>
                                    Do You have Laptop/PC for Learning?
                                </p>
                                <div>
                                    <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                        <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div style={{ paddingRight: "12px" }}>
                                                Yes

                                            </div>
                                        </div>
                                        <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div>
                                                No

                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </div>
                            <div className='col-md-4 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3' style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                                <div className='px-2 py-2' style={{ backgroundColor: "#e99594", borderRadius: "30px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" style={{ color: "white" }} />
                                    </svg>
                                </div>
                                <p className='text-center my-2 px-2'>
                                    Do You have Laptop/PC for Learning?
                                </p>
                                <div>
                                    <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                        <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div style={{ paddingRight: "12px" }}>
                                                Yes

                                            </div>
                                        </div>
                                        <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div>
                                                No

                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </div>
                            <div className='col-md-4 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3' style={{ backgroundColor: "#ffffff", borderRadius: "10px" }}>
                                <div className='px-2 py-2' style={{ backgroundColor: "#e99594", borderRadius: "30px" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-laptop" viewBox="0 0 16 16">
                                        <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" style={{ color: "white" }} />
                                    </svg>
                                </div>
                                <p className='text-center my-2 px-2'>
                                    Do You have Laptop/PC for Learning?
                                </p>
                                <div>
                                    <div className='d-flex justify-content-center align-items-center px-1 py-1' style={{ border: "2px solid #a29ddf", borderRadius: "34px" }} >
                                        <div className='yes d-flex bg text-white mx-1 ' style={{ width: "50%", borderRadius: "34px", backgroundColor: "#625aca", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div style={{ paddingRight: "12px" }}>
                                                Yes

                                            </div>
                                        </div>
                                        <div className='yes  d-flex bg text-primary mx-1' style={{ width: "50%", borderRadius: "34px", cursor: "pointer" }} >
                                            <div className='mt-2 mx-2 questionDot2'></div>
                                            <div>
                                                No

                                            </div>
                                        </div>



                                    </div>
                                </div>

                            </div>

                        </div>



                    </div>

                    <div className='d-flex justify-content-center align-items-center'>
                        <button type="button" class="actionBtn1  mx-2 text-white">Submit</button>
                        <button type="button" class="actionBtn2  mx-2">Reset</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
