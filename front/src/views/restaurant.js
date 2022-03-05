import React from "react";
import CardResto from "../components/cardResto";

function Restaurant() {
	
    return (
        <div className="container mx-auto my-16">
            <h1 className="text-2xl font-semibold text-mygreen font-poppins text-center p-8">RESTAURANT</h1> 
			<CardResto />
           
	    </div>
        );
	}
	
export default Restaurant;