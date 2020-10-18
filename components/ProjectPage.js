import styles from '../styles/Project.module.css'

export default function ProjectPage({children,meta}){
	return(
			<div className={styles.ProjectPage}>
				{
					"title : "+meta.title+
					" | desc : "+meta.desc+
					" | next : "+meta.next.join(',')
				}
				{children}
			</div>
	)
}