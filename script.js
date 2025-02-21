document.getElementById('nameForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const name = document.getElementById('nameInput').value;

    
    document.getElementById('message').innerHTML = `Merhaba, ${name}!`;
});