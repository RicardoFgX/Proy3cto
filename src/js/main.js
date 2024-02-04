// Import our custom CSS
import '../scss/styles.scss'

$(document).ready(function () {
    // Al pasar el ratón sobre un elemento, cambia el color
    $('#categorias ul.list-unstyled li').on('mouseenter', function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('hovered');
        }
    });

    // Al salir del ratón de un elemento, restaura el color original si no está activo
    $('#categorias ul.list-unstyled li').on('mouseleave', function () {
        if (!$(this).hasClass('active')) {
            $(this).removeClass('hovered');
        }
    });

    // Al hacer clic en un elemento, cambia el color y desactiva el color de otros elementos
    $('#categorias ul.list-unstyled li').on('click', function () {
        // Elimina la clase hovered de todos los elementos
        $('#categorias ul.list-unstyled li').removeClass('hovered');

        // Cambia el color y marca como activo el elemento clicado
        $(this).addClass('active').siblings().removeClass('active');
    });
});

$(document).ready(function () {
    // Btn para desmarcar opciones
    $("#desmarcarBtn").on("click", function () {
      // Desmarca los radio buttons
      $("input[name='filtrado1']").prop("checked", false);

      // Restablece el valor predeterminado del rango de precio
      $("#precio").val(50);

      // Desmarca la categoría
      $("#categoria a").removeClass("active");
    });
  });

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

// Evento click del boton campana
document.getElementById('activarToast').addEventListener('click', function () {
    mostrarToast('¡Tienes 0 notificaciones!', 'bg-success', 'text-light', 3000);
});

// Función para mostrar el Toast
function mostrarToast(mensaje, colorFondo, colorTexto, duracion) {
    var toastContainer = document.getElementById('toast-container');

    // Crea el elemento Toast
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.classList.add(colorFondo, colorTexto);
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    // Crea el cuerpo del Toast
    var toastBody = document.createElement('div');
    toastBody.className = 'toast-body';
    toastBody.textContent = mensaje;

    // Agrega el cuerpo al Toast
    toast.appendChild(toastBody);

    // Agrega el Toast al contenedor
    toastContainer.appendChild(toast);

    // Crea el objeto Toast de Bootstrap y muestra
    var bootstrapToast = new bootstrap.Toast(toast);
    bootstrapToast.show();

    // Oculta el Toast después de la duración especificada
    setTimeout(function() {
        bootstrapToast.hide();
    }, duracion);
}