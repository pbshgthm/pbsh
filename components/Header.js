import Head from "next/head"
import Link from 'next/link'
import {useState} from 'react'

import styles from "../styles/Header.module.scss"


export default function Header(props){
	const navLink=['about','works','blog','fun ツ']
	const [navSel,setnavSel]=useState(props.navLink)
	return(
		<div className={styles.Header}>
			<div className={styles.Content}>
				<img className={styles.Logo} src="/images/header-logo.png"/>
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