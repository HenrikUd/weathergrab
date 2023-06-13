import { AnyARecord } from "dns"




interface Forcities {




  stateforecast: {

    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  statecur1: {

    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  
  statecursearch: {
    
    length: number;
    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  
  statecursearch2: {
    length: number;
    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  statecursearch3: {
    length: number;
    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  statecursearch4: {
    length: number;
    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  statecursearch5: {
    length: number;
    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  statecursearch6: {
    length: number;
    forecast: {

      forecastday: {
        [index: string]: any
        day: {
          mintemp_c: number;
        }


      }
    }

    current: {
      wind_kph: number;
      temp_c: number;
      condition: {
        icon: string;
        text: string;
      }
    }
    location: {
      name: string;
    }
  }
  src: string | undefined;
  alt: string | undefined;


  TallinnTemps: Array<string>;
  updateCurSearch: React.Dispatch<React.SetStateAction<string>>;
  updateCurSearch2: React.Dispatch<React.SetStateAction<string>>;
  updateCurSearch3: React.Dispatch<React.SetStateAction<string>>;
  updateCurSearch4: React.Dispatch<React.SetStateAction<string>>;
  updateCurSearch5: React.Dispatch<React.SetStateAction<string>>;
  updateCurSearch6: React.Dispatch<React.SetStateAction<string>>;
}



export default Forcities;