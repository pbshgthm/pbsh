import styles from '../styles/Project.module.css'
import {useState,useEffect} from 'react'
const Img=(props)=>{
	const [imageLoaded, setImageLoaded] = useState(false);
	const [removeLqip,setRemoveLqip] = useState(true);

	useEffect(() => {
		if(imageLoaded){
			setTimeout(() => {
				setRemoveLqip(false)
			}, 2000);
		}
	}, [imageLoaded])

	const srcStr=props.src.split('#')
	return(
		<div className={styles.imgContainer}>
			{removeLqip&&<img 
				className={styles.lqipNormal}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
				style={{opacity:(imageLoaded?"0":"1"),position:'absolute',zIndex:'4',transform:'scale(1.1)'}}
			/>}
			{removeLqip&&<img 
				className={styles.lqipNormal}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
			/>}
			<img
        className={styles.imgNormal}
        src={require(`../content/works/${srcStr[0]}`)}
        alt={props.alt}
				style={{position:removeLqip?'absolute':'relative'}}
				onLoad={() => {console.log('loaded');setImageLoaded(true)}}
      />
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