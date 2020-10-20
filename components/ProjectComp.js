import styles from '../styles/Project.module.css'
import {useState,useEffect} from 'react'
const Img=(props)=>{
	const [imageLoaded, setImageLoaded] = useState(false);
	const [loadImg,setLoadImg] = useState(false);


	const srcStr=props.src.split('#')
	return(
		<div className={styles.imgContainer}>
			<img 
				className={styles.lqipNormal}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
				style={{opacity:(imageLoaded?"0.3":"0.7"),zIndex:'4'}}
				onLoad={() => console.log('lo')}
			/>
			<img 
				className={styles.lqipNormal}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
				style={{opacity:'0',position:'relative'}}
				onLoad={() => console.log('lo')}
			/>
			{<img
        className={styles.imgNormal}
        src={require(`../content/works/${srcStr[0]}`)}
        alt={props.alt}
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