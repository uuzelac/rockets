interface LenghtParamsType {
  meters?: any;
  feet?: any;
}

class Lenght {
  meters: number;

  feet: number;

  constructor({ meters, feet }: LenghtParamsType) {
    this.meters = meters;
    this.feet = feet;
  }
}

export default Lenght;
