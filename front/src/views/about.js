import React from "react";


function About() {
        return (
            <div className="relative container mx-auto my-16 max-h-screen">
                <div className="shadow-lg p-2 md:p-8">
                    <h1 className="md:text-3xl font-bold font-poppins text-center p-1 md:p-12">Quelques mots pour décrire l'objectif de la création de cette page :</h1> 
                   <div className="w-full flex md:justify-evenly md:my-8 flex-wrap">
                       <div className="p-1 md:p-6">
                            <h1 className="text-2xl font-semibold text-myorange p-2 tracking-widest md:pl-10 ">Réunir</h1>
                            <h1 className="font-serif text-mygreen p-2 text-xl md:pl-24 ">Liberté </h1>
                            <h1 className="font-mono text-myorange p-4 md:text-4xl ">Méditation</h1>
                            <h1 className="font-serif text-mygreen pb-4 md:text-4xl md:pl-14 ">Tradition </h1>
                            <h1 className="font-serif text-myorange p-2 text-5xl pl-0 ">Solidarité</h1>
                            <h1 className="font-mono text-mygreen p-2 text-2xl ">Philosophie</h1> 
                       </div>
                       <div className="p-1 md:p-6 ">
                            <h1 className="font-mono text-myorange p-2 text-2xl md:pl-28 ">Tradition</h1>
                            <h1 className="font-thin text-mygreen md:text-4xl p-4 ">Introduction culturelle</h1>
                            <h1 className="text-6xl font-bold text-myorange p-2 md:pl-24 ">Santé</h1>
                            <h1 className="font-mono text-mygreen p-2 text-2xl ">Information</h1> 
                            <h1 className="text-3xl font-bold text-myorange py-6 md:pl-24 ">Communauté</h1>
                        </div>
                        <div  className="p-1 md:p-6">
                            
                            <h1 className="font-thin text-mygreen md:text-4xl m-4 md:pl-24 ">Gastronomie</h1>
                            <h1 className="text-3xl font-bold text-myorange p-4 ">Explorer</h1>
                            <h1 className="font-serif text-mygreen p-2 text-5xl md:pl-12 ">Humanité</h1> 
                            <h1 className="font-mono text-myorange p-2 text-2xl md:pl-28 ">Réfugiés</h1>
                            <h1 className="font-mono text-mygreen p-2 text-4xl tracking-widest ">YOGA</h1>
                        </div>
                   </div>
                    
                </div>
                
            </div>
            );
        }
export default About;