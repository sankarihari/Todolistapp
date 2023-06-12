// credential verification and callback function 
function login(callback) {
    var username = document.getElementById('username').value;
    var password = document.getElementById('pwd').value;

    if (username === 'admin' && password === '12345') {
      callback(); // Call the provided callback function if login is successful
    } else {
      alert('Invalid login credentials');
    }
  }

  function todopage() {
    window.location.href = 'homepage.html';
  }
