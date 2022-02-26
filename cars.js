class Cars {
    constructor(model, year, capacity, color) {
        this.model = model;
        this.year = year;
        this.capacity = capacity;
        this.color = color;
    }
    showCar() {
        document.write(`Марка авто: ${this.model} <br> Год выпуска: ${this.year} <br> Мощность двигателя: ${this.capacity} <br> Цвет машины: ${this.color}<br> <br>`)
    }
}

class ElectroCars extends Cars {
    constructor(model, year, capacity, color, batteryvolume) {
        super (model, year, capacity, color);
        this.batteryvolume = batteryvolume;
    }

    showCar(){
        super.showCar();
        document.write(`Объем аккумулятора: ${this.batteryvolume} <br>`)
    }
    promote() {
        document.write (`Срочно продается: ${this.model}`)
    }

}
const car = new Cars ("Mersedes", 2010, 2300, "red",  );

const elcar = new ElectroCars ("Hyunday", 2016, 2000, "white", "160mm" );
car.showCar();
elcar.showCar();
elcar.promote();