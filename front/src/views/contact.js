import React from 'react';

function Contact() {
    
    return (
    <div className="container mx-auto my-16">
        <h1 className="text-2xl font-semibold text-center text-mygreen font-poppins p-6">CONTACTEZ-NOUS</h1> 
        <h3 className="m-8 text-center font-fredoka text-gray-400 text-base">Vous avez une question ? Voici les réponses aux questions les plus fréquemment posées.
          <br />  N'hésitez pas à nous contacter par mail pour toute autre question.</h3>
        <div className="flex flex-col items-center justify-center">
            <img src="./img/tibetParis.jpg" className='w-1/3 h-auto rounded shadow-xl' alt="ByNorbuWangyal"/> 
            <div className='flex m-4 pt-8'>
                <img src="./img/contact.png" className='w-8 h-8 ' alt="email"/> 
                <p className='ml-2 text-xl font-bold font-fredoka'>gyachungriom@gmail.com</p>
            </div>
            <div className='flex m-4'>
                <img src="./img/phone.png" className='w-8 h-8 ' alt="phone"/> 
                <p className='ml-2 text-xl font-bold font-fredoka'>07 68 54 10 59</p>
            </div>
        </div>
    </div>
    );
}
export default Contact;