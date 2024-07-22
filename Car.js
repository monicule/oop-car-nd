export class Car {
    constructor(pavadinimas, modelis, spalva, kuroBakoTalpa, vidutinesKuroSanaudos) {
        this.brandName = pavadinimas;
        this.model = modelis;
        this.color = spalva;
        this.fuelTankCapacity = kuroBakoTalpa;
        this.averageFuelConsumption = vidutinesKuroSanaudos;
        this.fuelInTank = this.fuelTankCapacity;
        this.engineOn = false;
        this.speed = 0;        
    }
    
    startTheEngine() {
        if (this.engineOn === true) {
            return 'Įjungto variklio dar kartą įjungti negalima, sugadinsite starterį!';
        }
        this.engineOn = true;
            return 'Variklis yra įjungtas.';
        }

    turnOffTheEngine() {
        if (this.engineOn === false) {
            return 'Variklis jau yra išjungtas. Pakartotinai išjungti negalima.';
        } else if (this.speed !==0) {
            return 'Variklį išjungti galima tik automobiliui sustojus!';
        } 
        this.engineOn = false;
            return 'Variklis yra išjungtas.';
        }

    beginToDrive() {
        if (this.engineOn === false) {
            return 'Įjunkite variklį.'
        }
        if (this.speed !==0) {
            return 'Pajudėjome iš vietos';
        }
        if (this.fuelInTank < 2 * this.averageFuelConsumption) {
            return 'Nepakanka kuro';
        }
        this.speed = 10;
        this.fuelInTank = `${this.fuelInTank} - ${this.averageFuelConsumption * 2}l`;
        return `Pajudėjome iš vietos. Greitis: ${this.speed}km/h. Kuro sanaudos: ${this.averageFuelConsumption * 2}l/100km.`;
    }

    drive() {
        if (this.speed === 0) {
            return 'Pajudėkite iš vietos';
        }
        if (this.fuelInTank < this.averageFuelConsumption) {
            return 'Reikia įpilti kuro.';
        }
        this.fuelInTank = `${this.fuelInTank} - ${this.averageFuelConsumption}l`;     
            return `Važiuojam! Kuro sanaudos: ${this.averageFuelConsumption}l/100km.`;
        }

    stopDriving() {
        if (this.speed === 0) {
            return 'Jau stovime!';
        }
        this.speed = 0;
        return `Greitis: ${this.speed}km/h. Sustojome.`;
        }
    

    fuelLeft() {
        return `Kuro likutis bake: ${this.fuelInTank}l.`;
    }

    refuel(l) {
        if (this.engineOn === true) {
            return 'Prieš pilant kurą išjunkite variklį.';
        }
        if (this.speed !==0) {
            return 'Prieš pilant kurą turite sustoti.';
        }
        if (this.fuelInTank === this.fuelTankCapacity) {
            return 'Kuro bakas yra pilnas.';
        }
        if (this.fuelInTank + l < this.fuelTankCapacity) {
        return `Reikia įpilti: ${this.fuelTankCapacity-(this.fuelInTank-this.averageFuelConsumption)}l.`;
        }
    }
}