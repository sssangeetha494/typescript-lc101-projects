import { SpaceLocation } from "./SpaceLocation";
let kilomitersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
class Spacecraft {
  milesPerKilometer: number = 0.621;
  name: string;
  speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
    let milesAway: number = kilometersAway * this.milesPerKilometer;
    let hours: number = milesAway / this.speedMph;
    return hours / 24;
  }

  printDaysToLocation(location: SpaceLocation) {
    console.log(
      `${this.name} would take ${this.getDaysToLocation(
        location.kilometersAway
      )} days to get to ${location.name}.`
    );
  }
}
// Create an instance of the class here:
let spaceShuttle = new Spacecraft("Determination", 17500);
spaceShuttle.printDaysToLocation(new SpaceLocation("Mars", kilomitersToMars));
spaceShuttle.printDaysToLocation(
  new SpaceLocation("the Moon", kilometersToTheMoon)
);
