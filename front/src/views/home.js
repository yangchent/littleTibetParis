import React from "react";


function Home() {  
  return (
  <div className="h-full">
    <div className="bg-lightColor">
      <div className="container mx-auto pt-24 pb-0 mb-0">
        <h1 className="text-8xl font-bold text-baseColor text-center">TIBET À PARIS</h1>
      </div>
    </div>
    <div className="bg-baseColor mt-0 pt-0">
      <div className="container mx-auto">
        <div className="p-8">
          <h2 className="p-4 text-center text-2xl text-white">Happening now</h2>
            <p className="text-white p-8">So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your
                fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to
              change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?
            </p>
            <p className="text-white p-8">
                Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. 
                The explanation starts with unicode; an industry standard which creates the specification for thousands of
                different symbols and characters. All the characters that you see on your electronic devices, and printed in books, 
                are likely specified by the unicode standard.
            </p>
          </div>
      </div >
    </div >
    <hr />
  </div>
  );

}
export default Home;