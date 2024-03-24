import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './AddInvestors.css'; 
import Modal from './Modal'

const AddInvestor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [investmentsType, setInvestmentsType] = useState('');
    const [investorBank, setInvestorBank] = useState('');
    const [investorAccountNo, setInvestorAccountNo] = useState('');
    const [subsidiaryEmail, setSubsidiaryEmail] = useState('');
    const [subsidiaryBankName, setSubsidiaryBankName] = useState('');
    const [subsidiaryAccountNo, setSubsidiaryAccountNo] = useState('');
    const [deals, setDeals] = useState('');
    const [type, setType] = useState('');
    const [status, setStatus] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    const handleOpenModal = () => {
        if (
            !name ||
            !email ||
            !contactNumber ||
            !country ||
            !city ||
            !investmentsType ||
            !investorBank ||
            !investorAccountNo ||
            !subsidiaryEmail ||
            !subsidiaryBankName ||
            !subsidiaryAccountNo ||
            !deals ||
            !type ||
            !status
        ) {
            alert('Please fill in all fields');
        } else {
            setIsModalOpen(true);
        }

    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const form1 = () => {


    }

    const handleNavigateToDashboard = () => {
        const newInvestor = {
            name,
            email,
            contactNumber,
            country,
            city,
            investmentsType,
            investorBank,
            investorAccountNo,
            subsidiaryEmail,
            subsidiaryBankName,
            subsidiaryAccountNo,
            deals,
            type,
            status,
        };
        setIsModalOpen(false);
        setName('');
        setEmail('');
        setContactNumber('');
        setCountry('');
        setCity('');
        setInvestmentsType('');
        setInvestorBank('');
        setInvestorAccountNo('');
        setSubsidiaryEmail('');
        setSubsidiaryBankName('');
        setSubsidiaryAccountNo('');
        setDeals('');
        setType('');
        setStatus('');
        navigate('/Investors', { state: newInvestor });
    }

    const handleAddInvestor = (e) => {
        e.preventDefault();
        if (!name || !email || !contactNumber || !country || !city || !investmentsType || !investorBank || !investorAccountNo || !subsidiaryEmail || !subsidiaryBankName || !subsidiaryAccountNo || !deals || !type || !status) {
            alert('Please fill in all fields');

        } else {
            setIsModalOpen(true)
        }


    };

    const backToInvestors = () => {
        navigate('/Investors');
    };

    return (
        <div>
            <div className="breadcrumbs">
                <Link to="/investors">Investors</Link>
                <span>/</span>
                <span>Add Investors</span>
            </div>
            <div className='background'>
                <div className="header-container">
                    <button className="button" onClick={backToInvestors}>&#10229;</button>
                    <h4 className="title">Add Investors</h4>
                </div>
                <div className="add-investor-container">
                    <div className="add-investor-card">
                        <div className="card1-header">
                            <h4 className='header'>Overview</h4>
                        </div>
                        <div className='container'>
                            <form onSubmit={handleAddInvestor}>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ width: '45%', alignContent: 'start' }}>
                                        <label htmlFor="profilePhoto" style={{ textAlign: 'start' }}>Investors Profile Photo</label>
                                        <input
                                            type="file"
                                            id="profilePhoto"
                                            className="input-field"
                                        />
                                    </div>

                                    <div style={{ width: '45%' }}>
                                        <label htmlFor="name">Name:</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Enter name"
                                            className="input-field"
                                        />
                                    </div>
                                </div>


                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ width: '45%', alignContent: 'start' }}>
                                        <label htmlFor="profilePhoto" style={{ textAlign: 'start' }}>Email:</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="Enter email"
                                            className="input-field"
                                        />
                                    </div>
                                    <div style={{ width: '45%' }}>
                                        <label htmlFor="contactNumber">Contact Number</label>
                                        <input
                                            type="tel"
                                            id="contactNumber"
                                            value={contactNumber}
                                            onChange={(e) => setContactNumber(e.target.value)}
                                            placeholder="Enter contact number"
                                            className="input-field"
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ width: '45%', alignContent: 'start' }}>
                                        <label htmlFor="profilePhoto" style={{ textAlign: 'start' }}>Country</label>
                                        <input
                                            type="text"
                                            id="country"
                                            value={country}
                                            onChange={(e) => setCountry(e.target.value)}
                                            placeholder="Enter country"
                                            className="input-field"
                                        />
                                    </div>
                                    <div style={{ width: '45%' }}>
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            value={city}
                                            onChange={(e) => setCity(e.target.value)}
                                            placeholder="Enter city"
                                            className="input-field"
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ width: '45%', alignContent: 'start' }}>
                                        <label htmlFor="profilePhoto" style={{ textAlign: 'start' }}>Investments Type</label>
                                        <input
                                            type="text"
                                            id="investmentsType"
                                            value={investmentsType}
                                            onChange={(e) => setInvestmentsType(e.target.value)}
                                            placeholder="Enter investments type"
                                            className="input-field"
                                        />
                                    </div>
                                    <div style={{ width: '45%' }}>
                                        <label htmlFor="investorBank">Investor Bank</label>
                                        <input
                                            type="text"
                                            id="investorBank"
                                            value={investorBank}
                                            onChange={(e) => setInvestorBank(e.target.value)}
                                            placeholder="Enter investor bank"
                                            className="input-field"
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ width: '45%', alignContent: 'start' }}>
                                        <label htmlFor="profilePhoto" style={{ textAlign: 'start' }}>Investor Account Number</label>
                                        <input
                                            type="text"
                                            id="investorAccountNo"
                                            value={investorAccountNo}
                                            onChange={(e) => setInvestorAccountNo(e.target.value)}
                                            placeholder="Enter investor account number"
                                            className="input-field"
                                        />
                                    </div>
                                    <div style={{ width: '45%' }}>
                                        <label htmlFor="subsidiaryEmail">Subsidiary Email-id</label>
                                        <input
                                            type="email"
                                            id="subsidiaryEmail"
                                            value={subsidiaryEmail}
                                            onChange={(e) => setSubsidiaryEmail(e.target.value)}
                                            placeholder="Enter subsidiary email-id"
                                            className="input-field"
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ width: '45%', alignContent: 'start' }}>
                                        <label htmlFor="profilePhoto" style={{ textAlign: 'start' }}>Subsidiary Bank Name</label>
                                        <input
                                            type="text"
                                            id="subsidiaryBankName"
                                            value={subsidiaryBankName}
                                            onChange={(e) => setSubsidiaryBankName(e.target.value)}
                                            placeholder="Enter subsidiary bank name"
                                            className="input-field"
                                        />
                                    </div>
                                    <div style={{ width: '45%' }}>
                                        <label htmlFor="subsidiaryAccountNo">Subsidiary Account Number</label>
                                        <input
                                            type="text"
                                            id="subsidiaryAccountNo"
                                            value={subsidiaryAccountNo}
                                            onChange={(e) => setSubsidiaryAccountNo(e.target.value)}
                                            placeholder="Enter subsidiary account number"
                                            className="input-field"
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ width: '45%', alignContent: 'start' }}>
                                        <label htmlFor="profilePhoto" style={{ textAlign: 'start' }}>Deals:</label>
                                        <input
                                            type="text"
                                            id="deals"
                                            value={deals}
                                            onChange={(e) => setDeals(e.target.value)}
                                            placeholder="Enter deals"
                                            className="input-field"
                                        />
                                    </div>
                                    <div style={{ width: '45%' }}>
                                        <label htmlFor="type">Type:</label>
                                        <input
                                            type="text"
                                            id="type"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                            placeholder="Enter type"
                                            className="input-field"
                                        />
                                    </div>
                                </div>
                                <div style={{ width: '45%', marginLeft: 20 }}>
                                    <label htmlFor="status">Status:</label>
                                    <input
                                        type="text"
                                        id="status"
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        placeholder="Enter status"
                                        className="input-field"
                                    />
                                </div>

                                <button className="submit-button" type='submit'><strong>Submit</strong></button>

                            </form>
                        </div>
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} headerText="Investors addition">
                            <div className='Modal-box'>
                                <h2>Thank You!!</h2>
                                <p>Investors added succesfully!.</p>
                                <button onClick={handleNavigateToDashboard} className="submit-button"><strong>GO TO INVESTORS</strong></button>
                            </div>

                        </Modal>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default AddInvestor;

