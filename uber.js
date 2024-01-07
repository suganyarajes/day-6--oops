class UberPriceCalculator {
    constructor(distanceInKm, timeInMinutes, serviceType = 'UberX') {
        this.distanceInKm = distanceInKm;
        this.timeInMinutes = timeInMinutes;
        this.serviceType = serviceType.toLowerCase();
    }

    calculatePrice() {
        const baseFare = this.getBaseFare();
        const distanceFare = this.getDistanceFare();
        const timeFare = this.getTimeFare();

        return baseFare + distanceFare + timeFare;
    }

    getBaseFare() {
        const baseFares = {
            'uberx': 5,
            'uberxl': 8,
            'uberblack': 15
           
        };

        return baseFares[this.serviceType] || 5; 
    }

    getDistanceFare() {
        // Assume a flat rate per kilometer
        const ratePerKm = 1.5;
        return this.distanceInKm * ratePerKm;
    }

    getTimeFare() {
        // Assume a flat rate per minute
        const ratePerMinute = 0.2;
        return this.timeInMinutes * ratePerMinute;
    }
}

// Example usage
const uberXCalculator = new UberPriceCalculator(10, 15, 'UberX');
console.log('UberX Price:', uberXCalculator.calculatePrice());

const uberBlackCalculator = new UberPriceCalculator(10, 15, 'UberBlack');
console.log('UberBlack Price:', uberBlackCalculator.calculatePrice());

//output:
//UberX Price: 23 
//UberBlack Price: 33