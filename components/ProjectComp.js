import styles from '../styles/Project.module.css'
import {useState,useEffect} from 'react'


const Img=(props)=>{
	const [imageLoaded, setImageLoaded] = useState(false);
	const [showLqip,setShowLqip] = useState(true);

	useEffect(() => {
		if(imageLoaded){
			setTimeout(() => {
				setShowLqip(false)
			}, 2000);
		}
	}, [imageLoaded])

	const srcStr=props.src.split('#')
	const size=(srcStr.length>0)?srcStr[1]:'normal'

	return(
		<div className={styles.imgContainer}>
			{showLqip&&<img 
				className={`${styles.lqip} ${size}Img`}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
				style={{opacity:(imageLoaded?"0":"1"),position:'absolute',zIndex:'4',transform:'scale(1.1)'}}
			/>}
			{showLqip&&<img 
				className={`${styles.lqip} ${size}Img`}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
			/>}
			<img
        className={styles[`${size}Img`]}
        src={require(`../content/works/${srcStr[0]}`)}
        alt={props.alt}
				style={{position:showLqip?'absolute':'relative'}}
				onLoad={() => {console.log('loaded');setImageLoaded(true)}}
      />
		</div>
	)
}

const H1=(props)=>(<h1 className={styles.Title} {...props} />);
const H2=(props)=>(<h2 className={styles.SubTitle} {...props} />);
const H3=(props)=>(<h3 className={styles.Heading} {...props} />);
const H4=(props)=>(<h4 className={styles.SubHeading} {...props} />);
const H5=(props)=>(<blockquote className={styles.LargeQuote} {...props} />);
const H6=(props)=>(<blockquote className={styles.SmallQuote} {...props}/>)
const P=(props)=>(<div className={styles.Paragraph} {...props}/>)
const Em=(props)=>(<em className={styles.Emphasis} {...props}/>)
const Strong=(props)=>(<strong className={styles.Highlight} {...props}/>)
const A=(props)=>(<a target="_blank" className={styles.Link} {...props}/>)
const Li=(props)=>(<li className={styles.List} {...props}/>)


const InfoBox=({children})=>(<div className={styles.InfoBox}>{children}</div>)
const InfoTitle=({children})=>(<div className={styles.InfoTitle}>{children}</div>)
const InfoDesc=({children})=>(	<div className={styles.InfoDesc}>{children}</div>)

export const ProjectComp={
	img: Img,
	h1 : H1,
	h2 : H2,
	h3 : H3,
	h4 : H4,
	h5 : H5,
	h6 : H6,
	p : P,
	em : Em,
	a : A,
	li : Li,
	strong : Strong,
	InfoBox:InfoBox,
	InfoTitle:InfoTitle,
	InfoDesc:InfoDesc
}