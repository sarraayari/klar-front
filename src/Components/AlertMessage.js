import Alert from 'react-bootstrap/Alert';
import Header from './Header';


function AlertMessage() {
  return (
    <>
      <Header/>
      {[
        'info'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          Your submission has been received !
        </Alert>
      ))}
    </>
  );
}

export default AlertMessage;