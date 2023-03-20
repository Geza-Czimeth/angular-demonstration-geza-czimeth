export class Car {
  public name: string;
  public type: string;
  public speed: number;
  public imagePath: string;

  constructor(name: string, type: string, speed: number, imagePath: string) {
    this.name = name;
    this.type = type;
    this.speed = speed;
    this.imagePath = imagePath;
  }
}
