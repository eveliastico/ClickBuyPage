document.addEventListener("DOMContentLoaded", function() {
    const registerBtn = document.getElementById("registerBtn");
    const dialog = document.getElementById("registerModal");
    const closeDialog = document.getElementById("closeModal");

    registerBtn.onclick = ()=> {
        dialog.showModal();        
    }
    closeDialog.onclick = ()=> {
        dialog.classList.add('close-animate');
        setTimeout(()=> {
            dialog.close();
            dialog.classList.remove('close-animate');
        }, 100)
    }

});