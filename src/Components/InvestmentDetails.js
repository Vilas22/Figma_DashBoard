import React from "react";
import { useLocation,Link } from "react-router-dom"

const InvestMentDetails = () => {
    const location = useLocation();
    console.log(location.state, "stateDataforreading");
    const stateData = location.state?.investerDetails;
    if (!stateData) return <div>No Data Available</div>
    return (
        <div>
             <div className="breadcrumbs">
                <Link to="/investors">Investors</Link>
                <span>/</span>
                <span>Investors Details</span>
            </div>
        <div style={{ border: "1px solid #000", borderRadius: 5 }}>
            <div style={{ backgroundColor: "#000", color: "#fff", padding: 5, fontSize: 18,alignSelf:"flex-start"}}>
            <h4 style={{marginRight:300}}>{stateData.name} Details</h4>
            </div>

            <div>
                <h4>Name:{stateData.name}</h4>
                <h4>Email:{stateData.email}</h4>
                <div>Type:{stateData.type}</div>
                <div>Investment:{stateData.investments} </div>
                <div>Deals:{stateData.deals}</div>
                <div>status:{stateData.deals}</div>
            </div>
            <br />
        </div>
        </div>
    )
}

export default InvestMentDetails;