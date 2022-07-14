import styled from "styled-components";

//
//
//

const Mail = styled.div`
  max-width: 1024px;
  width: 90%;

  margin-top: 50px;
  padding: 50px;

  background-color: #003580;
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1``;

const Desc = styled.span``;

const InputContainer = styled.div``;

const Input = styled.input`
  width: 300px;
  height: 30px;

  padding: 10px;
  margin-right: 10px;

  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  height: 50px;
  background-color: #0071c2;
  color: white;
  font-weight: 500;

  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const MailList = () => {
  return (
    <Mail>
      <Title>Save time, save money!</Title>
      <Desc>Sign up and we'll send the best deals to you</Desc>
      <InputContainer>
        <Input type="text" placeholder="Your Email" />
        <Button>Subscribe</Button>
      </InputContainer>
    </Mail>
  );
};

export default MailList;
