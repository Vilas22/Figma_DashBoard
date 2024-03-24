import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import "../App.css";


const initialData = [
    {
        id: 1,
        image: 'https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/421779948_909047323918891_5418210278189328312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EaTeqDrsUgkAX-qloXy&_nc_ht=scontent.fblr8-1.fna&oh=00_AfBBFt1WKz4CqZZStzEO4ULQPqYJTpGQgJfA4M0ori1qjQ&oe=660422AC',
        name: 'Vishal',
        email: 'Vishal@gmail.com',
        investments: '$12M',
        deals: '03',
        type: 'longterm',
        status: 1
    },
    {
        id: 2,
        name: 'Vikas',
        image: 'https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/421779948_909047323918891_5418210278189328312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EaTeqDrsUgkAX-qloXy&_nc_ht=scontent.fblr8-1.fna&oh=00_AfBBFt1WKz4CqZZStzEO4ULQPqYJTpGQgJfA4M0ori1qjQ&oe=660422AC',
        email: 'vikas@gmail.com',
        investments: '$12M',
        Deals: '03',
        type: 'longterm',
        status: 1
    },
    {
        id: 3,
        name: 'subbhas',

        email: 'subbhas@gmail.com',
        investments: '$12M',
        deals: '03',
        type: 'longterm',
        status: 1
    },
    {
        id: 4,
        name: 'Deva',
        image: 'https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/421779948_909047323918891_5418210278189328312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EaTeqDrsUgkAX-qloXy&_nc_ht=scontent.fblr8-1.fna&oh=00_AfBBFt1WKz4CqZZStzEO4ULQPqYJTpGQgJfA4M0ori1qjQ&oe=660422AC',
        email: 'Deva@gmail.com',
        investments: '$12M',
        deals: '03',
        Type: 'shortterm',
        status: 1
    },
    {
        id: 5,
        name: 'adhi',
        email: 'adhi@gmail.com',
        image: 'https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/421779948_909047323918891_5418210278189328312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EaTeqDrsUgkAX-qloXy&_nc_ht=scontent.fblr8-1.fna&oh=00_AfBBFt1WKz4CqZZStzEO4ULQPqYJTpGQgJfA4M0ori1qjQ&oe=660422AC',
        investments: '$12M',
        deals: '02',
        type: 'shortterm',
        status: 1
    },
    {
        id: 6,
        name: 'Arjun',
        image: 'https://scontent.fblr8-1.fna.fbcdn.net/v/t39.30808-6/421779948_909047323918891_5418210278189328312_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=EaTeqDrsUgkAX-qloXy&_nc_ht=scontent.fblr8-1.fna&oh=00_AfBBFt1WKz4CqZZStzEO4ULQPqYJTpGQgJfA4M0ori1qjQ&oe=660422AC',
        email: 'Arjun@gmail.com',
        investments: '$10M',
        deals: '02',
        type: 'longterm',
        status: 0
    },
];
const Investors = () => {
    const inputRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    const [data, setData] = useState(initialData);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterValue, setFilterValue] = useState('all');
    const [showLongTermOnly, setShowLongTermOnly] = useState(false);
    const [selectedInvestor, setSelectedInvestor] = useState(null);


    const handleSearch = (event) => {
        const searchText = event?.target?.value?.toLowerCase();
        setSearchTerm(searchText);

        const filteredResults = data.filter(investor =>
            investor?.name.toLowerCase().includes(searchText)
        );
        setData(filteredResults);
    };

    const handleFilter = () => {
        const filteredResults = showLongTermOnly ? data.filter(investor =>
            investor.type === 'longterm'
        ) : data;
        setData(filteredResults);
    };

    const handleCheckboxChange = (event) => {
        setShowLongTermOnly(event.target.checked);
    };

    const handleReset = () => {
        setSearchTerm('');
        setData(initialData);
        inputRef.current?.focus();
    };

    const handleAddInvestor = () => {
        navigate('/Add-investors'); 
    };

    const onClickEvent = (investerDetails) => {
        navigate("/invesmtent_details", { state: { investerDetails } });
    }
    const addData = location.state;
    initialData.push(addData)


    return (
        <div>
            <p className="Investors-header">Investors</p>
            <div className="header-container">
                <h4 className="title">Add Investors</h4>
                <button className="add-button" onClick={handleAddInvestor}>Add Investors</button>

            </div>
            <div>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    placeholder="Search by name..."
                    className="search-input"
                    ref={inputRef}
                >


                </input>
                {/* <button onClick={handleReset}></button> */}

            </div>
            <div className="investors-container">
                <div className="investors-grid">
                    {data.map(investor => (
                        <div key={investor?.id} className="investor-card">
                            <div className="card-header">
                                <div className="row1">
                                    <div className="image-container">
                                        <img src={investor?.image} />
                                    </div>
                                </div>
                                <div className="row2">
                                    <div className="name">{investor?.name}</div>
                                    <div className="email">{investor?.email}</div>
                                </div>
                                <div className="row3">
                                    <button className={`status-button ${investor?.status === 1 ? 'active' : 'inactive'}`}>
                                        {investor?.status === 1 ? 'Active' : 'Inactive'}
                                    </button>
                                </div>
                            </div>


                            <div className="card-footer">
                                <div className="row">
                                    <div>
                                        <p> {investor?.investments}</p>
                                        <label style={{ color: "#2887CC" }}>Investments</label>
                                    </div>
                                    <div>
                                        <p> {investor?.deals} </p>
                                        <label style={{ color: "#2887CC" }}>Deals</label>
                                    </div>
                                    <div>
                                        <p> {investor?.type} </p>
                                        <label style={{ color: "#2887CC" }}>Type</label>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', height: 33, padding: 10, flexDirection: 'row', gap: 70, marginBottom: 10, backgroundColor: '#fff', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                                <button className="Create-log">CREATE LOG</button>
                                <button className="View-Details" style={{ cursor: "pointer" }} onClick={(e) => {
                                    onClickEvent(investor)
                                }}>VIEW DETAILS</button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Investors;
