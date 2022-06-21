import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";

export const Logar = () => {
  
  let navigate = useNavigate();

  function handleClick() {
    navigate("/home")
  }
  return (
    <>
      <Form className="box">
        <h4 style={{ color: 'black' }}>Conect-se</h4>        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar" />
        </Form.Group>
        <Button variant="dark" type="submit" onClick={handleClick}>Logar
        </Button>
      </Form>
    </>
  );
}