import styles from '../styles/Project.module.css'

export default function ProjectPage({children,meta}){
	return(
			<div className={styles.ProjectPage}>
				<div className={styles.Crumb}>
					{'works / highlight / '+meta.title}
				</div>
				{children}
			</div>
	)
}