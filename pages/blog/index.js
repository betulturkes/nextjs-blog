import fs from 'fs';
import matter from 'gray-matter';
import Link from "next/link";
import Layout from '../../components/Layout';
import styled from "styled-components";

const blogContents = [
    {
        href:"gunluk-1",
        title: "Günlük yazı 1",
        content : "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
    },
    {
        href:"gunluk-2",
        title: "Günlük yazı 2",
        content: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }

];


const H2 = styled.h2`
    margin:0;
`;


const BlogDiv = styled.div`
    background-color: rgba(0,0,0,0.3) ;
    padding: 20px;
`;


const BlogWrapper = styled.div`
    margin-top: 10px;
    display: grid;
    gap: 10px;
`;

export default ({posts}) => 
    (
        <Layout title="Blog">
            Burada yazılar yer alacak
            <BlogWrapper>
                {posts.map((post) =>{
                    const{slug, frontmatter } = post;
                    const {title, author, category, date, bannerImage, tags} = frontmatter;
                    
                    return(
                        <article key= {title}>
                            <Link href={`/blog/${slug}`}>
                                <h1>{title}</h1>
                            </Link>
                            <h3>{author}</h3>
                            <h3>{date}</h3>
                        </article>
                    );
                })}
            </BlogWrapper>
        </Layout>
);

export async function getStaticProps(){
    const files = fs.readdirSync('posts');

    const posts = files.map((filename) =>{
        const slug = filename.replace('.md','');
        const readFile = fs.readFileSync(`posts/${filename}`, 'utf8');
        const {data: frontmatter} = matter(readFile);

        return{
            slug,
            frontmatter,
        };
    });

    return {
        props:{
            posts,
        },
    };

};