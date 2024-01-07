class Circle {
    constructor(radius, color) {
        this.radius = 1.0;
        this.color = "red";

        if (radius !== undefined) {
            this.radius = radius;
        }
        if (color !== undefined) {
            this.color = color;
        }
    }

    // Methods
    circle(radius, color) {
        if (radius !== undefined) {
            this.radius = radius;
        }
        if (color !== undefined) {
            this.color = color;
        }
    }

    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

// Example usage
const circle1 = new Circle();
console.log(circle1.toString()); // Output: Circle[radius=1, color=red]

const circle2 = new Circle(3.5);
console.log(circle2.toString()); // Output: Circle[radius=3.5, color=red]

const circle3 = new Circle(2.0, "blue");
console.log(circle3.toString()); // Output: Circle[radius=2, color=blue]

console.log(circle3.getArea()); // Output: Approximately 12.566
console.log(circle3.getCircumference()); // Output: Approximately 12.566

//output:
//Circle[radius=1, color=red]
//Circle[radius=3.5, color=red]
//Circle[radius=2, color=blue]
//12.566370614359172
//12.566370614359172
