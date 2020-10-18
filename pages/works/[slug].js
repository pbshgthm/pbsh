import { useRouter } from 'next/router'
import {useState,useEffect} from 'react'


export default function apple(){
	const router = useRouter()
  const slug = router.query.slug
	const [projectPage,setProjectPage]=useState(<></>)
	

	useEffect(()=>{
		if(slug){
			try{
				setProjectPage(require(`../../content/works/${slug}.md`).default)
			}catch(error){
				console.log(error)
				setProjectPage(<div>ERROR</div>)
			}
		}
	},[slug])
	
	return(
		<React.Fragment>
			{projectPage}
		</React.Fragment>
	)
}