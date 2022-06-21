interface ThrustParamsType {
  kN?: any;
  lbf?: any;
}

class Thrust {
  kN: number;

  lbf: number;

  constructor({ kN, lbf }: ThrustParamsType) {
    this.kN = kN;
    this.lbf = lbf;
  }
}

export default Thrust;
