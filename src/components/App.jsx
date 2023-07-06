export const App = () => {

  // https://64a5c48300c3559aa9c029b1.mockapi.io


  fetch('https://64a5c48300c3559aa9c029b1.mockapi.io/contacts ', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return  console.log (res );res.json();
    }
    // handle error
  }).then(tasks => {
    // Do something with the list of tasks
  }).catch(error => {
    // handle error
  })

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div>
  );
};
