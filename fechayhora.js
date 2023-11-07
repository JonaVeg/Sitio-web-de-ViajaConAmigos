        function actualizarFechaHora() {
            const elementoFechaHora = document.getElementById("fecha-hora");
            const fechaActual = new Date();
            const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            const fechaHoraFormateada = fechaActual.toLocaleDateString('es-ES', options);
            elementoFechaHora.textContent = "" + fechaHoraFormateada;
        }

        setInterval(actualizarFechaHora, 1000);

        actualizarFechaHora();
