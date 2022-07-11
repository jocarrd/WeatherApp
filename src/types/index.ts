 export type TContext={
    prediction:{
      current: {
        dt: number,
        temperature : number
        description: string,
        icon: string,
        humidity: number,
        windSpeed: number,
        windDeg: number,
        pressure: number,
        dewPoint: number,
        feelsLike: number,}
      daily:Array<{ 
        dayName: string
        dayNumber: number
        icon: string
        temp:{
        max: number
        min: number
        }
        dt: number
        weather: Array<{icon: string}>}>
    },
    setPrediction: Function,
    location:string,
    setLocation: Function
  }
  

   export interface IDayPrediction {
    dayName: string;
    dayNumber: number;
    icon: string;
    tempMax: number;
    tempMin: number;
  }

   export interface IWeatherCard {
    location: string;
    current: {
      temperature: number;
      icon: string;
      description: string;
      dt: number;
      windSpeed: number;
      humidity: number;
    };
    dailyPrediction: Array<{
      temp: {
        min: number;
        max: number;
      };
      dt: number;
      weather: Array<{ icon: string }>;
    }>;
    loading: boolean;
  }


  
 
  