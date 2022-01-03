import React from 'react';

const Faq=()=>{

    return (
        <main className="md:w-3/5 sm:w-full p-8 mx-auto">
            <section className="shadow row">
                <div className="tabs">
                    <div className="border-b tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck1" />
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck1">
                                <span className="text-grey-darkest font-thin text-xl">
                                    Qui peut utiliser ?
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    {/* icon by feathericons.com */}
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                    <div className="pl-4">
                                        <p className="pb-3">
                                           whoever interested 
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="border-b tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span className="text-grey-darkest font-thin text-xl">
                                    Mission of having this web site?
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    {/* icon by feathericons.com */}
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                    <p className="pb-3">Lors de la rédaction de votre annonce nous vous demandons :</p>
                                    <ul className="pl-4">
                                        <li className="pb-3">
                                            -le type d'objet
                                        </li>
                                        <li className="pb-3">
                                            - une description de l'objet
                                        </li>
                                        <li className="pb-3">
                                            - nous vous demandons une photo au minimum, 3 au maximum
                                        </li>
                                        <li className="pb-3">
                                            - si vous possédez les PV liés à l'objet (facultatif)
                                        </li>
                                        <li className="pb-3">
                                            - la date de disponibilité de votre objet
                                        </li>
                                        <li>
                                            - vos contacts pour la mise en relation future
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    
                    </div>
            </section>
        </main>
    )}
export default Faq;