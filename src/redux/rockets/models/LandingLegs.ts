interface LandingLegsParamsType {
  number?: any;
  material?: any;
}

class LandingLegs {
  number: number;

  material: string;

  constructor({ number, material }: LandingLegsParamsType) {
    this.number = number;
    this.material = material;
  }
}

export default LandingLegs;
