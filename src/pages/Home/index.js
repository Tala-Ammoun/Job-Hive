import logo from "../../assets/logo.png"
import Button from "../../components/HomePageButton"
import React, {useState, useEffect} from 'react';

function Home() {
  const typingSpeed = 50;
const initialText=
  `
  Apply everywhere all at once!!
  `;
function Slogan() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (text.length !== initialText.length) {
    const typingTimer = setTimeout(() => {
      setText(text + initialText[index])
      setIndex(index+1);
    }, typingSpeed);
    return () => clearTimeout(typingTimer);
  }
  }, [text,index]);
  return (
      <p className="mt-6 text-lg leading-8 text-gray-600 typing-text">
        {text}
      </p>
  );
}
 return (
   <div className="w-screen h-screen black">
     <div class="text-center container mx-auto flex px-4 pt-6 items-center justify-center flex-col">
       <img class="lg:w-4/6 md:w-2/6 w-2/6 object-cover object-center" alt="hero" src={logo} />
       <div class="lg:w-7/12 w-full">
         <h1 className="-ml-2.5 -mt-5 text-7xl font-bold text-indigo-900">
           JobHive
         </h1>
         <p className="text-2xl mb-8">
         <Slogan />
         </p>
         <Button />
       </div>
     </div>
   </div >
 );
}

export default Home;