import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: "AIzaSyBQpeEH99HNpV7zZKpSIG6Y8aaE4ts_87U",
  version: "weekly",
  libraries: ['places', 'maps'],
});

export let autocompleteService: google.maps.places.AutocompleteService;
export let placesService: google.maps.places.PlacesService; 

export const loadPlacesLibs = async () => {
  const {AutocompleteService, PlacesService } = await loader.importLibrary("places") as google.maps.PlacesLibrary;
  autocompleteService = new AutocompleteService();

  const mapDiv = document.createElement('div');
  mapDiv.id = 'Map';

  const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
  const map = new Map(mapDiv);
  placesService = new PlacesService(map);
}
//'address', 'postal_code'
export const getPredictions = async (value: string, predictionTypes: string[] = ['address'], countryConstraint?: string) => {  
  if (!autocompleteService) return [];

  let autocomleteRequest: google.maps.places.AutocompletionRequest = {
    input: value,
    types: predictionTypes, // Specify the type of predictions you want (e.g., addresses)
  }

  if (countryConstraint) {
    autocomleteRequest = {...autocomleteRequest, componentRestrictions: {country: countryConstraint }}
  }

  return new Promise<google.maps.places.AutocompletePrediction[]>((resolve, reject) => {
    autocompleteService.getPlacePredictions(autocomleteRequest,
    (receivedPredictions, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log(receivedPredictions);
        resolve(receivedPredictions ?? []);
      } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
        resolve([]);
      } else {
        reject(`Failed to get predictions for value: ${value} with status: ${status}`);
      }
    })
  });
}

export const getPlacesByQuery = async (query: string, fields: string[] = ["ALL"]) => {

  if (!placesService) return null;

  return new Promise<google.maps.places.PlaceResult[] | null>((resolve, reject) => {
    placesService.findPlaceFromQuery({ query: query, fields: fields  },
    (places, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log(places);
        resolve(places);
      } else {
        reject(`Failed to get places for query: ${query} with status: ${status}`);
      }
    })
  });
}

export const getPlaceDetails = async (placeId: string, fields: string[] = ["address_components", "formatted_address"]) => {

  if (!placesService) return null;

  return new Promise<google.maps.places.PlaceResult | null>((resolve, reject) => {
    placesService.getDetails({ placeId: placeId, fields: fields  },
    (placeInfo, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        //console.log(placeInfo);
        resolve(placeInfo);
      } else {
        reject(`Failed to get place details for placeID: ${placeId} with status: ${status}`);
      }
    })
  });
}

export const getCityFromPlaceDetails = ({address_components}: google.maps.places.PlaceResult) => {
  if (!address_components) return "";

  let cityComp = address_components.find(comp => comp.types.includes('political') && comp.types.includes('locality'));
  if (!cityComp) {
    cityComp = address_components.find(comp => 
      comp.types.includes('sublocality_level_1') && 
      comp.types.includes('sublocality') && 
      comp.types.includes('political'))
  }

  if (!cityComp) return "";
  else return cityComp.long_name;
}

export const getCountryFromPlaceDetails = ({address_components}: google.maps.places.PlaceResult) => {
  if (!address_components) return "";

  const cityComp = address_components.find(comp => 
      comp.types.includes('political') && comp.types.includes('country'));

  if (!cityComp) return "";
  else return cityComp.long_name;
}

export const getStreetFromPlaceDetails = ({address_components}: google.maps.places.PlaceResult) => {
  if (!address_components) return "";

  const cityComp = address_components.find(comp => 
      comp.types.includes('route'));

  if (!cityComp) return "";
  else return cityComp.long_name;
}

export const getZipCodeFromPlaceDetails = ({address_components}: google.maps.places.PlaceResult) => {
  if (!address_components) return "";

  const cityComp = address_components.find(comp => 
      comp.types.includes('postal_code'));

  if (!cityComp) return "";
  else return cityComp.long_name;
}

export const getBuildingFromPlaceDetails = ({address_components}: google.maps.places.PlaceResult) => {
  if (!address_components) return "";

  const cityComp = address_components.find(comp => 
      comp.types.includes('street_number'));

  if (!cityComp) return "";
  else return cityComp.long_name;
}

export const getApartmentFromPlaceDetails = ({address_components}: google.maps.places.PlaceResult) => {
  if (!address_components) return "";

  const cityComp = address_components.find(comp => 
      comp.types.includes('subpremise'));

  if (!cityComp) return "";
  else return cityComp.long_name.split(" ")[1] ?? "";
}

export const getRegionFromPlaceDetails = ({address_components}: google.maps.places.PlaceResult) => {
  if (!address_components) return "";

  const cityComp = address_components.find(comp => 
      comp.types.includes('administrative_area_level_1') || comp.types.includes('administrative_area_level_2'));

  if (!cityComp) return "";
  else return cityComp.long_name;
}

export const tryGetBuildingFromPrediction = (prediction: google.maps.places.AutocompletePrediction | null, buildingFromDetails?: string) => {
  if (!prediction || !buildingFromDetails) return "";

  const buildingFromDescription = prediction.description.split(', ').find(di => di.includes(buildingFromDetails));
  
  return buildingFromDescription && buildingFromDescription !== "" && buildingFromDescription !== buildingFromDetails
    ? buildingFromDescription
    : buildingFromDetails;
}