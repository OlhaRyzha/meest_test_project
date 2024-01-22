import { TextFormError, TextSearchOption } from "../typography/typography.styles";
import { useEffect, useState } from "react";
import { useStore } from "../../stores/store";
import InputSearch from "../input-search/input-search.component";
import Sidebar from "../sidebar-right/sidebar.component";
import { DropdownOption, DropdownPopup } from "../form-field-phone/phone-code-dropdown/phone-code-dropdown.styles";
import { observer } from "mobx-react-lite";
import { InputSearchWithSidebarContainer } from "./input-search-with-sidebar.styles";

interface Props<T> {
  inputValue?: string;
  name: string;
  placeholder: string;
  sidebarTitle: string;
  sidebarInputPlaceholder: string;
  label?: string;
  tabIndex?: number;
  disabled?: boolean;
  onMainInputClick?: () => void;

  // Allows user to modify selected option manually
  canModifyInput?: boolean;
  onInputChange?: (inputValue: string) => void;
  
  // where to get search options and how to filter them and how to display
  displayAllOptionsWithEmptyFilter?: boolean;
  isOptionsEqual?: (a: T | undefined, b: T | undefined) => boolean;
  getSearchOptions: (inputFilterValue?: string) => Promise<T[]>
  getKeyForSearchOption?: (option: T) => string
  getDisplayValueForSearchOption?: (option: T) => string
  onSearchOptionSelected?: (option: T) => void
  onSearchFinished?: () => void

  // selected input validation
  mainInputValidationPredicate?: (inputValue?: string) => boolean;
  errorMessage?: string;
}

// Generic search input which opens sidebar with search (non-field version)
const InputSearchWithSidebar = <T, >({ name,
  inputValue, 
  placeholder, 
  label,
  sidebarTitle,
  sidebarInputPlaceholder,
  tabIndex, 
  mainInputValidationPredicate,
  errorMessage,
  disabled,
  canModifyInput,
  onInputChange,
  onMainInputClick,
  displayAllOptionsWithEmptyFilter,
  isOptionsEqual, 
  getSearchOptions,
  getKeyForSearchOption,
  getDisplayValueForSearchOption,
  onSearchOptionSelected,
  onSearchFinished
 }: Props<T>) => {

  const { navStore: { isSidebarOpened, toggleSidebarByName } } = useStore();

  const [searchOptions, setSearchOptions] = useState<T[]>([]);
  const [selectedOption, setSelectedOption] = useState<T | undefined>();
  const [touched, setTouched] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleBlur = () => {
    canModifyInput && setTouched(true);
  };

  useEffect(() => {
    if (displayAllOptionsWithEmptyFilter) {
      getSearchOptions().then(p => setSearchOptions(p));
    }
    // eslint-disable-next-line
  }, [getSearchOptions])

  useEffect(() => {
    const validationFailed = touched && 
        errorMessage && 
        mainInputValidationPredicate && !mainInputValidationPredicate(inputValue);
    setIsError(validationFailed ? true : false);
  }, [touched, inputValue, errorMessage, mainInputValidationPredicate])


  const modifyListOfDisplayedOptions = async (value?: string) => {
    if (value || displayAllOptionsWithEmptyFilter) {
      setSearchOptions(await getSearchOptions(value));
    } else {
      setSearchOptions([]);
    }
  }

  const handleSearchOptionSelected = (option: T) => {
    console.log((option as any).countryCode);
    onSearchOptionSelected && onSearchOptionSelected(option);
    onSearchFinished && onSearchFinished(); 
    toggleSidebarByName(name);
    modifyListOfDisplayedOptions();
    setSelectedOption(option);
  }

  const handleMainInputChange = (targetValue: string) => {
    canModifyInput && onInputChange && 
    onInputChange(targetValue);
  }

  return (
    <InputSearchWithSidebarContainer mb={"2.4rem"} isDisabled={disabled}>
      <InputSearch name={name}
          inputValue={inputValue ?? ''}
          label={label}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={!canModifyInput}
          autoComplete="off"
          tabIndex={tabIndex ?? -1}
          type='text'
          searchIconPosition="right"
          treatWholeInputAsSearch={!canModifyInput}
          isError={isError}
          onChange={handleMainInputChange}
          onBlur={handleBlur}
          onInputClick={onMainInputClick}
          onInputContainerClick={() => !canModifyInput && !disabled && toggleSidebarByName(name)}
          onSearchIconClick={() => canModifyInput && !disabled && toggleSidebarByName(name)}

          inputStyle={{cursor: canModifyInput ? 'text': 'pointer'}}
      />

      <Sidebar name={name} withBlurredBackground header={sidebarTitle} onClose={() => { modifyListOfDisplayedOptions(); setTouched(true); }}>
        <InputSearch name={"search_" + sidebarTitle}
          placeholder={sidebarInputPlaceholder}
          focusOnOpen={true}
          searchIconPosition="left"
          disableSearchIconHover={true}
          onChange={(targetValue) => modifyListOfDisplayedOptions(targetValue)}
        />
        <DropdownPopup isOpened={isSidebarOpened}>
          {searchOptions.length > 0 && searchOptions.map((option) => 
            (<DropdownOption key={getKeyForSearchOption ? getKeyForSearchOption(option) : (option as string)}
                             isSelected={isOptionsEqual && isOptionsEqual(option, selectedOption)}
                             displayCheckMarkForSelected 
                             onClick={() => handleSearchOptionSelected(option)}>
              <TextSearchOption>{getDisplayValueForSearchOption ? getDisplayValueForSearchOption(option) : (option as string)}</TextSearchOption>
            </DropdownOption>)
          )}
        </DropdownPopup>
      </Sidebar>

      { 
        isError && (<TextFormError>{errorMessage}</TextFormError>)
      }
    </InputSearchWithSidebarContainer>
  )
}

export default observer(InputSearchWithSidebar);
