import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import matter from 'gray-matter'
import {join} from 'path'

import {ProjectComp} from '../../components/ProjectComp'
import ProjectPage from '../../components/ProjectPage'

const components = ProjectComp;


export default function Works({ source, frontMatter }){
	
	const content = hydrate(source, { components })
  return <ProjectPage meta={frontMatter}>{content}</ProjectPage>
	
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
