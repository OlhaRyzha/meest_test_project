import { useEffect, useState } from "react";
import {
  DropdownOption,
  DropdownPopup,
  DropdownSelectedOption,
  DropdownSelector,
  PhoneCodeDropdownContainer,
} from "./phone-code-dropdown.styles";
import { TextLabel, TextSearchOption } from "../../typography/typography.styles";
import Sidebar from "../../sidebar-right/sidebar.component";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import InputSearch from "../../input-search/input-search.component";

export interface CountryOption {
  countryName: string;
  unicodeFlag: string;
  callingCode: string;
  countryCode: string;
}

const countryOptionFormat = (countryOption?: CountryOption) => {
  if (!countryOption) return "";
  return `+${countryOption.callingCode} ${countryOption.unicodeFlag}`;
};

interface Props {
  items: CountryOption[];
  label?: string;
  selectedCountryCode?: string;
  onSelected?: (option: CountryOption) => void;
}

const PhoneCodeDropdown = ({
  items,
  label,
  selectedCountryCode,
  onSelected = undefined,
}: Props) => {
  const {
    navStore: { isSidebarOpened, toggleSidebar },
  } = useStore();

  const [selectedOption, setSelectedOption] = useState<CountryOption | undefined>(undefined);
  const [filter, setFilter] = useState<string | undefined>();
  const [filteredItems, setFilteredItems] = useState<CountryOption[]>([]);

  const onSelect = (opt: CountryOption) => {
    onSelected && onSelected(opt);
    toggleSidebar();
  };

  useEffect(() => {
    if (selectedCountryCode !== undefined) {
      setSelectedOption(items.find((i) => i.countryCode === selectedCountryCode));
    }
  }, [selectedCountryCode, setSelectedOption, items]);

  useEffect(() => {
    if (filter) {
      setFilteredItems(
        items.filter((i) => i.countryName.toLocaleLowerCase().includes(filter.toLocaleLowerCase()))
      );
    } else {
      setFilteredItems(items);
    }
  }, [setFilteredItems, filter, items]);

  useEffect(() => {
    if (isSidebarOpened) {
      // clear filter each time search sidebar is opened
      setFilter(undefined);
    }
  }, [isSidebarOpened]);

  return (
    <PhoneCodeDropdownContainer>
      {label && <TextLabel>{label}</TextLabel>}
      <DropdownSelector isOpened={isSidebarOpened} onClick={() => toggleSidebar()}>
        <DropdownSelectedOption>{countryOptionFormat(selectedOption)}</DropdownSelectedOption>
      </DropdownSelector>
      <Sidebar withBlurredBackground header="Select country code">
        <InputSearch
          name="search_country"
          placeholder="Start typing country name"
          onChange={(value) => setFilter(value)}
        />
        {filteredItems.length > 0 && (
          <DropdownPopup isOpened={isSidebarOpened}>
            {filteredItems.map((i) => (
              <DropdownOption
                key={i.countryName}
                isSelected={selectedOption?.countryName === i.countryName}
                onClick={() => onSelect(i)}>
                <TextSearchOption>
                  {i.unicodeFlag} {i.countryName}
                </TextSearchOption>
                <TextSearchOption>+{i.callingCode}</TextSearchOption>
              </DropdownOption>
            ))}
          </DropdownPopup>
        )}
      </Sidebar>
    </PhoneCodeDropdownContainer>
  );
};

export default observer(PhoneCodeDropdown);
