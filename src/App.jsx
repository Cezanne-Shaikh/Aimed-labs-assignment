import React from "react";
import styled from "styled-components";
import LogoSrc from "./assets/aimedlabs.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const App = () => {
  const Title = styled.h1`
    font-size: 2em;
    text-align: center;
    font-weight: bolders;
  `;

  const MainDiv = styled.div`
    padding: 8em;
    display: flex;
    justify-content:center;
    
  `;

  const Logo = styled.img`
  @media (max-width: 768px) {
    display: none;
  }`;

  const LoginDiv = styled.div`
  @media (max-width: 480px){
    width:full;
  }
    padding: 20px;
    width:700px;
    box-shadow: 10px 12px 15px 2px black;
    display: flex;
    flex-direction: column;
  `;
  const LoginLabel = styled.label`
   margin-left:2em;
    font-weight: bold;
  `;

  const LoginInput = styled.input`
    padding: 10px;
    width:80%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    width: full;
    margin-top: 1%;
    margin-left: 4%;
  `;

  // password
  const PasswordInputContainer = styled.div`
    margin-top: 2%;
    
    position: relative;
  `;

  const PasswordLabel = styled.label`
    margin-left: 2em;
    font-weight: bold;
  `;

  const PasswordInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
    width: 80%;
    margin-top: 1%;
    margin-left: 4%;
  `;

  const EyeIcon = styled.div`
    padding: 0 8px;
    position: absolute;
    align-items: center;
    top: 60%;
    right: 15%;
    cursor: pointer;
  `;

  //Check Box
  const CheckboxContainer = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
    margin-top: 2%;
    margin-left: 4%;
  `;

  const Checkboxcon = styled.label`
    display: flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    font-size: 16px;
  `;

  const CheckboxInput = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #333;
  border-radius: 4px;
  margin-right: 15px;
  &:checked {
    background-color: #696969;
  }
  `;

  const CheckboxLabel = styled.span``;

  const CheckBoxText = styled.p`
    color: #ff9900;
    text-decoration: underline;
     @media (max-width: 480px){
      width:full;
     }
      margin-right:5.5em;
    &:hover{
      cursor:pointer;
    }
  `;


  //agree checkBox
  const AgreeCheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  font-size: 16px;
  margin-left: 4%;
`;

const AgreeCheckboxInput = styled.input`
   
    appearance: none;
    width: 16px;
    height: 16px;
    border: 2px solid #333;
    border-radius: 4px;
    margin-right: 15px;
    &:checked {
      background-color: #696969;
    }
  `;

  const AgreeCheckboxLabel = styled.span``;

  const AgreeCheckBoxText = styled.p`
    color: #ff9900;
    text-decoration: underline;
    
    margin-left:5px;
    &:hover{
      cursor:pointer;
    }
  `;

  // Button

const ButtonContainer=styled.div`
display:flex;
justify-content:center;
align-items:center;
`;


  const BlueButton = styled.button`
  margin-top:20px;
  background-color: #0074e4;
  width:50%;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;


  &:hover {
    background-color: #0050a1; 
  }
`;

//Register
const TextContainer = styled.div`
margin-top:10px;
  text-align: center;
`;

const RegularText = styled.span`
  color: #000; 
`;

const OrangeText = styled.span`
color: #ff9900;
text-decoration: underline;
 &:hover{
  cursor:pointer;
 }
`;

  return (
    <MainDiv>
      <Logo src={LogoSrc} />
      <LoginDiv>
        <Title>Login</Title>
        <LoginLabel>Login ID</LoginLabel>
        <LoginInput type="text" placeholder="Enter Login ID" />
        {/* password block */}
        <PasswordInputContainer>
          <PasswordLabel>Password</PasswordLabel>
          <PasswordInput type="password" placeholder="Enter Password" />
          <EyeIcon>
            <FaEyeSlash />
          </EyeIcon>
        </PasswordInputContainer>

        <CheckboxContainer>
          <Checkboxcon>
            <CheckboxInput type="checkbox" />
            <CheckboxLabel>Remember me</CheckboxLabel>
          </Checkboxcon>
          <CheckBoxText>Change Password</CheckBoxText>
        </CheckboxContainer>

        <AgreeCheckboxContainer>
        <AgreeCheckboxInput type="checkbox" />
            <AgreeCheckboxLabel>Agree to</AgreeCheckboxLabel>
            <AgreeCheckBoxText>Terms & Consitions</AgreeCheckBoxText>
        </AgreeCheckboxContainer>

        <ButtonContainer>
          <BlueButton>Login</BlueButton>
        </ButtonContainer>
        
        <TextContainer>
      <RegularText>Don't have an account?</RegularText>
      <OrangeText>Register Here</OrangeText>
    </TextContainer>
      </LoginDiv>
    </MainDiv>
  );
};

export default App;
