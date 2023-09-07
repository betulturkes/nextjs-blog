import { useForm } from "react-hook-form";
import styled from 'styled-components';
import Layout from '../components/Layout';

const Error= styled.span`
  color: tomato;
`;
const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const Input = styled.input` 
  border: none;
  padding: 8px;
  border-radius:4px;
  transition: all 0.1s;
  &:focus{
    border: none;
    outline: 3px solid rgba(0,180,216,0.8);
    background-color: #eee;
  }
`;



const Select = styled.select` 
  border: none;
  padding: 8px;
  border-radius:4px;
  transition: all 0.1s;
  &:focus{
    border: none;
    outline: 3px solid rgba(0,180,216,0.8);
    background-color: #eee;
  }
`;

export default function Contact() 
{
  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data) =>{
    console.log("data",data);
  };

  return(
    <Layout title="İletişim">
    <Form onSubmit = {handleSubmit(onSubmit)}> 
      <label htmlFor="name">Ad Soyad:</label>
      <Input 
        {...register("firstName",{required: true})}
        type="text" 
        id="name" 
        autoComplete ="off"
        />

        {errors.firstName && <Error>İsim girmek zorunludur.</Error>}
        <label htmlFor="source">Bizi nereden duydunuz?</label>
        <Select id="source" name="source" {...register("source")}>
          <option value="net">Internet</option>
          <option value="adv">Reklam</option>
          <option value="tv">TV</option>
        </Select>

      <Input type="submit"/>
    </Form>
    
  </Layout>
  )
};

