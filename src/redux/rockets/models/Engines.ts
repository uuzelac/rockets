import Isp from './Isp';
import Thrust from './Thrust';

interface EnginesParamsType {
  isp?: any;
  thrust_sea_level?: any;
  thrust_vacuum?: any;
  number?: any;
  type?: any;
  version?: any;
  layout?: any;
  engine_loss_max?: any;
  propellant_1?: any;
  propellant_2?: any;
  thrust_to_weight?: any;
}

class Engines {
  isp: Isp;
  thrustSeaLevel: Thrust;
  thrustVacuum: Thrust;
  number: number;
  type: string;
  version: string;
  layout: string;
  engineLossMax: number;
  propellant1: string;
  propellant2: string;
  thrustToWeight: number;

  constructor({
    isp,
    thrust_sea_level,
    thrust_vacuum,
    number,
    type,
    version,
    layout,
    engine_loss_max,
    propellant_1,
    propellant_2,
    thrust_to_weight,
  }: EnginesParamsType) {
    this.isp = new Isp(isp);
    this.thrustSeaLevel = new Thrust(thrust_sea_level);
    this.thrustVacuum = new Thrust(thrust_vacuum);
    this.number = number;
    this.type = type;
    this.version = version;
    this.layout = layout;
    this.engineLossMax = engine_loss_max;
    this.propellant1 = propellant_1;
    this.propellant2 = propellant_2;
    this.thrustToWeight = thrust_to_weight;
  }
}

export default Engines;
