import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
//import { setIn } from 'formik';
const people = [
  {
    name: 'Ana ',
    role: 'FrontEnd Web Developer',
    imageUrl:
      'https://avatars.githubusercontent.com/u/108739635?v=4',
    description: "A highly organized and detail-oriented developer who is always willing to put in the extra time and effort to get the job done right. ",
    linkedInUrl: "https://www.linkedin.com/in/anacmwada/",
    gitHubUrl: "https://github.com/anawada",
    portfolioUrl: "#",
  },
  {
    name: 'Tala',
    role: 'FrontEnd Web Developer',
    imageUrl:
      'https://media.licdn.com/dms/image/C4D03AQE5MugdMJDrGg/profile-displayphoto-shrink_800_800/0/1651869103744?e=1684972800&v=beta&t=OpDASZaFIqhvonioAqQLWr0batCc-NRSzg0Y_mH6jZ8',
    description:"A creative problem solver who enjoys finding innovative solutions to clients' challenges and is always eager to learn.",
    linkedInUrl: "https://www.linkedin.com/in/tala-ammoun-421152163/",
    gitHubUrl: "https://github.com/Tala-Ammoun",
    portfolioUrl: "#",
  },
  {
    name: 'Asher',
    role: 'FrontEnd Web Developer',
    imageUrl:
      'https://avatars.githubusercontent.com/u/117310101?v=4',
    description: "Bringing a wealth of knowledge and experience to the team, Asher is a natural leader who is committed to mentoring junior team members.",
    linkedInUrl: "https://www.linkedin.com/in/asher-beck-276454259/",
    gitHubUrl: "https://github.com/Asherbeck10",
    portfolioUrl: "#",
  },
]
const typingSpeed = 50;
const initialText=
  `
  Welcome to our team!
  We are a group of dedicated professionals who are passionate about coding and committed to delivering exceptional results for our clients.
  We work collaboratively to share our knowledge and expertise, and are dedicated to continuous learning and improvement.
  We look forward to working with you to achieve your goals.
  `;
function Team() {
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
  export default function MeetUs() {
  return (
    <div className="bg-white py-24 sm:py-30">
      <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our team</h2>
          <div className="max-w-2xl">
            <Team />
          </div>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">
                    {person.role}</p>
                  <p className="text-sm text-text-gray-600">
                    {person.description}</p>
                  <a className="gitHub mx-1 text-gray-900 hover:text-indigo-600"  href={person.gitHubUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} /></a>
                  <a className="linkedIn mx-1 text-gray-900 hover:text-indigo-600" href={person.linkedInUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}/></a>
                  <a className="portfolio mx-1 text-gray-900 hover:text-indigo-600" href={person.portfolioUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGlobe}/></a>
                </div>
              </div>
            </li>
          )
          )}
        </ul>
      </div>
    </div>
  )
}