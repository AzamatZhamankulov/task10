class Restaurant {
    constructor(name, cusineType, served = 0) {
        this.name = name;
        this.cusineType = cusineType;
        this.served = served;
    }

    showInfo() {
        return `${this.name} is a restaurant of ${this.cusineType} meal.`;
    }

    isOpen() {
        let currentHour = new Date().getHours();
        let currentDay = 0;

        if(currentDay === 6 || currentDay === 0) {
            return`${this.name} is closed`;
        } else {
            if(currentHour > 9 && currentHour < 22) {
                return `${this.name} is open`;
            } else {
                return `${this.name} is closed`;
            }
        }
        
        
    }

    serve() {
        return `${this.served += 1}`
    };

    setServed() {
        return Math.floor(num);
    }

    showTotalServed () {
        return Math.floor(num + (this.serve() - 1))
    }
}

const beshBarmak = new Restaurant("Besh Barmak", "kyrgyz");
const num = 20

document.write(beshBarmak.showInfo() + '<br>');
document.write(beshBarmak.isOpen() + '<br>');
document.write('Количество посетителей:' + ' ' + beshBarmak.serve() 
+ '<br>');
document.write('Общее число посетителей:' + ' ' + beshBarmak.showTotalServed() + '<hr>'
);


