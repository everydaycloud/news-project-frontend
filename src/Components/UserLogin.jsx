import { useNavigate } from 'react-router-dom';

function MyComponent() {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    doSomething()
      .then(() => {
        navigate('/somewhere/else');
      })
      .catch((err) => {
        // handle error
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* labels, inputs and form things... */}
    </form>
  );
}