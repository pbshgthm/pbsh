import Header from '../components/Header'
import Layout from '../components/Layout'
import Link from 'next/link'

import styles from "../styles/About.module.scss"

 export default function about(){
	 return(
	 <Layout title="Poobesh ~ Home">
			<Header navLink="about" theme="Green"/>
			<div className={styles.AboutContainer}>
		 	<div className={styles.About}>
			 	<img src={'images/me.png'} className={styles.Photo}/>
				<h2><span style={{color: '#BCBCBC',fontSize:'24px'}}>Hi! I'm</span><br/>Poobesh Gowtham</h2>
				<div className={styles.Roles}>
					<span style={{color: '#EFA54E'}} >DESIGNER</span>
					<span style={{color: '#9CAB68'}} >DEVELOPER</span>
					<span style={{color: '#1EBBD7'}} >MAKER</span>
				</div>
				<p>
					I study Interaction Design at IIT Bombay, India. I love building things. Being a design student and a self taught programmer, I carry ideas through the entire roadmap - from design to development to actually getting them in the hands of the users. I've built tools and apps as side projects that are currently used by thousands of users, that helped me better understand the alchemy of design, tech and product. I'm currently working on creating powerful curation tools for knowledge workers. You can follow the updates <a href="https://twitter.com/pbshgthm/status/1305403243388829696" target="_blank" rel="noopener noreferrer">here</a>.
					<br/><br/>
					Lately I've been experimenting with art at the intersection of data and deep learning. I love reading books on culture, philosohy and anthropology and <a href="https://www.notion.so/Poobesh-s-Bookshelf-8954c9a9d8254122ae997c8c3b044067" target="_blank" rel="noopener noreferrer">here's</a> my bookshelf. Photography is a meditation of mine. You can catch a glipse my capture moments <a href="https://instagram.com/pbshgthm" target="_blank" rel="noopener noreferrer">here</a>.
				</p>
				<Link href={'/works'}>
					<a className={styles.WorksLink}>view works</a>
				</Link>
				<a className={styles.WorkLinkSec} href={'/'}>résumé →</a>

				<div className={styles.SayHi}>
					<span>Say Hi!</span>
					<a href="https://twitter.com/pbshgthm" target="_blank" rel="noopener noreferrer"><img src={'images/twitter.png'}/>@pbshgthm</a>
					<a href="mailto:hey@poobesh.io" target="_blank" rel="noopener noreferrer"><img src={'images/email.png'}/>hey@poobesh.io</a>
				</div>
				<img src='images/previous.png' className={styles.Previous}/>
			</div>
			</div>
		</Layout>
	)
 }