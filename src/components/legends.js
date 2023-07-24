import "./w3style.css"
import { useState } from 'react';
import Profile from "./profile";
import Gallery from "./gallery";
import Intro from "./intro";
import Epilogue from "./epilogue";

const Legends = (props) => {
    const En=0, Jp=1
    const [language, setLanguage] = useState(En);
	const handleLanguageButton = () => {
		setLanguage(1-language);
	}
	return (
		<>
        <div className='w3-padding-16 w3-top'>
			<button className="w3-button w3-teal w3-left" onClick={handleLanguageButton}>{language === 0 ? "日本語" : "English"}</button>
		</div>
		<div className='w3-padding-16 w3-center'>
			<h1>About Me</h1>
            <div className="w3-padding-16 w3-border-top">
                <Profile lang={language}/>
            </div>
		</div>
        <Intro lang={language}/>

		<Gallery lang={language}/>
		<Epilogue lang={language}/>
		</>
	)
}
export default Legends;