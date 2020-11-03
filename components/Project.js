import styles from '../styles/Project.module.scss'
import {useState,useEffect,useRef} from 'react'
import Link from 'next/link'
import {animateScroll as scroll} from 'react-scroll';

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

const Break=(props)=>(<div className={styles.Break}/>)

const H1=(props)=>(<><Break/><h1 id={props.children}>{props.children}</h1></>)
const Quote=(props)=>(<blockquote {...props} />);
const Url=(props)=>(<a target="_blank" rel="noopener noreferrer" {...props}/>)


export const Components={
	h1 : H1,
	img: Img,
	h4 : Quote,
	hr : Break,
	a  : Url,
}


function goTo(hash){
	const pos = document.getElementById(hash).offsetTop-200;
	scroll.scrollTo(pos,{
		smooth: 'easeInOut'
		}
	);
}



export default function Project({children,meta}){
	
	const [currHash,setCurrHash]=useState('')
	const hashList=['SUMMARY'].concat(meta.HASH)
	useEffect(()=>{
		//fix the step-wise updation using Events
		window.addEventListener('scroll', ()=>{
			const curr = document.documentElement.scrollTop
			const sortedHash = hashList.map(x=>(
				[x,curr-document.getElementById(x).offsetTop+201]
			)).filter(x=>x[1]>0).sort((a,b)=>(a[1]<b[1]?-1:1))
			if(sortedHash.length>0)setCurrHash(sortedHash[0][0])
			else setCurrHash('')
		})
	},[])
	

	return(
			<React.Fragment>
				<div className={`${styles.NavBar} ${currHash!==''?styles.NavBarShow:''}`}>
					{hashList.map(x=>(
						<div className={`${styles.NavLink} ${currHash===x?styles.NavLinkSel:''}`} 
							onClick={()=>goTo(x)}>{x}
						</div>))}
				</div>
				
				
				<div className={styles.CoverWrapper}>
					<div className={styles.Name}>{meta.SLUG.toUpperCase()}</div>
					<h1>{meta.TITLE}</h1>
					<div className={styles.Domain}>
							{meta.DOMAIN.map(x=>(<span key={x}>{x.toUpperCase()}</span>))}
					</div>
					<div className={styles.Cover}>
						<Img src={`${meta.COVER}#cover`} alt=""/>
					</div>
				</div>


				<div className={styles.Body}>
					<H1>SUMMARY</H1>
					<div className={styles.Summary}>
						<div className={styles.SummaryCol}>
							<div>
								<h4>{Object.entries(meta.SUMMARY[0])[0][0]}</h4>
								<p>{Object.entries(meta.SUMMARY[0])[0][1]}</p>
							</div>
						</div>
						<div className={styles.SummaryCol}>
							{meta.SUMMARY.slice(1).map((x,i)=>(
								<div key={i}>
									<h4>{Object.entries(x)[0][0]}</h4>
									<p>{Object.entries(x)[0][1]}</p>
								</div>
						))}
						</div>
					</div>
					{children}
				</div>

				<div className={styles.Footer}>Handcrafted by Poobesh Gowtham</div>
			</React.Fragment>
	)
}