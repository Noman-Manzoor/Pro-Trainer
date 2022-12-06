import React, { useEffect, useState } from 'react';
import PhoneInput, { formatPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Select from 'react-select';
import { PulseLoader, ScaleLoader } from 'react-spinners';
import api from '../../utils/api';
import { errorToast, successToast } from '../../utils/toast';
import { fullNameValidation } from '../../utils/validation';
import './StudentProfile.css';
import Switch from './Switch';

const initialState = {
  fullName: '',
  qualification: '',
  mobileNumber: '',
  isVerified: '',
  experience: '',
  learningInterestArea: [],
  newJob: '',
  jobSwitch: '',
  switchTechnology: '',
  betterHike: '',
  upSkilling: '',
  haveLaptop: '',
  haveBroadband: '',
  notification: '',
  newGroup: '',
  trainingRequirement: '',
  learningNewLetter: '',
};

export default function StudentProfile() {
  const [student, setStudent] = useState(initialState);
  const [loading, setLoading] = useState({
    opt: false,
    submit: false,
  });
  const [err, setErr] = useState(initialState);

  const [code, setCode] = useState({
    status: false,
    otp: '',
  });

  const onClickHandler = () => {
    if (loading.submit) {
      return;
    }
    setLoading({
      ...loading,
      submit: true,
    });

    api
      .post('student/', student)
      .then((res) => {
        setLoading({
          ...loading,
          submit: false,
        });
        successToast(res.data?.data.message);
      })
      .catch((err) => {
        setLoading({
          ...loading,
          submit: false,
        });
        errorToast(err?.response?.data.message);
      });
  };
  const [category, setCategory] = useState([]);

  useEffect(() => {
    api.get('student/category').then((res) => {
      const { data } = res;
      setCategory(
        data.data.map((item, index) => ({
          value: item._id,
          label: item.name,
        }))
      );
    });
  }, []);

  const onVerificationCodeSend = () => {
    setLoading({
      ...loading,
      opt: true,
    });
    api
      .post('student/verify', {
        mobileNumber: student.mobileNumber,
      })
      .then((res) => {
        setLoading({
          ...loading,
          opt: false,
        });
        successToast(res.data?.data.message);
        setCode({
          ...code,
          status: true,
        });
      })
      .catch((err) => {
        setLoading({
          ...loading,
          opt: false,
        });
        errorToast(err?.response?.data.message);
      });
  };
  const onVerifyCode = () => {
    setLoading({
      ...loading,
      opt: true,
    });
    api
      .post('student/verify/code', {
        mobileNumber: student.mobileNumber,
        code: code.otp,
      })
      .then((res) => {
        setLoading({
          ...loading,
          opt: false,
        });
        successToast(res.data?.data.message);
        setStudent({
          ...student,
          isVerified: res.data.data.status,
        });
        setCode({
          status: false,
          otp: '',
        });
      })
      .catch((err) => {
        setLoading({
          ...loading,
          opt: false,
        });
        console.log(err);
        errorToast(err?.response?.data.message);
      });
  };

  return (
    <div className='container-fluid bgColor2'>
      <div className='container py-5 '>
        <div className='row px-3 py-4  profileCard'>
          <div className='left col-md-8'>
            <h3>
              <div class=' icons_styling2 text-white '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  fill='currentColor'
                  class='bi bi-house'
                  viewBox='0 0 16 16'
                >
                  <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z' />
                </svg>
              </div>{' '}
              Student Profile
            </h3>

            <div className='row my-5'>
              <div className='col-md-6 mb-3'>
                <div>
                  <h6 className='mb-0 pb-1'>Full Name</h6>
                  <input
                    className=' bgColor3'
                    type='text'
                    style={{
                      outline: 'none',
                      border: 'none',
                      borderBottom: '1px solid grey',
                      width: '94%',
                    }}
                    value={student.fullName}
                    onChange={(e) => {
                      setErr({
                        ...err,
                        fullName: fullNameValidation(e.target.value)
                          ? ''
                          : 'Invalid full name',
                      });
                      setStudent({
                        ...student,
                        fullName: e.target.value,
                      });
                    }}
                  />{' '}
                  <span style={{ fontSize: '12px', color: 'red' }}>
                    {err.fullName}
                  </span>
                </div>
              </div>
              <div className='col-md-6'>
                <div>
                  <h6 className='mb-0 pb-1'>Qualification</h6>
                  <input
                    className=' bgColor3'
                    type='text'
                    name=''
                    style={{
                      outline: 'none',
                      border: 'none',
                      borderBottom: '1px solid grey',
                      width: '94%',
                    }}
                    value={student.qualification}
                    onChange={(e) => {
                      setErr({
                        ...err,
                        qualification:
                          e.target.value !== ''
                            ? ''
                            : 'Qualification cant be empty',
                      });
                      setStudent({
                        ...student,
                        qualification: e.target.value,
                      });
                    }}
                  />
                </div>
                <span style={{ fontSize: '12px', color: 'red' }}>
                  {err.qualification}
                </span>
              </div>
            </div>

            <div className='row mb-3'>
              <div className='col-md-6 mb-3'>
                <div>
                  <h6 className='mb-0 pb-1'>
                    Mobile Number{' '}
                    {student.isVerified ? (
                      <span
                        style={{
                          cursor: 'pointer',
                          color: '#0d6efd',
                        }}
                      >
                        Verified
                      </span>
                    ) : code.status ? (
                      <span
                        style={{
                          cursor: 'pointer',
                          color: '#0d6efd',
                        }}
                        onClick={onVerifyCode}
                        className='text-decoration-none'
                      >
                        Verify Code
                      </span>
                    ) : (
                      <span
                        style={{
                          cursor: 'pointer',
                          color: '#0d6efd',
                        }}
                        onClick={onVerificationCodeSend}
                        className='text-decoration-none'
                      >
                        OTP Validation{' '}
                        {loading.opt && <PulseLoader color='#36d7b7' />}
                      </span>
                    )}
                  </h6>
                  {code.status ? (
                    <input
                      className=' bgColor3'
                      type='text'
                      name=''
                      placeholder='****'
                      style={{
                        outline: 'none',
                        border: 'none',
                        borderBottom: '1px solid grey',
                        width: '94%',
                      }}
                      value={code.otp}
                      onChange={(e) => {
                        setCode({
                          ...code,
                          otp: e.target.value,
                        });
                      }}
                    />
                  ) : (
                    <PhoneInput
                      placeholder='Enter phone number'
                      value={student.mobileNumber}
                      onChange={(e) => {
                        if (student.isVerified) {
                          return;
                        }
                        setErr({
                          ...err,
                          mobileNumber: formatPhoneNumber(e)
                            ? ''
                            : 'Invalid Format',
                        });
                        setStudent({
                          ...student,
                          mobileNumber: e,
                        });
                      }}
                      className='phoneNumberInput'
                      style={{
                        outline: 'none',
                        border: 'none',
                        borderBottom: '1px solid grey',
                        width: '94%',
                      }}
                    />

                    // <input
                    //   className=' bgColor3'
                    //   type='number'
                    //   name=''
                    //   placeholder='+923176866425'
                    //   style={{
                    //     outline: 'none',
                    //     border: 'none',
                    //     borderBottom: '1px solid grey',
                    //     width: '94%',
                    //   }}
                    //   value={student.mobileNumber}
                    //   onChange={(e) => {
                    //     setErr({
                    //       ...err,
                    //       mobileNumber: phoneValidation(e.target.value)
                    //         ? ''
                    //         : 'Invalid Format',
                    //     });
                    //     setStudent({
                    //       ...student,
                    //       mobileNumber: e.target.value,
                    //     });
                    //   }}
                    // />
                  )}
                  <span style={{ fontSize: '12px', color: 'red' }}>
                    {err.mobileNumber}
                  </span>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'end',
                }}
                className='col-md-6'
              >
                <div className='me-3'>
                  <Switch
                    yesTitle='fresher'
                    noTitle='experienced'
                    setValue={setStudent}
                    value={student}
                    valueKey={'experience'}
                    dotColor={'#ece8ff'}
                  />
                </div>
              </div>
            </div>
            <div className='row questionsSection'>
              <div
                className='col-md-12 text-white py-3 heading'
                style={{ backgroundColor: '#796ebd' }}
              >
                <h4 className='text-center'>
                  <div class=' icons_styling2 text-white '>
                    {' '}
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='25'
                      height='25'
                      fill='currentColor'
                      class='bi bi-house'
                      viewBox='0 0 16 16'
                    >
                      <path d='M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z' />
                    </svg>
                  </div>{' '}
                  Do you have any specific goal?
                </h4>
              </div>

              <div className='profileQuestionBgColor'>
                <div>
                  <div className='d-flex justify-content-between flex-wrap align-items-center pt-3'>
                    <div className='d-flex'>
                      <div className='mt-3  mx-2 questionDot'></div>
                      <p className='mt-2'> Prepare for a new job(fresher)</p>
                    </div>
                    <Switch
                      yesTitle='yes'
                      noTitle='no'
                      setValue={setStudent}
                      value={student}
                      valueKey={'newJob'}
                      padding={'3px 5px'}
                    />
                  </div>
                  <div className='d-flex justify-content-between flex-wrap align-items-center pt-3'>
                    <div className='d-flex'>
                      <div className='mt-3  mx-2 questionDot'></div>
                      <p className='mt-2'> Prepare for job switch</p>
                    </div>
                    <Switch
                      yesTitle='yes'
                      noTitle='no'
                      setValue={setStudent}
                      value={student}
                      valueKey={'jobSwitch'}
                      padding={'3px 5px'}
                    />
                  </div>
                  <div className='d-flex justify-content-between flex-wrap align-items-center pt-3'>
                    <div className='d-flex'>
                      <div className='mt-3  mx-2 questionDot'></div>
                      <p className='mt-2'>Switch technology</p>
                    </div>
                    <Switch
                      yesTitle='yes'
                      noTitle='no'
                      setValue={setStudent}
                      value={student}
                      valueKey={'switchTechnology'}
                      padding={'3px 5px'}
                    />
                  </div>
                  <div className='d-flex justify-content-between flex-wrap align-items-center pt-3'>
                    <div className='d-flex'>
                      <div className='mt-3  mx-2 questionDot'></div>
                      <p className='mt-2'>Looking for a better hike</p>
                    </div>
                    <Switch
                      yesTitle='yes'
                      noTitle='no'
                      setValue={setStudent}
                      value={student}
                      valueKey={'betterHike'}
                      padding={'3px 5px'}
                    />
                  </div>
                  <div className='d-flex justify-content-between flex-wrap align-items-center pt-3 pb-4'>
                    <div className='d-flex'>
                      <div className='mt-3  mx-2 questionDot'></div>
                      <p className='mt-2'>Just Upskilling/Learning</p>
                    </div>
                    <Switch
                      yesTitle='yes'
                      noTitle='no'
                      setValue={setStudent}
                      value={student}
                      valueKey={'upSkilling'}
                      padding={'3px 5px'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='right col-md-4 px-0 pt-3'>
            <div>
              <div className='d-flex justify-content-between'>
                <h6>Profile completed(Good)</h6>
                <h6>
                  {Math.round(
                    (Object.values(student).filter((i) => i?.length > 0)
                      ?.length *
                      100) /
                      16
                  )}
                  %
                </h6>
              </div>
              <div className='completionBar'>
                <div
                  className={`primaryColor2  text-center`}
                  style={{
                    width: `${
                      (Object.values(student).filter((i) => i?.length > 0)
                        ?.length *
                        100) /
                      16
                    }%`,
                  }}
                >
                  <span style={{ visibility: 'hidden' }}>
                    {(Object.values(student).filter((i) => i?.length > 0)
                      ?.length *
                      100) /
                      16}
                    %
                  </span>
                </div>
              </div>
            </div>

            <div className='InterestCard text-white py-3 my-4 px-3'>
              <h5 className='px-2'>Learning Interest Area: </h5>
              <div
                style={{
                  gap: '10px',
                }}
                className='d-flex justify-content-around align-items-center'
              >
                <Select
                  className='flex-1 w-100 black selectOption'
                  onChange={(e) => {
                    console.log(e);
                    setStudent({
                      ...student,
                      learningInterestArea: [
                        ...student.learningInterestArea,
                        e.label,
                      ],
                    });
                  }}
                  options={category}
                />
                {/* <select
                  className=' InterestCardbg text-white'
                  style={{
                    outline: 'none',
                    border: 'none',
                    borderBottom: '1px solid #ffffff',
                    width: '70%',
                  }}
                  onChange={(e) => {
                    setStudent({
                      ...student,
                      learningInterestArea: [
                        ...student.learningInterestArea,
                        e.target.value,
                      ],
                    });
                  }}
                >
                  <option value=''>Select Interest Area</option>
                  <option value='python'>Python</option>
                  <option value='java'>Java</option>
                  <option value='c++'>C++</option>
                </select> */}
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='currentColor'
                    class='bi bi-search'
                    viewBox='0 0 16 16'
                  >
                    <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
                  </svg>
                </div>
                <div className='addBtn px-2 py-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    fill='currentColor'
                    class='bi bi-plus-circle-fill '
                    viewBox='0 0 16 16'
                  >
                    <path
                      d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z'
                      style={{ color: '#796ebd' }}
                    />
                  </svg>
                </div>
              </div>

              {student.learningInterestArea.map((item, index) => (
                <div className='px-2 d-flex align-items-center'>
                  <p style={{ textTransform: 'capitalize' }} className='pt-2 '>
                    {item}
                  </p>
                  <div
                    onClick={() => {
                      const tempData = student.learningInterestArea;
                      setStudent({
                        ...student,
                        learningInterestArea: tempData.filter(
                          (i) => i !== item
                        ),
                      });
                    }}
                    className=' px-1 mx-3 '
                    style={{
                      borderRadius: '30px',
                      backgroundColor: '#796ebd',
                      border: '2px solid white',
                    }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      class='bi bi-x pb-1'
                      viewBox='0 0 16 16'
                    >
                      <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            <div className='InterestCard text-white py-3 mt-5'>
              <div className=' d-flex justify-content-center rightSideQuestionDiv px-1 mx-0 py-4'>
                <div
                  className=' my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3 '
                  style={{
                    flex: '1',
                    backgroundColor: '#ffffff',
                    color: 'black',
                    borderRadius: '10px',
                  }}
                >
                  <div
                    className='px-2 py-2'
                    style={{ backgroundColor: '#e99594', borderRadius: '30px' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='currentColor'
                      class='bi bi-laptop'
                      viewBox='0 0 16 16'
                    >
                      <path
                        d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z'
                        style={{ color: 'white' }}
                      />
                    </svg>
                  </div>
                  <p className='text-center my-2 px-2'>
                    Do You have Laptop/PC for Learning?
                  </p>
                  <div>
                    <Switch
                      yesTitle='yes'
                      noTitle='no'
                      setValue={setStudent}
                      value={student}
                      valueKey={'haveLaptop'}
                      padding={'3px 5px'}
                      dotColor={'#ece8ff'}
                    />
                  </div>
                </div>
                <div
                  className=' my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3'
                  style={{
                    flex: '1',
                    backgroundColor: '#ffffff',
                    color: 'black',
                    borderRadius: '10px',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    className='px-2 py-2'
                    style={{ backgroundColor: '#e99594', borderRadius: '30px' }}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='36'
                      height='36'
                      fill='currentColor'
                      class='bi bi-laptop'
                      viewBox='0 0 16 16'
                    >
                      <path
                        d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z'
                        style={{ color: 'white' }}
                      />
                    </svg>
                  </div>
                  <p className='text-center my-2 px-2'>
                    Do You have Broadband?
                  </p>
                  <div>
                    <Switch
                      yesTitle='yes'
                      noTitle='no'
                      setValue={setStudent}
                      value={student}
                      valueKey={'haveBroadband'}
                      padding={'3px 5px'}
                      dotColor={'#ece8ff'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className='row mt-4 mb-5 px-0 mx-0'
            style={{ backgroundColor: '#796ebd', borderRadius: '10px' }}
          >
            <div
              className='col-md-3  d-flex flex-column justify-content-center align-items-center py-3'
              style={{ backgroundColor: '#cbc6e4', borderRadius: '10px' }}
            >
              <div
                className='col-md-12 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3'
                style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}
              >
                <div
                  className='px-2 py-2'
                  style={{ backgroundColor: '#e99594', borderRadius: '30px' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='36'
                    height='36'
                    fill='currentColor'
                    class='bi bi-laptop'
                    viewBox='0 0 16 16'
                  >
                    <path
                      d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z'
                      style={{ color: 'white' }}
                    />
                  </svg>
                </div>
                <p className='text-center my-2 px-2'>
                  Do You want notification?
                </p>
                <div>
                  <Switch
                    yesTitle='yes'
                    noTitle='no'
                    setValue={setStudent}
                    value={student}
                    valueKey={'notification'}
                    padding={'3px 5px'}
                    dotColor={'#ece8ff'}
                  />
                </div>
              </div>
            </div>
            <div
              className='col-md-9 rightSideDiv d-flex justify-content-center  align-items-center py-4'
              style={{ backgroundColor: '#8076cf', borderRadius: '10px' }}
            >
              <div
                className='col-md-4 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3'
                style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}
              >
                <div
                  className='px-2 py-2'
                  style={{ backgroundColor: '#e99594', borderRadius: '30px' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='36'
                    height='36'
                    fill='currentColor'
                    class='bi bi-laptop'
                    viewBox='0 0 16 16'
                  >
                    <path
                      d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z'
                      style={{ color: 'white' }}
                    />
                  </svg>
                </div>
                <p className='text-center my-2 px-2'>
                  New group classes that are looking for?
                </p>
                <div>
                  <Switch
                    yesTitle='yes'
                    noTitle='no'
                    setValue={setStudent}
                    value={student}
                    valueKey={'newGroup'}
                    padding={'3px 5px'}
                    dotColor={'#ece8ff'}
                  />
                </div>
              </div>
              <div
                className='col-md-4 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3'
                style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}
              >
                <div
                  className='px-2 py-2'
                  style={{ backgroundColor: '#e99594', borderRadius: '30px' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='36'
                    height='36'
                    fill='currentColor'
                    class='bi bi-laptop'
                    viewBox='0 0 16 16'
                  >
                    <path
                      d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z'
                      style={{ color: 'white' }}
                    />
                  </svg>
                </div>
                <p className='text-center my-2 px-2'>
                  Similar training requirements
                </p>
                <div>
                  <Switch
                    yesTitle='yes'
                    noTitle='no'
                    setValue={setStudent}
                    value={student}
                    valueKey={'trainingRequirement'}
                    padding={'3px 5px'}
                    dotColor={'#ece8ff'}
                  />
                </div>
              </div>
              <div
                className='col-md-4 my-1 mx-1 d-flex flex-column justify-content-center align-items-center py-3'
                style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}
              >
                <div
                  className='px-2 py-2'
                  style={{ backgroundColor: '#e99594', borderRadius: '30px' }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='36'
                    height='36'
                    fill='currentColor'
                    class='bi bi-laptop'
                    viewBox='0 0 16 16'
                  >
                    <path
                      d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z'
                      style={{ color: 'white' }}
                    />
                  </svg>
                </div>
                <p className='text-center my-2 px-2'>Learning newsletter</p>
                <div>
                  <Switch
                    yesTitle='yes'
                    noTitle='no'
                    setValue={setStudent}
                    value={student}
                    valueKey={'learningNewLetter'}
                    padding={'3px 5px'}
                    dotColor={'#ece8ff'}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-center align-items-center'>
            <button
              disabled={
                Math.round(
                  (Object.values(student).filter((i) => i?.length > 0)?.length *
                    100) /
                    16
                ) < 100
              }
              onClick={onClickHandler}
              type='button'
              class='actionBtn1  mx-2 text-white'
              style={{
                display: 'flex',
                gap: '10px',
              }}
            >
              Submit
              {loading.submit && <ScaleLoader height={20} color='#fff' />}
            </button>
            <button
              onClick={() => setStudent(initialState)}
              type='button'
              class='actionBtn2  mx-2'
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
