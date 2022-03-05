import React, { Component } from 'react';

class CardNgo extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
            ngos: [],
        };
    }
    // new
    async componentDidMount() {
        let url ="http://127.0.0.1:8000/ngos/?format=json";
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);    
        this.setState({ ngos: parseData })
    }
    render() {
        return (
            <>
            {this.state.ngos.map(item => (

				<div class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white m-2">
					<div class="w-full md:w-1/3 bg-white grid place-items-center" key={item.id}>
						<img src={item.image} alt="ONG" class="rounded-xl" />
					</div>
					<div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3 font-fredoka">
						<div class="flex justify-between item-center">
							<a href={item.link} target="_blank"  rel="noreferrer" class="text-blue-600 text-sm md:block hover:text-blue-400">
								<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-4 h-4 inline-block mr-1" viewBox="0 0 52 52" enable-background="new 0 0 52 52">
									<path fill="#2563eb" d="M26,2C12.7,2,2,12.7,2,26s10.7,24,24,24s24-10.7,24-24S39.3,2,26,2z M26,7C26,7,26,7,26,7C26,7,26,7,26,7 
									C26,7,26,7,26,7z M28,7.1c-0.1,0-0.1,0-0.2,0C27.9,7.1,28,7.1,28,7.1z M26,45C15.5,45,7,36.5,7,26c0-1,0.1-2.1,0.3-3  
									c1.3,0.2,2.9,0.7,3.7,1.5c1.7,1.8,3.6,3.9,5.4,4.3c0,0-0.2,0.1-0.4,0.4c-0.2,0.3-0.4,0.9-0.4,1.9c0,4.7,4.4,1.9,4.4,6.6 
									c0,4.7,5.3,6.6,5.3,2.8s3.5-5.6,3.5-8.5s-2.7-2.8-4.4-3.8c-1.8-0.9-2.7-2.4-6.1-1.9c-1.8-1.7-2.8-3.1-2-4.7c0.9-1.7,4.6-2,4.6-4.6
									s-2.5-3.1-4.3-3.1c-0.8,0-2.5-0.6-3.9-1.3c1.7-1.7,3.8-3.1,6-4.1c1.6,0.7,4.3,1.8,6.6,1.8c2.7,0,4.1-1.9,3.7-3.1 
									c4.5,0.7,8.5,3,11.4,6.2c-1.5,0.9-3.5,1.9-7,1.9c-4.6,0-4.6,4.7-1.9,5.6c2.8,0.9,5.6-1.8,6.5,0c0.9,1.8-6.5,1.8-4.6,6.4
									c1.9,4.6,3.7-0.1,5.6,4.5c1.9,4.6,5.6-0.7,2.8-4.3c-1.2-1.6-0.9-6.5,1.9-6.5h0.9c0.4,1.6,0.7,3.3,0.7,5C45,36.5,36.5,45,26,45z"/>
								</svg>{item.name}
							</a>
							
							<div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
								Détail
							</div>
						</div>
						<h3 class="font-black text-gray-800 md:text-3xl text-xl"> {item.name}</h3>
						<p class="md:text-lg text-gray-500 text-base"> {item.address}</p>
						<p class="text-lg font-black text-gray-800">{item.city} {item.Zip_code}</p>
						<p class="text-lg font-black text-gray-800">{item.phone}</p>
					</div>
				</div>         
            ))}
        </>
    );
    }
}
export default CardNgo;