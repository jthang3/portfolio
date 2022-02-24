import Button from '@mui/material/Button';
import styled from "styled-components";
import "./Contact.css";
const Section = styled.section`
    background-color: #252839;
    opacity: 0.87;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`
    width: 80%;
    margin: auto;
    color: white;
    border: 2px solid white;
    border-radius: 15px;
    height: 80%;
    align-items: center;
    display: flex;
    justify-content: center;
    align-item: center;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 30px;
`;

const Form = styled.form`
    width: 100%;
    margin: auto;
    margin-top: 10px;
`;
const FormGroup = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 50%;
    margin: auto;
    height: 30px;
    font-weight: bold;
    padding: 20px;
    border-radius: 10px;
`

const TextArea = styled.textarea`
    width: 50%;
    height: 200px;
    font-weight: bold;
    margin: auto;
    border-radius: 10px;
    padding:20px;
`

const Contact = () => {
    return(
    <Section>
      <Container>
          <div className = "second-container">
            <Title>Email me for more information!</Title>
                <Form action="https://formspree.io/xrgybrdw" method="POST">
                    <FormGroup>
                        <Input type = "email" placeholder='email address..' name = "_replyto" />
                    </FormGroup>
                    <FormGroup>
                        <TextArea name="message" placeholder='your message..'></TextArea>
                    </FormGroup>
                    <FormGroup>
                        <Button id = "btn" type = "submit" variant="contained" color="success">
                                SEND
                        </Button> 
                    </FormGroup>
                </Form>
          </div>
      </Container>
    </Section>
    )
}

export default Contact;