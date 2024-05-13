import fs from 'fs';
import matter from 'gray-matter';
import { useRouter } from 'next/router';
import Error from 'next/error';
import Layout from '../../components/Layout';
import md from 'markdown-it';


export default ({frontmatter, content}) => {
    const {title, author, category, date, bannerImage, tags} = frontmatter   
    return (
        <Layout title={title}>
            <h1>{title}</h1>
        <h2>{author} || {date}</h2>
        <h3>{category} || {tags.join()}</h3>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </Layout>
    );
} 



export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            // more paths
        ],
        fallback: false
    };
}


export async function getStaticProps({ params: { slug } }) {
const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
const { data: frontmatter, content } = matter(fileName);
return {
    props: {
    frontmatter,
    content,
    },
};
}