import React from "react";


function Home() {
  

  return (
    <>
      <div className="container mx-auto block">
        <div className="text-center p-5 m-5 shadow-sm">
            <h1 className="text-2xl text-bold bg-black text-white">Hello world ! Home page</h1>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly p-5">
            <p>So perhaps, you've generated some fancy text, and you're content that you can now copy and paste your
                fancy text in the comments section of funny cat videos, but perhaps you're wondering how it's even possible to
              change the font of your text? Is it some sort of hack? Are you copying and pasting an actual font?
            </p>
            <p>
                Well, the answer is actually no - rather than generating fancy fonts, this converter creates fancy symbols. 
                The explanation starts with unicode; an industry standard which creates the specification for thousands of
                different symbols and characters. All the characters that you see on your electronic devices, and printed in books, 
                are likely specified by the unicode standard.
            </p>
        </div >
      </div>
    </>
  );
}

export default Home;