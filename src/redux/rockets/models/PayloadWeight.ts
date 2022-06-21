interface PayloadWeightParamsType {
  id?: any;
  name?: any;
  kg?: any;
  lb?: any;
}

class PayloadWeight {
  id: string;

  name: string;

  kg: number;

  lb: number;

  constructor({ id, name, kg, lb }: PayloadWeightParamsType) {
    this.id = id;
    this.name = name;
    this.kg = kg;
    this.lb = lb;
  }
}

export default PayloadWeight;
