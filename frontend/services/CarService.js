class CarService {
    constructor() {
        this.URI = '/api/carros';
      
    }

    async  getCars(){
        const response = await fetch(this.URI)
          return  response.json();
        
    }

    async postCars(car){
        const res = await fetch(this.URI, {
            method: 'POST',
            body: car,
        });
        const data = await res.json();
        console.log(data);
    }

    async deleteCar(carId){
        const res = await fetch(`${this.URI}/${carId}`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
        });
        const data = await res.json();
        console.log(data);
    }
}

export default CarService;