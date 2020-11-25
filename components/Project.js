import styles from '../styles/Project.module.scss'
import {useState,useEffect,useRef} from 'react'
import Link from 'next/link'
import {animateScroll as scroll} from 'react-scroll';


function goTo(hash){
	const pos = document.getElementById(hash).offsetTop-140;
	scroll.scrollTo(pos,{
		smooth: 'easeInOut'
		}
	);
}

export default function Project({children,meta}){
	
	const [currHash,setCurrHash]=useState('')
	const hashList=['Summary'].concat(meta.HASH)
	const [progress,setProgress]=useState(0)
	
	useEffect(()=>{
		window.addEventListener('scroll', ()=>{
			const curr = document.documentElement.scrollTop
			const progress = (document.documentElement.scrollTop + document.body.scrollTop) /(document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
			
			setProgress(progress)
			const sortedHash = hashList.map(x=>(
				[x,curr-document.getElementById(x).offsetTop+141]
			)).filter(x=>x[1]>0).sort((a,b)=>(a[1]<b[1]?-1:1))

			if(sortedHash.length>0)setCurrHash(sortedHash[0][0])
			else setCurrHash('')
		})
	},[])
	
	

	return(
			<div className={styles[`Theme${meta.THEME}`]}>
				<div className={styles.ProgressBar} style={{width:`${progress}vw`}}></div>
				<div className={`${styles.NavBar} ${currHash!==''?styles.NavBarShow:''}`}>
					{hashList.map(x=>(
						<div key={x} className={`${styles.NavLink} ${currHash===x?styles.NavLinkSel:''}`} 
							onClick={()=>goTo(x)}>{x.toUpperCase()}
						</div>))}
				</div>
				
				
				<div className={styles.CoverWrapper}>
					<div className={styles.Name}>{meta.NAME.toUpperCase()}</div>
					<h1>{meta.TITLE}</h1>
					<div className={styles.Domain}>
							{meta.DOMAIN.map(x=>(<span key={x}>{x.toUpperCase()}</span>))}
					</div>
					<div className={styles.Cover}>
						<Img src={`${meta.SLUG}_assets/cover.png#cover`} alt=""/>
					</div>
				</div>


				<div className={styles.BodyContainer}>
					<div className={styles.Body}>
						<H1>Summary</H1>
						<div className={styles.Summary}>
							<div className={styles.SummaryCol}>
								<div>
									<h4>{Object.entries(meta.SUMMARY[0])[0][0]}</h4>
									<p dangerouslySetInnerHTML={{ __html:Object.entries(meta.SUMMARY[0])[0][1]}}/>
								</div>
							</div>
							<div className={styles.SummaryCol}>
								{meta.SUMMARY.slice(1).map((x,i)=>(
									<div key={i}>
										<h4>{Object.entries(x)[0][0]}</h4>
										<p dangerouslySetInnerHTML={{ __html:Object.entries(x)[0][1]}}/>
									</div>
							))}
							</div>
						</div>
						{meta.FEATURED&&<div>
							<h4 style={{wordSpacing: '10px'}}>Featured 🎉</h4>
							<div className={styles.FeaturedBox} style={{width:meta.FEATURED.width+'px'}}>
								{meta.FEATURED.content.map(x=>
									(<a href={x[0]} target="_blank" rel="noopener noreferrer">
										<img style={{width:(meta.FEATURED.width/meta.FEATURED.content.length)+'px'}} src={require(`../content/works/${meta.SLUG}_assets/${x[1]}`)}/>
									</a>))
								}
							</div>
						</div>}
						{children}
						<Break/>
					</div>
				</div>
				<div className={styles.Footer}>Handcrafted by Poobesh Gowtham</div>
			</div>
	)
}


//BREAK SVG
const Img=(props)=>{
	const [imageLoaded, setImageLoaded] = useState(false);
	const [showLqip,setShowLqip] = useState(true);
	const imgRef = useRef(false);

	
	function handleLoaded(){
		setImageLoaded(true);
		setTimeout(() => {
			setShowLqip(false)
		}, 100);
	}
	
	useEffect(() => {
		const img = imgRef.current;
		if (img && img.complete) handleLoaded();
	}, [])

	const srcStr=props.src.split('#')
	const size=(srcStr.length>1)?srcStr[1]:'normal'
	
	return(
		<div className={`${styles.ImgBox} ${styles[`${size}ImgBox`]}`}>
			{showLqip&&<img 
				src={require(`../content/works/${srcStr[0]}?lqip`)}
				className={styles.lqip}
				style={{opacity:(imageLoaded?"0":"1"),position:'absolute',zIndex:'4',transform:'scale(1.1)'}}
			/>}
			{showLqip&&<img 
				className={styles.lqip}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
			/>}
			<img
				src={require(`../content/works/${srcStr[0]}`)}
				alt={props.alt}
				ref={imgRef}
				style={{position:showLqip?'absolute':'relative'}}
				onLoad={() => handleLoaded()}
			/>
			{(props.alt.length>0)&&<p>{props.alt}</p>}
		</div>
	)
}

const H1=(props)=>(<><Break/><h1 id={props.children}>{props.children.toUpperCase()}</h1></>);
const Url=(props)=>(<a target="_blank" rel="noopener noreferrer" {...props}/>);
const Blockquote=(props)=>(<blockquote {...props}/>)
const BreakX=(props)=>(<svg className={styles.Break} width="286" height="12" viewBox="0 0 286 12" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12C9.31372 12 12 9.31372 12 6C12 2.68628 9.31372 0 6 0C2.68628 0 0 2.68628 0 6C0 9.31372 2.68628 12 6 12ZM23.6255 6.28027C25.5779 4.71509 27.4432 4 29.2375 4C31.0318 4 32.8971 4.71509 34.8495 6.28027C37.0554 8.04858 39.3485 9 41.7125 9C44.0765 9 46.3696 8.04858 48.5754 6.28027C50.5279 4.71509 52.3932 4 54.1875 4C55.9818 4 57.8471 4.71509 59.7995 6.28027C62.0054 8.04858 64.2985 9 66.6625 9C69.0265 9 71.3196 8.04858 73.5255 6.28027C75.4779 4.71509 77.3432 4 79.1375 4C80.9318 4 82.7971 4.71509 84.7495 6.28027C86.9554 8.04858 89.2485 9 91.6125 9C93.9765 9 96.2696 8.04858 98.4755 6.28027C100.428 4.71509 102.293 4 104.087 4C105.882 4 107.747 4.71509 109.7 6.28027C111.905 8.04858 114.198 9 116.562 9C118.927 9 121.22 8.04858 123.425 6.28027C125.378 4.71509 127.243 4 129.038 4C130.832 4 132.697 4.71509 134.65 6.28027C136.855 8.04858 139.148 9 141.513 9C143.877 9 146.17 8.04858 148.375 6.28027C150.328 4.71509 152.193 4 153.987 4C155.782 4 157.647 4.71509 159.6 6.28027C161.805 8.04858 164.099 9 166.463 9C168.827 9 171.12 8.04858 173.325 6.28027C175.278 4.71509 177.143 4 178.938 4C180.732 4 182.597 4.71509 184.55 6.28027C186.755 8.04858 189.048 9 191.412 9C193.776 9 196.07 8.04858 198.275 6.28027C200.228 4.71509 202.093 4 203.888 4C205.682 4 207.547 4.71509 209.5 6.28027C211.705 8.04858 213.998 9 216.362 9C218.727 9 221.02 8.04858 223.225 6.28027C225.178 4.71509 227.043 4 228.837 4C230.632 4 232.497 4.71509 234.45 6.28027C236.655 8.04858 238.948 9 241.312 9C243.677 9 245.97 8.04858 248.175 6.28027C250.128 4.71509 251.993 4 253.787 4C255.582 4 257.447 4.71509 259.4 6.28027C261.605 8.04858 263.898 9 266.263 9C268.627 9 270.92 8.04858 273.125 6.28027C275.078 4.71509 276.943 4 278.737 4C280.532 4 282.397 4.71509 284.349 6.28027L285.6 4.71973C283.395 2.95142 281.102 2 278.737 2C276.373 2 274.08 2.95142 271.875 4.71973C269.922 6.28491 268.057 7 266.263 7C264.468 7 262.603 6.28491 260.65 4.71973C258.445 2.95142 256.151 2 253.787 2C251.423 2 249.13 2.95142 246.925 4.71973C244.972 6.28491 243.107 7 241.312 7C239.518 7 237.653 6.28491 235.7 4.71973C233.495 2.95142 231.202 2 228.837 2C226.473 2 224.18 2.95142 221.974 4.71973C220.022 6.28491 218.157 7 216.362 7C214.568 7 212.703 6.28491 210.75 4.71973C208.545 2.95142 206.252 2 203.888 2C201.523 2 199.23 2.95142 197.025 4.71973C195.072 6.28491 193.207 7 191.412 7C189.618 7 187.753 6.28491 185.8 4.71973C183.595 2.95142 181.302 2 178.938 2C176.573 2 174.28 2.95142 172.075 4.71973C170.122 6.28491 168.257 7 166.463 7C164.668 7 162.803 6.28491 160.85 4.71973C158.645 2.95142 156.352 2 153.987 2C151.623 2 149.33 2.95142 147.125 4.71973C145.172 6.28491 143.307 7 141.513 7C139.718 7 137.853 6.28491 135.9 4.71973C133.695 2.95142 131.402 2 129.038 2C126.673 2 124.38 2.95142 122.175 4.71973C120.222 6.28491 118.357 7 116.562 7C114.768 7 112.903 6.28491 110.95 4.71973C108.745 2.95142 106.452 2 104.087 2C101.723 2 99.4304 2.95142 97.2245 4.71973C95.2721 6.28491 93.4068 7 91.6125 7C89.8182 7 87.9529 6.28491 86.0005 4.71973C83.7946 2.95142 81.5015 2 79.1375 2C76.7735 2 74.4804 2.95142 72.2745 4.71973C70.3221 6.28491 68.4568 7 66.6625 7C64.8682 7 63.0029 6.28491 61.0504 4.71973C58.8446 2.95142 56.5515 2 54.1875 2C51.8235 2 49.5304 2.95142 47.3245 4.71973C45.3721 6.28491 43.5068 7 41.7125 7C39.9182 7 38.0529 6.28491 36.1005 4.71973C33.8946 2.95142 31.6015 2 29.2375 2C26.8735 2 24.5804 2.95142 22.3745 4.71973L23.6255 6.28027Z"/>
</svg>)

const Break = (props) => (<div className={styles.Break}></div>)

export const Components={
	h1 : H1,
	img: Img,
	hr : Break,
	a	: Url,
}