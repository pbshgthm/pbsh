import Header from '../components/Header'
import Layout from '../components/Layout'
import Link from 'next/link'

import styles from "../styles/About.module.scss"

 export default function soon(){
	 return(
	 <Layout title="Poobesh ~ Home">
			<Header navLink="" theme="Green"/>
			<div className={styles.Soon}>
				Hold up, adding some stuff, sprinkling some magic...
				<span>Coming soon</span>
				<Link href="/works">
					<a>go to works →</a>
				</Link>
			</div>
		</Layout>
	)
 }