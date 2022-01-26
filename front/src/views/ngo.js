import React from "react";
import CardNgo from "../components/cardNgo";

function Ngo() {

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold text-center p-8">NGO List</h1> 
            <CardNgo />
        </div>
        );
    }

export default Ngo;