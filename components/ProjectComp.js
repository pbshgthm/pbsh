import styles from '../styles/Project.module.css'
import {useState,useEffect} from 'react'
const Img=(props)=>{
	const [imageLoaded, setImageLoaded] = useState(false);
	const [removeLqip,setRemoveLqip] = useState(false);

	useEffect(() => {
		if(imageLoaded){
			setTimeout(() => {
				setRemoveLqip(true)
			}, 2000);
		}
	}, [imageLoaded])

	const srcStr=props.src.split('#')
	return(
		<div className={styles.imgContainer}>
			<img 
				className={styles.lqipNormal}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
				style={{opacity:(imageLoaded?"0":"1"),zIndex:'4',transform:'scale(1.1)',display:removeLqip?'none':'block'}}
			/>
			<img 
				className={styles.lqipNormal}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
				style={{opacity:'0',position:'relative',display:removeLqip?'none':'block'}}
			/>
			{<img
        className={styles.imgNormal}
        src={require(`../content/works/${srcStr[0]}`)}
        alt={props.alt}
				style={{position:removeLqip?'relative':'absolute'}}
				onLoad={() => {console.log('loaded');setImageLoaded(true)}}
      />}
		</div>
	)
}

const Head1=(props)=>{
	return(
		<h1 style={{color: 'tomato'}} {...props} />		
	)
}


export const High=({children})=>{
	return(
			<div className={styles.High}>{"AA "+children+" BB"}</div>
	)
}


export const ProjectComp={
	img: Img,
	h1 : Head1,
	High : High
}