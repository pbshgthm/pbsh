import Head from "next/head"
import Link from 'next/link'
import {useState} from 'react'

import styles from "../styles/Header.module.scss"


export default function Header(props){
	const navLink=['about','works','blog','fun']
	const theme = props.theme?props.theme:'Yellow';

	const [navSel,setnavSel]=useState(props.navLink)
	return(
		<div className={`${styles.Header} ${styles[`Theme${theme}`]}`}>
			<div className={styles.Content}>
				<div className={styles.Identity}>poobesh</div>
				<div className={styles.NavList}>
					{navLink.map(x=>(
						<nav key={x}>
							<Link href={"/"+x}>
								<a className={`${(x===navSel?styles.NavSel:'')}`} onClick={()=>setnavSel(x)}>{x.toUpperCase()}</a>
							</Link>
						</nav>
					))}
				</div>
			</div>
		</div>
	)
};