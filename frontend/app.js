import './styles/app.css';
import UI from './UI';

document.addEventListener('DOMContentLoaded', () => {
    const ui = new UI();
    ui.renderCars();
})

document.getElementById('car-form')
.addEventListener('submit', e => {
    const nombre = document.getElementById('nombre').value;
    const marca = document.getElementById('marca').value;
    const color = document.getElementById('color').value;
    const matricula = document.getElementById('matricula').value;
    const precio = document.getElementById('precio').value;
    const image = document.getElementById('image').files;
    console.log(image, 'Imagen ');

    const formData = new FormData();
    formData.append('image', image[0]);
    console.log(formData.get(image));
    formData.append('nombre', nombre);
    formData.append('marca', marca);
    formData.append('color', color);
    formData.append('matricula', matricula);
    formData.append('precio', precio);

    const ui = new UI();
    ui.addNewCar(formData);
    ui.renderMessage('New Car Added', 'success', 3000);

    e.preventDefault();
});

document.getElementById('carros-cards')
.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        const ui = new UI();
        ui.deleteCar(e.target.getAttribute('_id'));
        ui.renderMessage('Car Deleted', 'danger', 3000);
    }
    e.preventDefault();
});
