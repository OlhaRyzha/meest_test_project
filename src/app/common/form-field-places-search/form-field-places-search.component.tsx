import { useField } from "formik";
import { useStore } from "../../stores/store";
import InputSearchWithSidebar from "../input-search-with-sidebar/input-search-with-sidebar.component";

interface Props {
  name: string;
  placeholder: string;
  label?: string;
  tabIndex?: number;
  onSearchFinished?: () => void;
}
const PlacesFormFieldSearch = ({ name, placeholder, label, tabIndex, onSearchFinished }: Props) => {

  const [field, meta] = useField(name);

  console.log('field', field);
  console.log('meta', meta);

  const { placesSearchStore: { getAutocompletePredictions, getPlaceDetails} } = useStore();

  return (
    <InputSearchWithSidebar<google.maps.places.AutocompletePrediction>
      name="Address search" 
      inputValue={field.value}
      placeholder={placeholder}
      label={label}  
      sidebarTitle="Search address"
      sidebarInputPlaceholder="Start typing your address"
      tabIndex={tabIndex}
      displayAllOptionsWithEmptyFilter
      getSearchOptions={(filter) => getAutocompletePredictions(filter ?? "")}
      onSearchOptionSelected={(addressPrediction) => getPlaceDetails(addressPrediction)}
      onSearchFinished={ () => onSearchFinished && onSearchFinished() }
      getKeyForSearchOption={(addressPrediction) => addressPrediction.place_id}
      getDisplayValueForSearchOption={(addressPrediction) => addressPrediction.description}
      errorMessage={"This field is required"}
      mainInputValidationPredicate={(input) => !!input}
    />
  )
}

export default PlacesFormFieldSearch;
