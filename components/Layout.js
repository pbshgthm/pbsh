import Head from "next/head";

export default function Layout({children,title}){
	return(
		<React.Fragment>
			<Head>
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<title>{title}</title>
				<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap" rel="stylesheet"/>
    	</Head>
			{children}
		</React.Fragment>)
}
