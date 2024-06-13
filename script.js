document.getElementById('btnIngresar').addEventListener('click', function() {
  let nombre = document.getElementById('txtNombre').value;
  let edad = document.getElementById('txtEdad').value;
  let especialidad = document.getElementById('cmbEspecialidad').value;
  let doctor = document.getElementById('cmbDoctor').value;

  if (nombre && edad && especialidad && doctor) {
    // Guardar los datos en el localStorage
    let citas = JSON.parse(localStorage.getItem('citas')) || [];
    citas.push({ nombre, edad, especialidad, doctor });
    localStorage.setItem('citas', JSON.stringify(citas));
    
    alert('Cita guardada con éxito');

    // Mostrar los datos en la pantalla de registro
    document.getElementById('lblNombre').textContent = nombre;
    document.getElementById('lblEdad').textContent = edad;
    document.getElementById('lblEspecialidad').textContent = especialidad;
    document.getElementById('lblDoctor').textContent = doctor;

    document.getElementById('Pantalla_Inicio').style.display = 'none';
    document.getElementById('Pantalla_Registro').style.display = 'block';
  } else {
    alert('Por favor complete todos los campos');
  }
});

document.getElementById('btnVolver').addEventListener('click', function() {
  document.getElementById('Pantalla_Registro').style.display = 'none';
  document.getElementById('Pantalla_Inicio').style.display = 'block';
});

document.getElementById('btnBusqueda').addEventListener('click', function() {
  window.location.href = 'busqueda.html';
});
