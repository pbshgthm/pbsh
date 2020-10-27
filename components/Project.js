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


const H1=(props)=>{
	const children=props.children.split('#')
	const hash=(children.length>0)?children[1]:false;
	if(!hash)return(<h1>{children[0]}</h1>)
	
	return(
		<div className={styles.Anchor}>
			<div>{'#'+hash}</div>
			<h1 id={hash}>{children[0]}</h1>
		</div>
		
	)
	
}

const Quote=(props)=>(<blockquote {...props} />);
const Break=(props)=>(<div className={styles.Break}/>)
const Url=(props)=>(<a target="_blank" rel="noopener noreferrer" {...props}/>)

export const Components={
	h1 : H1,
	img: Img,
	h4 : Quote,
	hr : Break,
	a  : Url,
}


function goTo(hash){
	const pos = document.getElementById(hash).offsetTop-150;
	scroll.scrollTo(pos,{
		smooth: 'easeInOut'
		}
	);
}



export default function Project({children,meta}){
	
	const [currHash,setCurrHash]=useState('')

	useEffect(()=>{
			window.addEventListener('scroll', ()=>{
				const curr = document.documentElement.scrollTop
				const sortedHash = meta.HASH.map(x=>(
					[x,curr-document.getElementById(x).offsetTop+151]
				)).filter(x=>x[1]>0).sort((a,b)=>(a[1]<b[1]?-1:1))
				if(sortedHash.length>0)setCurrHash(sortedHash[0][0])
				else setCurrHash('')
			})
	},[])
	

	return(
			<React.Fragment>
				<div className={styles.Cover}>
					<Img src={`${meta.COVER}#cover`} alt=""/>
				</div>
				<div className={styles.Intro}>
					<div className={styles.Crumb}>{'works / highlight / '+meta.SLUG}</div>
					<div className={styles.Nav}>
						{"CURR :"+currHash}
						{meta.HASH.map(x=>(<div onClick={()=>goTo(x)}>{x}</div>))}
					</div>
					<h1>{meta.TITLE}</h1>
					<h2>{meta.SUBTITLE}</h2>
					<div className={styles.Info}>
						<div className={styles.Domain}>
							{meta.DOMAIN.map(x=>(<span key={x}>{x}</span>))}
						</div>
						<span>//{meta.DURATION}</span>
					</div>
					<div className={styles.Break}/>
				</div>
				<div className={styles.Body}>
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
					<div className={styles.Break}/>
					{children}
				</div>
			</React.Fragment>
	)
}