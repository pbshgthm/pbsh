import {useState,useEffect} from 'react'


export function ProgressRing(){
	const [progress,setProgress]=useState(0)
	const radius = 30;
	const circumference = radius * 2 * Math.PI;
	
	function handleProgress(){
		const progress = (document.documentElement.scrollTop + document.body.scrollTop) /(document.documentElement.scrollHeight - document.documentElement.clientHeight) * 90;
		setProgress(progress)
		//Not sure why 90 works instead of 100
	}

	useEffect(()=>{
		window.addEventListener('scroll',handleProgress);
		return () => window.removeEventListener('scroll',handleProgress);
	},[])

	return(
		<div className={`fixed bottom-8 left-8 transition ${progress>5?'opacity-1':'opacity-0'}`}>
			<svg height={radius*2} width={radius*2}>
				<circle className="transform -rotate-90 origin-center" stroke="#EEEEEE" strokeWidth="2" fill="none" r={radius-4} cx={radius} cy={radius}/>
				<circle id="progress-circle" className="transform -rotate-90 origin-center" stroke="#BECB92" strokeWidth="2" fill="none" r={radius-4} cx={radius} cy={radius} strokeDasharray={`${circumference} ${circumference}`} strokeDashoffset={circumference*(1-progress/100)} />
			</svg>
		</div>
	)
}