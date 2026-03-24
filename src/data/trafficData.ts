// Real Bengaluru traffic & weather dataset stats (8,936 traffic records, 8,000 weather records)

export const AREA_STATS = [
  { name: "Koramangala", avgVolume: 40832, avgSpeed: 36.1, congestion: 94.0 },
  { name: "M.G. Road", avgVolume: 35300, avgSpeed: 37.5, congestion: 90.6 },
  { name: "Indiranagar", avgVolume: 32284, avgSpeed: 38.6, congestion: 87.6 },
  { name: "Hebbal", avgVolume: 26533, avgSpeed: 40.1, congestion: 80.1 },
  { name: "Jayanagar", avgVolume: 24601, avgSpeed: 39.8, congestion: 77.0 },
  { name: "Whitefield", avgVolume: 21295, avgSpeed: 42.1, congestion: 69.1 },
  { name: "Yeshwanthpur", avgVolume: 18932, avgSpeed: 43.4, congestion: 62.4 },
  { name: "Electronic City", avgVolume: 16347, avgSpeed: 43.7, congestion: 54.5 },
];

export const ROAD_STATS = [
  { name: "Sony World Jn", avgVolume: 41471, congestion: 94.1 },
  { name: "Sarjapur Road", avgVolume: 40190, congestion: 93.8 },
  { name: "Trinity Circle", avgVolume: 35350, congestion: 90.4 },
  { name: "Anil Kumble Circle", avgVolume: 35252, congestion: 90.8 },
  { name: "CMH Road", avgVolume: 32612, congestion: 88.2 },
  { name: "100 Feet Road", avgVolume: 31957, congestion: 87.1 },
  { name: "Hebbal Flyover", avgVolume: 26795, congestion: 80.7 },
  { name: "Ballari Road", avgVolume: 26273, congestion: 79.5 },
  { name: "South End Circle", avgVolume: 24704, congestion: 77.3 },
  { name: "Jayanagar 4th Block", avgVolume: 24496, congestion: 76.7 },
  { name: "ITPL Main Road", avgVolume: 21866, congestion: 71.1 },
  { name: "Marathahalli Bridge", avgVolume: 20773, congestion: 67.2 },
  { name: "Yeshwanthpur Circle", avgVolume: 19277, congestion: 63.7 },
  { name: "Tumkur Road", avgVolume: 18574, congestion: 61.0 },
  { name: "Hosur Road", avgVolume: 16557, congestion: 55.2 },
];

export const MONTHLY_TRENDS = [
  { month: "Jan", avgVolume: 29252, congestion: 79.3, avgSpeed: 40.1, envImpact: 108.5, incidents: 435 },
  { month: "Feb", avgVolume: 28420, congestion: 80.4, avgSpeed: 38.9, envImpact: 106.8, incidents: 424 },
  { month: "Mar", avgVolume: 29850, congestion: 81.5, avgSpeed: 40.3, envImpact: 109.7, incidents: 456 },
  { month: "Apr", avgVolume: 29219, congestion: 81.1, avgSpeed: 39.5, envImpact: 108.4, incidents: 470 },
  { month: "May", avgVolume: 28901, congestion: 80.1, avgSpeed: 40.3, envImpact: 107.8, incidents: 500 },
  { month: "Jun", avgVolume: 30440, congestion: 82.4, avgSpeed: 39.1, envImpact: 110.9, incidents: 447 },
  { month: "Jul", avgVolume: 28925, congestion: 81.1, avgSpeed: 38.3, envImpact: 107.9, incidents: 492 },
  { month: "Aug", avgVolume: 29740, congestion: 81.9, avgSpeed: 39.2, envImpact: 109.5, incidents: 476 },
  { month: "Sep", avgVolume: 29239, congestion: 80.9, avgSpeed: 39.5, envImpact: 108.5, incidents: 410 },
  { month: "Oct", avgVolume: 30040, congestion: 82.3, avgSpeed: 38.9, envImpact: 110.1, incidents: 470 },
  { month: "Nov", avgVolume: 29559, congestion: 81.3, avgSpeed: 40.0, envImpact: 109.1, incidents: 489 },
  { month: "Dec", avgVolume: 29795, congestion: 81.2, avgSpeed: 39.0, envImpact: 109.6, incidents: 382 },
];

export const WEATHER_TRAFFIC = [
  { condition: "Clear", avgVolume: 29167, congestion: 80.7, avgSpeed: 39.5, pedestrians: 114 },
  { condition: "Rain", avgVolume: 29559, congestion: 80.5, avgSpeed: 39.3, pedestrians: 116 },
  { condition: "Fog", avgVolume: 29183, congestion: 81.6, avgSpeed: 39.5, pedestrians: 114 },
  { condition: "Overcast", avgVolume: 29053, congestion: 80.3, avgSpeed: 39.4, pedestrians: 115 },
  { condition: "Windy", avgVolume: 30163, congestion: 82.4, avgSpeed: 39.5, pedestrians: 114 },
];

export const WEATHER_CLASSES = [
  { type: "Stormy", avgTemp: 13.9, humidity: 91.6, precipitation: 21.8, visibility: 11.6 },
  { type: "Thunderstorm", avgTemp: 24.2, humidity: 59.2, precipitation: 15.8, visibility: 10.6 },
  { type: "Rainy", avgTemp: 14.0, humidity: 87.6, precipitation: 12.8, visibility: 10.9 },
  { type: "Drizzle", avgTemp: 13.7, humidity: 82.3, precipitation: 1.5, visibility: 11.3 },
  { type: "Cloudy", avgTemp: 13.6, humidity: 60.3, precipitation: 0, visibility: 11.0 },
  { type: "Clear", avgTemp: 11.9, humidity: 40.3, precipitation: 0, visibility: 15.1 },
  { type: "Foggy", avgTemp: 8.1, humidity: 96.0, precipitation: 0.1, visibility: 0.5 },
  { type: "Humid", avgTemp: 28.5, humidity: 89.0, precipitation: 1.0, visibility: 9.8 },
  { type: "Hot", avgTemp: 37.5, humidity: 29.9, precipitation: 0.5, visibility: 10.9 },
  { type: "Heatwave", avgTemp: 42.3, humidity: 49.7, precipitation: 0.6, visibility: 10.7 },
];

export const DATASET_INFO = {
  trafficRecords: 8936,
  weatherRecords: 8000,
  areas: 8,
  roads: 15,
  dateRange: "Jan 2022 – Dec 2022",
  source: "Bengaluru Traffic Dataset",
};
