import Lenght from './Lenght';
import Mass from './Mass';
import FirstStage from './FirstStage';
import SecondStage from './SecondStage';
import Engines from './Engines';
import LandingLegs from './LandingLegs';
import PayloadWeight from './PayloadWeight';

interface RocketParamsType {
  height?: any;
  diameter?: any;
  mass?: any;
  first_stage?: any;
  second_stage?: any;
  engines?: any;
  landing_legs?: any;
  payload_weights?: any;
  flickr_images?: any;
  name?: any;
  type?: any;
  active?: any;
  stages?: any;
  boosters?: any;
  cost_per_launch?: any;
  success_rate_pct?: any;
  first_flight?: any;
  country?: any;
  company?: any;
  wikipedia?: any;
  description?: any;
  id?: any;
}

class Rocket {
  height: Lenght;

  diameter: Lenght;

  mass: Mass;

  firstStage: FirstStage;

  secondStage: SecondStage;

  engines: Engines;

  landingLegs: LandingLegs;

  payloadWeights: PayloadWeight[];

  flickrImages: string[];

  name: string;

  type: string;

  active: boolean;

  stages: number;

  boosters: number;

  costPerLaunch: number;

  successRatePct: number;

  firstFlight: string;

  country: string;

  company: string;

  wikipedia: string;

  description: string;

  id: string;

  constructor({
    height,
    diameter,
    mass,
    first_stage,
    second_stage,
    engines,
    landing_legs,
    payload_weights,
    flickr_images,
    name,
    type,
    active,
    stages,
    boosters,
    cost_per_launch,
    success_rate_pct,
    first_flight,
    country,
    company,
    wikipedia,
    description,
    id,
  }: RocketParamsType) {
    this.height = new Lenght(height);
    this.diameter = new Lenght(diameter);
    this.mass = new Mass(mass);
    this.firstStage = new FirstStage(first_stage);
    this.secondStage = new SecondStage(second_stage);
    this.engines = new Engines(engines);
    this.landingLegs = new LandingLegs(landing_legs);
    this.payloadWeights = payload_weights.map((weight: PayloadWeight) => new PayloadWeight(weight));
    this.flickrImages = flickr_images.map((image: string) => image);
    this.name = name;
    this.type = type;
    this.active = active;
    this.stages = stages;
    this.boosters = boosters;
    this.costPerLaunch = cost_per_launch;
    this.successRatePct = success_rate_pct;
    this.firstFlight = first_flight;
    this.country = country;
    this.company = company;
    this.wikipedia = wikipedia;
    this.description = description;
    this.id = id;
  }
}

export default Rocket;
