import React,  { useState, useEffect } from 'react';
import CardResto from "../components/cardResto";

function Restaurant() {
	const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);   


    useEffect(() => {
        if (localStorage.getItem('token') !== null) {

          setIsAuth(true);
          setLoading(false);
          
        }       
      }, []);
    
    return ( <>
      { isAuth === true ?
        (<div className="relative container mx-auto md:my-16">
            <h1 className="text-2xl font-semibold text-mygreen font-poppins text-center p-8">RESTAURANT</h1> 
			      <CardResto />
                      
	    </div>)
        :(<></>)}
        </>
        )
	}
	
export default Restaurant;