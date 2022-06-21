import Lenght from './Lenght';

interface CompositeFairingParamsType {
    height?: any;
    diameter?: any;
  }
  
  class CompositeFairing {
    height: Lenght;
  
    diameter: Lenght;
  
    constructor({ height, diameter }: CompositeFairingParamsType) {
      this.height = new Lenght(height);
      this.diameter = new Lenght(diameter);
    }
  }
  
  export default CompositeFairing;