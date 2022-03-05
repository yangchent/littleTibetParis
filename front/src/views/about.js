import React from "react";


function About() {
        return (
            <div className="container mx-auto my-16 max-h-screen">
                <div className=" shadow-lg p-8 h-auto ">
                    <h1 className="text-3xl font-bold font-poppins text-center p-12">Quelques mots pour décrire l'objectif de la création de cette page :</h1> 
                   <div className=" flex justify-evenly my-8">
                       <div className="p-6 flex-row">
                            <h3 className="text-2xl font-semibold text-myorange p-2 tracking-widest pl-10 ">Réunir</h3>
                            <h3 className="font-serif text-mygreen p-2 text-xl pl-24 ">Liberté </h3>
                            <h3 className="font-mono text-myorange p-4 text-4xl ">Méditation</h3>
                            <h3 className="font-serif text-mygreen pb-4 text-4xl pl-14 ">Tradition </h3>
                            <h3 className="font-serif text-myorange p-2 text-5xl pl-0 ">Solidarité</h3>
                            <h3 className="font-mono text-mygreen p-2 text-2xl ">Philosophie</h3> 
                       </div>
                       <div  className="p-6">
                            <h3 className="font-mono text-myorange p-2 text-2xl pl-28 ">Tradition</h3>
                            <h3 className="font-thin text-mygreen text-4xl p-4 ">Introduction culturelle</h3>
                            <h3 className="text-6xl font-bold text-myorange p-2 pl-24 ">Santé</h3>
                            <h3 className="font-mono text-mygreen p-2 text-2xl ">Information</h3> 
                            <h3 className="text-3xl font-bold text-myorange py-6 pl-24 ">Communauté</h3>
                        </div>
                        <div  className="p-6">
                            
                            <h3 className="font-thin text-mygreen text-4xl m-4 pl-24 ">Gastronomie</h3>
                            <h3 className="text-3xl font-bold text-myorange p-4 ">Explorer</h3>
                            <h3 className="font-serif text-mygreen p-2 text-5xl pl-12 ">Humanité</h3> 
                            <h3 className="font-mono text-myorange p-2 text-2xl pl-28 ">Réfugiés</h3>
                            <h3 className="font-mono text-mygreen p-2 text-4xl tracking-widest ">YOGA</h3>
                        </div>
                   </div>
                    
                </div>
                
            </div>
            );
        }
export default About;