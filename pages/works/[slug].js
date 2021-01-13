import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import {join} from 'path'
import Link from 'next/link'

import Works, {Components} from '../../components/Works'
import Layout from '../../components/Layout'

const components = Components;

export default function WorksPage({ contentStr, meta}){
	
	const content = hydrate(contentStr, { components })
	return(
		<Layout title={ meta.NAME + ' • Poobesh'}>
			<div className="w-wide m-auto text-gray-400">
				<Link href="/works"><a>« all works</a></Link>
				<span className="float-right">
					<Link href="/works"><a className="mr-4">← previous</a></Link>|
					<Link href="/works"><a className="ml-4">next →</a></Link>
				</span>
			</div>
			<Works meta={meta}>{content}</Works>
		</Layout>
	)
	
}

export async function getStaticProps({params}) {
	const { content, data } = matter.read(join("public/works/", params.slug + ".md"))
	const contentStr = await renderToString(content, { components, scope: data })
	return { props: { contentStr: contentStr, meta: {...data,SLUG:params.slug,HASH: getHeadings(content)} } }
}

export async function getStaticPaths() {
	const workList=['covidwire']
	return {
		paths: workList.map(x=>({ params: { slug: x } })),
		fallback: false
	};
}

function getHeadings(content) {
  const regexp = new RegExp(/^(# )(.*)\n/, 'gm')
  const headings = [...content.matchAll(regexp)]
	return headings.map(x=>x[2].trim())
}


