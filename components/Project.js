import styles from '../styles/Project.module.scss'
import {useState,useEffect,useRef} from 'react'

const Img=(props)=>{
	const [imageLoaded, setImageLoaded] = useState(false);
	const [showLqip,setShowLqip] = useState(true);
	const imgRef = useRef(false);

	useEffect(() => {
		if(imageLoaded){
			setTimeout(() => {
				setShowLqip(false)
			}, 500);
		}
	}, [imageLoaded])

	useEffect(() => {
		const img = imgRef.current;
    if (img && img.complete) {
				setImageLoaded(true)
        setTimeout(() => {
					setShowLqip(false)
				}, 500);
    }
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
				onLoad={() => setImageLoaded(true)}
      />
			{(props.alt.length>0)&&<p>{props.alt}</p>}
		</div>
	)
}


const Quote=(props)=>(<blockquote {...props} />);
const Break=(props)=>(<div className={styles.Break}/>)
const Link=(props)=>(<a target="_blank" rel="noopener noreferrer" {...props}/>)

export const Components={
	img: Img,
	h4 : Quote,
	hr : Break,
	a  : Link,
}

export default function Project({children,meta}){
	return(
			<React.Fragment>
				<div className={styles.Cover}>
					<Img src={"assets/vangogh/cover.png#cover"} alt=""/>
				</div>
				<div className={styles.Intro}>
					<div className={styles.Crumb}>{'works / highlight / '+meta.SLUG}</div>
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