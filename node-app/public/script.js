document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Guardar los datos en el almacenamiento local
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    // Mostrar los datos guardados
    displayData();
});

function displayData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');

    if (name && email) {
        document.getElementById('dataOutput').innerHTML = `
            <h2>Datos Guardados:</h2>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Correo Electrónico:</strong> ${email}</p>
        `;
    }
}

// Mostrar los datos guardados cuando se carga la página
document.addEventListener('DOMContentLoaded', displayData);
