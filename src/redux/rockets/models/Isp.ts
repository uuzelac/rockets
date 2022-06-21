interface IspParamsType {
  sea_level?: any;
  vacuum?: any;
}

class Isp {
  seaLevel: number;

  vacuum: number;

  constructor({ sea_level, vacuum }: IspParamsType) {
    this.seaLevel = sea_level;
    this.vacuum = vacuum;
  }
}

export default Isp;
