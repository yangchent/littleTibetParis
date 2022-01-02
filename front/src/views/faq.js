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
                                    Qui peut utiliser Plinth ?
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
                                            Plinth est un outil de mise en relation pour le don d'objets et matériaux dédié au secteur culturel, des Arts Visuels plus précisément. Plinth s'adresse aux musées, galeries, fondations, centre d'arts, artistes, ou tout autre lieu où l'art est exposé.
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
                                    Que contient une annonce de don ?
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
                    <div className="border-b tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck3" />
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck3">
                                <span className="text-grey-darkest font-thin text-xl">
                                        Que peut-on donner via Plinth ?
                                </span>
                                <div className="rounded-full border border-grey w-7 h-7 flex items-center justify-center test">
                                    {/* <!-- icon by feathericons.com --> */}
                                    <svg aria-hidden="true" className="" data-reactid="266" fill="none" height="24" stroke="#606F7B" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                                        <polyline points="6 9 12 15 18 9">
                                        </polyline>
                                    </svg>
                                </div>
                            </header>
                            <div className="tab-content">
                                <div className="pl-8 pr-8 pb-5 text-grey-darkest">
                                        <p className="pb-3 pl-4">
                                        Les objets proposés au don via Plinth doivent être en état de fonctionnement, les matériaux ou les objets de scénographie peuvent faire l'objet de petites réparations (ex: peinture à refaire). Il s'agit de couvrir tous les besoins que vous pourriez rencontrer en tant que professionnels de l'art, qu'il s'agisse de socle de présentation, de matériaux, de matériel audio-visuel, de caisse de transport etc...
                                        </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span className="text-grey-darkest font-thin text-xl">
                                    Comment suis-je mis en relation avec d'autres utilisateurs ?
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
                                    
                                    <p className="pl-4">
                                        Vous souhaitez récupérer un objet proposé au don sur le site ? Cliquez simplement sur "contacter le propriétaire" dans la fiche produit et suivez les instructions. Nous vous mettrons en relation directe avec le donneur.
                                    </p>
                                    <p className="pl-4">
                                        Lorsqu'un utilisateur est intéressé par une de vos annonces, nous en sommes averties et nous vous proposons d'entrer en contact directement avec l'utilisateur.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span className="text-grey-darkest font-thin text-xl">
                                    Que se passera-t-il après cette version test ?
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
                                    <p className="pl-4">
                                        La première version officielle de Plinth est en cours de développement. Lorsqu'elle sera mise en ligne, vous y retrouverez vos annonces déjà créées lors de la version test, vous pourrez alors choisir de continuer d'utiliser nos services, en version gratuite ou payante selon vos besoins. En tant que testeurs nous vous offrons également une réduction sur les 3 premiers mois d'abonnement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b tab">
                        <div className="border-l-2 border-transparent relative">
                            <input className="w-full absolute z-10 cursor-pointer opacity-0 h-5 top-6" type="checkbox" id="chck2" />
                            <header className="flex justify-between items-center p-5 pl-8 pr-8 cursor-pointer select-none tab-label" for="chck2">
                                <span className="text-grey-darkest font-thin text-xl">
                                    Quel abonnement choisir par la suite ?
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
                                    <p className="pb-3">La première version de Plinth proposera plusieurs formules d'abonnement :</p>
                                        <ul className="pl-4">
                                            <li className="pb-3">
                                                - Un compte gratuit, vous permettant de rédiger autant d'annonce que vous le souhaitez, et d'avoir un aperçu du catalogue
                                            </li>
                                            <li className="pb-3">
                                                - Un abonnement "galerie" vous permettant de rédiger autant d'annonce que vous le souhaitez, d'avoir un accès au catalogue et d'être mis en relation avec les donneurs en illimité. Vous avez le choix de vous abonner au mois ou à l'année.
                                            </li>
                                            <li className="pb-3">
                                                - Un abonnement "institution" vous permettant de rédiger autant d'annonce que vous le souhaitez, d'avoir un accès au catalogue et d'être mis en relation avec les donneurs en illimité. Vous avez le choix de vous abonner au mois ou à l'année.
                                            </li>
                                            <li className="pb-3">
                                                - Un abonnement "artiste" vous permettant de rédiger autant d'annonce que vous le souhaitez, d'avoir un accès au catalogue et d'être mis en relation avec les donneurs en illimité. Vous avez le choix de vous abonner au mois ou à l'année.
                                            </li>
                                            <li>
                                                - Un abonnement "étudiant" vous permettant de rédiger autant d'annonce que vous le souhaitez, d'avoir un accès au catalogue et d'être mis en relation avec les donneurs en illimité. Vous avez le choix de vous abonner au mois ou à l'année.
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