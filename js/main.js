document.addEventListener('DOMContentLoaded', function () {
    let rightsReservedEl = document.getElementById("rights-reserved");
    const today = new Date();
    rightsReservedEl.textContent = `Todos os direitos reservados, ©Fibraminas, ${today.getFullYear()}.`
}, false);