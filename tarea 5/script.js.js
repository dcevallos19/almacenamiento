const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const email = document.getElementById("email").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const telefono = document.getElementById("telefono").value.trim();

    // Validaciones
    if (!nombre) {
        alert("El nombre es obligatorio.");
        return;
    }

    if (!edad || isNaN(edad) || parseInt(edad) <= 0) {
        alert("La edad debe ser un número positivo.");
        return;
    }

    if (!email || !validateEmail(email)) {
        alert("El email no es válido.");
        return;
    }

    if (!direccion) {
        alert("La dirección es obligatoria.");
        return;
    }

    if (!telefono) {
        alert("El teléfono es obligatorio.");
        return;
    }

    const data = {
        nombre: nombre,
        edad: edad,
        email: email,
        direccion: direccion,
        telefono: telefono
    };

    // Guardar en LocalStorage
    localStorage.setItem("formData", JSON.stringify(data));

    // Imprimir los datos en la consola
    console.log("Datos guardados en LocalStorage:", data);
    console.log("Datos recuperados de LocalStorage:", JSON.parse(localStorage.getItem("formData")));

    alert("Datos guardados correctamente en LocalStorage");
    form.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
