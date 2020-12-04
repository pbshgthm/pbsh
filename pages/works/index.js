import Link from 'next/link'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import matter from 'gray-matter'
import {join} from 'path'

import styles from '../../styles/Works.module.scss'
import {useState, useEffect} from 'react'

import {animateScroll as scroll} from 'react-scroll';

function goTo(hash){
	const pos = document.getElementById(hash).offsetTop-120;
	scroll.scrollTo(pos,{
		smooth: 'easeInOut',
		duration:500
		}
	);
}



export default function Works({works}) {
	const [currHover,setCurrHover]=useState('')
	const [currHash,setCurrHash]=useState(works[0].SLUG)
	const hashList=works.map(x=>x.SLUG)
	
	function handleScroll(){
		const curr = document.documentElement.scrollTop	
		const sortedHash = hashList.map(x=>(
			[x,curr-document.getElementById(x).offsetTop+271]
		)).filter(x=>x[1]>0).sort((a,b)=>(a[1]<b[1]?-1:1))

		if(sortedHash.length>0)setCurrHash(sortedHash[0][0])
		else setCurrHash(hashList[0])
	}
	useEffect(()=>{
		window.addEventListener('scroll',handleScroll)
		return () => window.removeEventListener('scroll',handleScroll);
	},[])

	return (
    <Layout title="Works ~ Poobesh">
			<Header navLink="works"/>
			<div className={styles.Anchors}>
				{works.map(x=>(
					<div className={styles[`Theme${x.THEME}`]} onClick={()=>goTo(x.SLUG)}>
						<div className={`${styles.AnchorPoint} ${x.SLUG===currHash?styles.AnchorSel:''}`}/>
					</div>))}
			</div>
			<div className={styles.WorkList}>
				{
					works.map((x,i)=>(
						<div key={x.SLUG} id={x.SLUG} className={`${styles.WorkBox} ${styles[`Theme${x.THEME}`]}`}>
							{
							//<Link href={`/works/${x.SLUG}`}><a>
								<img className={styles.WorkImg} style={{float:i%2==0?'right':'left'}} src={require(`../../content/works/${x.SLUG}_assets/thumbnail.png`)} onMouseEnter={()=>setCurrHover('x.NAME')} onMouseLeave={()=>setCurrHover('')}/>
							//</a></Link>		
							}		
							<div className={styles.WorkDescContainer}>
								<div className={styles.WorkDesc}>
									<h1>{x.NAME.toUpperCase()}</h1><br/>
									<Link href={`/works/${(x.ACTIONS[0]==='read more')?x.SLUG:`#${x.SLUG}`}`}>
										<a><h2 onMouseEnter={()=>(x.ACTIONS[0]==='read more')?setCurrHover(x.SLUG):''} onMouseLeave={()=>setCurrHover('')} className={x.SLUG===currHover?styles.h2Hover:''}>{x.TITLE}</h2></a>
									</Link>	
									<p>{x.DESC}</p>

									{x.ACTIONS[0]==='read more'?
											<Link href={`/works/${x.SLUG}`}>
											<a onMouseEnter={()=>setCurrHover(x.SLUG)} onMouseLeave={()=>setCurrHover('')} className={styles.WorkLink}>{x.ACTIONS[0]}</a>
											</Link>:
											<div className={styles.WorkLinkStale}>{x.ACTIONS[0]}</div>	
									}
									{x.ACTIONS.slice(-1)[0]==='live site'?
										<a className={styles.WorkLinkSec} href={x.URL}>live site →</a>:''
									}
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
	const workList=['covidwire','vangogh','mosaic','hotbox']
	const works=workList.map(x=>matter.read(join(`content/works/${x}.md`)).data)
	return { props: { works: works } }
}

