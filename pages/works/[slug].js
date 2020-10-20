import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import {join} from 'path'

import {ProjectComp} from '../../components/ProjectComp'
import ProjectPage from '../../components/ProjectPage'

import Header from '../../components/Header'
import Layout from '../../components/Layout'

const components = ProjectComp;


export default function Works({ source, frontMatter }){
	
	const content = hydrate(source, { components })

  return(
		<Layout title={frontMatter.title}>
			<Header navLink='work'/>
			<ProjectPage meta={frontMatter}>{content}</ProjectPage>
		</Layout>
	)
}

export async function getStaticProps({params}) {
	const { content, data } = matter.read(join("content/works/", params.slug + ".md"))
	const mdxSource = await renderToString(content, { components, scope: data })
	return { props: { source: mdxSource, frontMatter: data } }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'vangogh' } },
    	{ params: { slug: 'covidwire' } },
    ],
    fallback: false
  };
}
