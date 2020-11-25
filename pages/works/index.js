import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import matter from 'gray-matter'
import {join} from 'path'

import styles from '../../styles/Works.module.scss'
import {useState} from 'react'

export default function Works({works}) {
	const [currHover,setCurrHover]=useState('')

	
	return (
    <Layout title="Works ~ Poobesh">
			<Header navLink="works"/>
			<div className={styles.WorkList}>
				{
					works.map((x,i)=>(
						<div className={`${styles.WorkBox} ${styles[`Theme${x.THEME}`]}`}>
							{
							//<Link href={`/works/${x.SLUG}`}><a>
								<img className={styles.WorkImg} style={{float:i%2==0?'right':'left'}} src={require(`../../content/works/${x.SLUG}_assets/thumbnail.png`)} onMouseEnter={()=>setCurrHover('x.NAME')} onMouseLeave={()=>setCurrHover('')}/>
							//</a></Link>		
							}		
							<div className={styles.WorkDescContainer}>
								<div className={styles.WorkDesc}>
									<h1>{x.NAME.toUpperCase()}</h1><br/>
									<Link href={`/works/${x.SLUG}`}>
										<a><h2 onMouseEnter={()=>setCurrHover(x.NAME)} onMouseLeave={()=>setCurrHover('')} className={x.NAME===currHover?styles.h2Hover:''}>{x.TITLE}</h2></a>
									</Link>	
									<p>{x.TITLE}</p>
									<Link href={`/works/${x.SLUG}`}>
										<a onMouseEnter={()=>setCurrHover(x.NAME)} onMouseLeave={()=>setCurrHover('')} className={styles.WorkLink}>read more</a>
									</Link>
									<Link href={`/works/${x.SLUG}`}>
										<a className={styles.WorkLinkSec}>live site ></a>
									</Link>
									<img className={styles.WorkRef} src={require(`../../content/works/${x.SLUG}_assets/work-ref.png`)}/>	
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
	const workList=['covidwire','vangogh','mosaic']
	const works=workList.map(x=>matter.read(join(`content/works/${x}.md`)).data)
	return { props: { works: works } }
}

