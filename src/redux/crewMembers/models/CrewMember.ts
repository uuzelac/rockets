interface CrewMemberParamsType {
  name?: any;
  agency?: any;
  image?: any;
  wikipedia?: any;
  launches?: any;
  status?: any;
  id?: any;
}

class CrewMember {
  name: string;

  agency: string;

  image: string;

  wikipedia: string;

  launches: string[];

  status: string;

  id: string;

  constructor({ name, agency, image, wikipedia, launches, status, id }: CrewMemberParamsType) {
    this.name = name;
    this.agency = agency;
    this.image = image;
    this.wikipedia = wikipedia;
    this.launches = launches.map((launch: string) => launch);
    this.status = status;
    this.id = id;
  }
}

export default CrewMember;
