import {ProjectComp} from './ProjectComp'
import {MDXProvider} from '@mdx-js/react'
import styles from './ProjectComp.module.css'

export default function ProjectPage({children,metaData}){
	return(
		<MDXProvider components={ProjectComp}>
			<div className={styles.ProjectPage}>
				{metaData.title}
				{children}
			</div>
		</MDXProvider>
	)
}