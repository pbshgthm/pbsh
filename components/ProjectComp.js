import styles from '../styles/Project.module.css'
import {useState,useEffect} from 'react'
const Img=(props)=>{
	const [imageLoaded, setImageLoaded] = useState(false);
	
	const sty = {
    lqip: {
      filter: "blur(20px)",
    },
  };

	if (imageLoaded) {
    sty.lqip.opacity = 0;
  }
	
	const srcStr=props.src.split('#')
	return(
		<div className={styles.imgContainer}>
			<img 
				className={styles.lqipNormal}
				src={require(`../content/works/${srcStr[0]}?lqip`)} 
				alt={props.alt}	
				style={sty.lqip}
			/>
			<img
        className={styles.imgNormal}
        src={require(`../content/works/${srcStr[0]}?lqip`)}
        alt={props.alt}
        onLoad={() => setImageLoaded(true)}
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