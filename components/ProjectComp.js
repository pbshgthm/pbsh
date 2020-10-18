import styles from '../styles/Project.module.css'

const Img=(props)=>{
	const srcStr=props.src.split('#')
	return(
		<img className={styles.imgNormal} src={require(`../content/works/${srcStr[0]}`)}/>		
	)
}

const Head1=(props)=>{
	return(
		<h1 style={{color: 'tomato'}} {...props} />		
	)
}


export const High=({children})=>{
	return(
			<div>AA {children} BB</div>
	)
}

export const ProjectComp={
	img: Img,
	h1 : Head1,
	High : High
}