import Layout from '../components/Layout';
export default function Index() {
  const API_URL = process.env.API_URL;
  return (
    <Layout title="Anasayfa">
      NODE_ENV<div>{process.env.NODE_ENV === "development" ? "DEV MODE" : "PRODUCT MODE"}</div>
      paragraf
      <p>{API_URL}</p>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
      as opposed to using 'Content here, content here', making it look like readable English. 
      Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
      and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
      Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
    </Layout>
  );
}
  
