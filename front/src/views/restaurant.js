import React from "react";
import CardResto from "../components/cardResto";

function Restaurant() {
	
    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-semibold text-center p-8">Restaurant à Paris</h1> 
			<CardResto />
           
	    </div>
        );
	}
	
export default Restaurant;