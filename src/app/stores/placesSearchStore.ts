import { makeAutoObservable, reaction, runInAction } from "mobx";
import { loadPlacesLibs, getPlaceDetails, getPredictions, getCityFromPlaceDetails, getCountryFromPlaceDetails, getStreetFromPlaceDetails, getZipCodeFromPlaceDetails, getBuildingFromPlaceDetails, getRegionFromPlaceDetails, getApartmentFromPlaceDetails, tryGetBuildingFromPrediction } from "../utils/google-places/google-places.utils";
import { store } from "./store";

export default class PlacesSearchStore {

  placeInfo: google.maps.places.PlaceResult | null = null;
  prediction: google.maps.places.AutocompletePrediction | null = null;
  address: string = "";
  country: string = "";
  region: string = "";
  city: string = "";
  zipCode: string = "";
  street: string = "";
  building: string = "";
  section: string = "";
  apartment: string = "";

  constructor() {
    makeAutoObservable(this);
    loadPlacesLibs();

    reaction(
      () => this.placeInfo, 
      placeInfo => {
        runInAction(() => {
          if (placeInfo) {
            this.address = placeInfo.formatted_address ?? "";

            this.city = getCityFromPlaceDetails(placeInfo);  
            this.country = getCountryFromPlaceDetails(placeInfo);
            this.street = getStreetFromPlaceDetails(placeInfo);
            this.zipCode = getZipCodeFromPlaceDetails(placeInfo);
            this.building = tryGetBuildingFromPrediction(this.prediction, getBuildingFromPlaceDetails(placeInfo));
            this.region = getRegionFromPlaceDetails(placeInfo);
            this.apartment = getApartmentFromPlaceDetails(placeInfo);
            this.section = "";
          } else {
            this.address = "";
            this.country = "";
            this.region = "";
            this.city = "";
            this.zipCode = "";
            this.street = "";
            this.building = "";
            this.section = "";
            this.apartment = "";
          }
        })
      });
  }

  getAutocompletePredictions = async (value: string, predictionTypes?: string[], countryConstraint?: string) => {
    try {
      return await getPredictions(value, predictionTypes, countryConstraint);
    } catch (e) {
      console.error(e);
      store.commonStore.toastError(e as string);
      return [];
    }
  }

  getPlaceDetails = async (prediction: google.maps.places.AutocompletePrediction) => {
    try {
      const info = await getPlaceDetails(prediction.place_id);
      runInAction(async () => {
        this.prediction = prediction;
        this.setPlaceDetails(info);
      });
      return info;
    } catch (e) {
      console.error(e);
      store.commonStore.toastError(e as string);
      return null;
    }
  }

  setUserPlaceDetails = () => {
    runInAction(() => {
      this.address = store.userStore.getAddress() ?? "";

      this.city = store.userStore.user?.address?.city ?? "";
      this.country = store.userStore.user?.country ?? "";
      this.street = store.userStore.user?.address?.street ?? "";
      this.zipCode = store.userStore.user?.address?.post_code ?? "";
      this.building = store.userStore.user?.address?.building ?? "";
      this.region = store.userStore.user?.address?.region ?? "";
      this.apartment = store.userStore.user?.address?.apartment ?? "";
      this.section = store.userStore.user?.address?.section ?? "";
    })
  }

  setPlaceDetails = async (placeInfo: google.maps.places.PlaceResult | null) => {
    this.placeInfo = placeInfo;
  }
}
