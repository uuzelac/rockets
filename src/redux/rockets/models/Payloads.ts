import CompositeFairing from './CompositeFairing';

interface PayloadsParamsType {
  composite_fairing?: any;
  option_1?: any;
}

class Payloads {
  compositeFairing: CompositeFairing;

  option1: string;

  constructor({ composite_fairing, option_1 }: PayloadsParamsType) {
    this.compositeFairing = new CompositeFairing(composite_fairing);
    this.option1 = option_1;
  }
}

export default Payloads;
