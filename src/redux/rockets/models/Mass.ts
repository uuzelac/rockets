interface MassParamsType {
  kg?: any;
  lb?: any;
}

class Mass {
  kg: number;

  lb: number;

  constructor({ kg, lb }: MassParamsType) {
    this.kg = kg;
    this.lb = lb;
  }
}

export default Mass;
