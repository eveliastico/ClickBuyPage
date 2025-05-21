document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registroForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // Captura de datos
      const nombres = form.nombres.value.trim();
      const apellidos = form.apellidos.value.trim();
      const fechaNacimiento = form.fechaNacimiento.value;
      const telefono = form.telefono.value.trim();
      const email = form.email.value.trim();
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;
  
      // Validación básica
      if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        return;
      }
  
      const nuevoUsuario = {
        nombres,
        apellidos,
        fechaNacimiento,
        telefono,
        email,
        password
      };
  
      // Placeholder para enviar a una base de datos real (implementación futura)
      fetch('/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoUsuario)
      })
      .then(res => {
        if (!res.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        return res.json();
      })
      .then(data => {
        alert('Usuario registrado correctamente');
        console.log('Respuesta del servidor:', data);
        form.reset();
      })
      .catch(error => {
        console.error('Error al registrar usuario:', error);
        alert('Hubo un problema al registrar. Intenta más tarde.');
      });
    });
  });
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Captura de datos
    const nombres = form.nombres.value.trim();
    const apellidos = form.apellidos.value.trim();
    const fechaNacimiento = form.fechaNacimiento.value;
    const telefono = form.telefono.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // Validación básica
    if (nombres === '') {
      alert('Por favor, ingresa tus nombres.');
      return;
    }

    if (apellidos === '') {
      alert('Por favor, ingresa tus apellidos.');
      return;
    }

    if (fechaNacimiento === '') {
      alert('Por favor, ingresa tu fecha de nacimiento.');
      return;
    }

    if (telefono === '') {
      alert('Por favor, ingresa tu teléfono.');
      return;
    }

    if (email === '') {
      alert('Por favor, ingresa tu correo electrónico.');
      return;
    }

    if (password === '') {
      alert('Por favor, ingresa tu contraseña.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const nuevoUsuario = {
      nombres,
      apellidos,
      fechaNacimiento,
      telefono,
      email,
      password
    };

    // Placeholder para enviar a una base de datos real (implementación futura)
    fetch('/api/registro', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoUsuario)
    })
    .then(res => {
      if (!res.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      return res.json();
    })
    .then(data => {
      alert('Usuario registrado correctamente');
      console.log('Respuesta del servidor:', data);
      form.reset();
    })
    .catch(error => {
      console.error('Error al registrar usuario:', error);
      alert('Hubo un problema al registrar. Intenta más tarde.');
    });
  });
});  