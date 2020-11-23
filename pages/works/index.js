import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import matter from 'gray-matter'
import {join} from 'path'

import styles from '../../styles/Works.module.scss'

export default function Works({works}) {
	console.log(works)
  return (
    <Layout title="Works ~ Poobesh">
			<Header navLink="works"/>
			<div className={styles.NextBtn}>
			⌃ ⌄
			</div>
			<div className={styles.WorkList}>
				{
					works.map((x,i)=>(
						<div className={`${styles.WorkBox} ${styles[`Theme${x.THEME}`]}`}>
							<Link href={`/works/${x.NAME.toLowerCase()}`}><a>
								<img className={styles.WorkImg} style={{float:i%2==0?'right':'left'}} src={require(`../../content/works/${x.NAME.toLowerCase()}_assets/thumbnail.png`)}/>
							</a></Link>				
							<div className={styles.WorkDescContainer}>
								<div className={styles.WorkDesc}>
									<h1>{x.NAME.toUpperCase()}</h1>
									<h2>{x.TITLE}</h2>
									<p>{x.TITLE}</p>	
									<Link href={`/works/${x.NAME.toLowerCase()}`}><a>
										<div className={styles.WorkLink}>view project</div>
									</a></Link>
									<img className={styles.WorkRef} src={require(`../../content/works/${x.NAME.toLowerCase()}_assets/work-ref.png`)}/>				
								</div>
							</div>
						</div>
					))
				}
			</div>
		</Layout>
  )
}

export async function getStaticProps() {
	const workList=['covidwire','vangogh']
	const works=workList.map(x=>matter.read(join(`content/works/${x}.md`)).data)
	return { props: { works: works } }
}

