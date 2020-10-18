import styles from './ProjectComp.module.css'

const Img=(props)=>{
	const srcStr=props.src.split('#')
	return(
		<img className={styles.imgNormal} src={require(`../content/works/${srcStr[0]}`)}/>		
	)
}

export const ProjectComp={
	img: Img
}
