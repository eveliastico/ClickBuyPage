document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formRegistroVendedor');
  
  if (!form) {
    console.error('Form not found');
    return;
  }
  
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const fechaNacimiento = document.getElementById('fechaNacimiento');
  const email = document.getElementById('email');
  const nombreTienda = document.getElementById('nombreTienda');
  const rfc = document.getElementById('rfc');
  const telefono = document.getElementById('telefono');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  // Add event listener to the form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the form data
    const vendedorData = {
      nombre: nombre.value.trim(),
      apellido: apellido.value.trim(),
      fechaNacimiento: fechaNacimiento.value,
      email: email.value.trim(),
      nombreTienda: nombreTienda.value.trim(),
      rfc: rfc.value.trim(), // Optional
      telefono: telefono.value.trim(),
      password: password.value,
    };

    // Basic validation
    if (!validateForm(vendedorData, confirmPassword.value)) {
      return;
    }

    // Send the form data to the server
    fetch('/api/vendedores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendedorData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          alert('Registro de vendedor exitoso');
          window.location.href = '/src/components/auth/Login/login.html';
        } else {
          alert(data.message || 'Error al registrar vendedor');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        alert('Error al conectar con el servidor');
      });
  });
});

// Form validation function
function validateForm(vendedorData, confirmPasswordValue) {
  // Check for empty required fields
  const requiredFields = ['nombre', 'apellido', 'fechaNacimiento', 'email', 'nombreTienda', 'telefono', 'password'];
  
  for (const field of requiredFields) {
    if (!vendedorData[field]) {
      alert(`Por favor complete el campo ${field}`);
      return false;
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(vendedorData.email)) {
    alert('Por favor ingrese un correo electrónico válido');
    return false;
  }

  // Phone validation
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(vendedorData.telefono.replace(/\D/g, ''))) {
    alert('Por favor ingrese un número de teléfono válido (10 dígitos)');
    return false;
  }

  // Password validation
  if (vendedorData.password.length < 6) {
    alert('La contraseña debe tener al menos 6 caracteres');
    return false;
  }

  // Confirm password
  if (vendedorData.password !== confirmPasswordValue) {
    alert('Las contraseñas no coinciden');
    return false;
  }

  return true;
}

