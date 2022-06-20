import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Logar = () => {
  return (
    <>
      <Form className="box">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSsn">
          <Form.Label>CPF</Form.Label>
          <Form.Control type="ssn" placeholder="CPF" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Logar
        </Button>
      </Form>
    </>
  );
}