import Alert from 'react-bootstrap/Alert';
import Header from './Header';


function AlertLogin() {
  return (
    <>
   
      {[
        'info'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Check your credentials
        </Alert>
      ))}
    </>
  );
}

export default AlertLogin;