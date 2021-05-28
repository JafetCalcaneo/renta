import CarService from './services/CarService';
const carService = new CarService();

import { format } from 'timeago.js';

class UI {
    async renderCars() {
        const cars = await carService.getCars();
        const carsCardContainer = document.getElementById('carros-cards');
        carsCardContainer.innerHTML = '';
        cars.forEach(car => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `
                <div class="card m-2">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${car.imagePath}" alt="" class="img-fluid" />
                        </div>
                        <div class="col-md-8">
                            <div class="card-block px-2">
                                <h4 class="card-title">${car.nombre}</h4>
                                <p class="card-text">Agencia: ${car.marca}</p>
                                <p class="card-text">Color: ${car.color}</p>
                                <p class="card-text">Matricula: ${car.matricula}</p>
                                <a href="#" class="btn btn-danger delete" _id="${car._id}">X</a>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer">
                        Precio
                        ${car.precio}$
                    </div>
                </div>
            `;
            carsCardContainer.appendChild(div);
        });
        console.log(cars);
    }

    async addNewCar(car) {
        await carService.postCars(car);
        this.clearCarForm();
        this.renderCars();
    }

    clearCarForm() {
        document.getElementById('car-form').reset();
    }

    renderMessage(message, colorMessage, secondsToRemove) {
        const div = document.createElement('div');
        div.className = `alert alert-${colorMessage} message`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.col-md-4');
        const carForm = document.querySelector('#car-form');

        container.insertBefore(div, carForm);
        console.log('Render UI');
        setTimeout(() => {
            document.querySelector('.message').remove();
        }, secondsToRemove);

    }

    async deleteCar(carId) {
        await carService.deleteCar(carId);
        this.renderCars();
    }

  
}

export default UI;