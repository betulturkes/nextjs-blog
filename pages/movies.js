import styled from "styled-components";
import Image from "next/image";
import {useState, useEffect} from "react";
import Layout from '../components/Layout';


const BeerCard = styled.div`
  display: grid;
  gap: 10px;
  max-width: 200px;
`;

const BeerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  gap: 20px;
  justify-items: center;
  justify-content: space-between;

`;


export default function Movies(){
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch("https://api.punkapi.com/v2/beers")
    .then((res) => res.json())
    .then((data) => setData(data));
  },[]);  




  return (
    <Layout title="Filmler">
      <BeerList>
      { data.map((item) =>(
        <BeerCard key={item.id}>
          <Image width= {100} height={100} alt= {item.name} src={item.image_url} loading="lazy"/>
          <b>{item.name}</b>;
        </BeerCard>
      ))} 
      </BeerList> 
    </Layout>
  );

}
