import Thrust from './Thrust';
import Payloads from './Payloads';

interface SecondStageParamsType {
  thrust?: any;
  payloads?: any;
  reusable?: any;
  engines?: any;
  fuel_amount_tons?: any;
  burn_time_sec?: any;
}

class SecondStage {
  thrust: Thrust;

  payloads: Payloads;

  reusable: boolean;

  engines: number;

  fuelAmountTons: number;

  burnTimeSec: number;

  constructor({
    thrust,
    payloads,
    reusable,
    engines,
    fuel_amount_tons,
    burn_time_sec,
  }: SecondStageParamsType) {
    this.thrust = new Thrust(thrust);
    this.payloads = new Payloads(payloads);
    this.reusable = reusable;
    this.engines = engines;
    this.fuelAmountTons = fuel_amount_tons;
    this.burnTimeSec = burn_time_sec;
  }
}

export default SecondStage;
