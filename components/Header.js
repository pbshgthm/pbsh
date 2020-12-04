import Head from "next/head"
import Link from 'next/link'
import {useState} from 'react'

import styles from "../styles/Header.module.scss"


export default function Header(props){
	const navLink={
		'about':'/',
		'works':'/works',
		'blog':'/soon',
		'fun':'/soon'
	}
	const theme = props.theme?props.theme:'Yellow';

	const [navSel,setnavSel]=useState(props.navLink)
	return(
		<div className={`${styles.Header} ${styles[`Theme${theme}`]}`}>
			<div className={styles.Content}>
				<Link href="/">
					<a><img className={styles.Logo} src='/images/logo.png'/></a>
				</Link>
				<div className={styles.NavList}>
					{Object.entries(navLink).map(x=>(
						<nav key={x[0]}>
							<Link href={x[1]}>
								<a className={`${(x[0]===navSel?styles.NavSel:'')}`} onClick={()=>setnavSel(x[0])}>{x[0].toUpperCase()}</a>
							</Link>
						</nav>
					))}
				</div>
			</div>
		</div>
	)
};