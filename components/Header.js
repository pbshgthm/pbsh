import Head from "next/head"
import Link from 'next/link'
import {useState} from 'react'

import styles from "../styles/Header.module.css"


export default function Header(props){
	const navLink=['about','work','play']
	const [navSel,setnavSel]=useState(props.navLink)
	return(
		<div className={styles.Header}>
			<div className={styles.Content}>
				<img className={styles.Logo} src="/images/header-logo.png"/>
				<div className={styles.NavList}>
					{navLink.map(x=>(
						<Link href={"/"+x}>
							<a className={`${styles.NavLink} ${(x===navSel?styles.NavLinkSel:1)}`} onClick={()=>setnavSel(x)}>{x}</a>
						</Link>
					))}
					<div className={styles.NavSelbar} style={{marginLeft:((navLink.indexOf(navSel)*70)+'px')}}></div>
				</div>
			</div>
		</div>
	)
};