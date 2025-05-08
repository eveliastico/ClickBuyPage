

class ModalRegistro {
    constructor() {
      this.modal = document.getElementById('modalRegistro');
      this.btnUsuario = document.getElementById('btnUsuario');
      this.btnVendedor = document.getElementById('btnVendedor');
      this.init();
    }
  
    init() {
      document.getElementById('abrirModal').addEventListener('click', () => {
        this.modal.style.display = 'flex';
      });
  
      this.btnUsuario.addEventListener('click', () => {
        window.location.href = 'src/components/auth/Register/registroUsuario.html';
      });
  
      this.btnVendedor.addEventListener('click', () => {
        window.location.href = 'src/components/auth/Register/registroVendedor.html';
      });
  
      window.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.modal.style.display = 'none';
        }
      });
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    new ModalRegistro();
  });
  