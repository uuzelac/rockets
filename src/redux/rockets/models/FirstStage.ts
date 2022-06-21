import Thrust from './Thrust';

interface FirstStageParamsType {
  thrust_sea_level?: any;
  thrust_vacuum?: any;
  reusable?: any;
  engines?: any;
  fuel_amount_tons?: any;
  burn_time_sec?: any;
}

class FirstStage {
  thrustSeaLevel: Thrust;

  thrustVacuum: Thrust;

  reusable: boolean;

  engines: number;

  fuelAmountTons: number;

  burnTimeSec: number;

  constructor({
    thrust_sea_level,
    thrust_vacuum,
    reusable,
    engines,
    fuel_amount_tons,
    burn_time_sec,
  }: FirstStageParamsType) {
    this.thrustSeaLevel = new Thrust(thrust_sea_level);
    this.thrustVacuum = new Thrust(thrust_vacuum);
    this.reusable = reusable;
    this.engines = engines;
    this.fuelAmountTons = fuel_amount_tons;
    this.burnTimeSec = burn_time_sec;
  }
}

export default FirstStage;
