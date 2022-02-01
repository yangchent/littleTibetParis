import React from "react";


function About() {
        return (
            <div className="container mx-auto">
                <h1 className="text-2xl font-semibold text-center p-8">Quelques mots pour décrire l'objectif de la création de cette page :</h1> 
                <div className=" shadow-lg p-2 h-auto pb-8 ">
                   <div className=" flex justify-evenly">
                       <div className="p-2 flex-row">
                            <h3 className="text-2xl font-semibold text-zinc-600 p-2 tracking-widest pl-10 hover:text-lightColor">Réunir</h3>
                            <h3 className="font-serif text-zinc-700 p-2 text-xl pl-24 hover:text-baseColor">Liberté </h3>
                            <h3 className="font-mono text-zinc-900 p-4 text-4xl hover:text-baseColor">Méditation</h3>
                            <h3 className="font-serif text-zinc-900 pb-4 text-4xl pl-14 hover:text-lightColor">Tradition </h3>
                            <h3 className="font-serif text-zinc-900 p-2 text-5xl pl-0 hover:text-baseColor">Solidarité</h3>
                            <h3 className="font-mono text-zinc-900 p-2 text-2xl hover:text-lightColor">Philosophie</h3> 
                       </div>
                       <div  className="p-2">
                            <h3 className="font-mono text-zinc-900 p-2 text-2xl pl-28 hover:text-baseColor">Tradition</h3>
                            <h3 className="font-thin text-4xl p-4 hover:text-lightColor">Introduction culturelle</h3>
                            <h3 className="text-6xl font-bold text-zinc-600 p-2 pl-24 hover:text-baseColor">Santé</h3>
                            <h3 className="font-mono text-zinc-900 p-2 text-2xl hover:text-lightColor">Information</h3> 
                            <h3 className="text-3xl font-bold text-zinc-600 py-6 pl-24 hover:text-lightColor">Communauté</h3>
                        </div>
                        <div  className="p-2">
                            
                            <h3 className="font-thin text-4xl p-2 pl-24 hover:text-lightColor">Gastronomie</h3>
                            <h3 className="text-3xl font-bold text-zinc-600 p-4 hover:text-baseColor">Explorer</h3>
                            <h3 className="font-serif text-zinc-900 p-2 text-5xl pl-12 hover:text-baseColor">Humanité</h3> 
                            <h3 className="font-mono text-zinc-900 p-2 text-2xl pl-28 hover:text-lightColor">Réfugiés</h3>
                            <h3 className="font-mono text-zinc-900 p-2 text-4xl tracking-widest hover:text-lightColor">YOGA</h3>
                        </div>
                   </div>
                    
                </div>
                
            </div>
            );
        }
export default About;