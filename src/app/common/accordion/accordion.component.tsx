import {
  AccordionContainer,
  AccordionItem,
  AccordionTitle,
  AccordionSection,
  AccordionItemsContainer,
} from "./accordion.styles";
import ServicesMenuItem from "../../features/services/services-menu-item/services-menu-item.component";
import { ReactComponent as ArrowDownIcon } from "../../assets/arrow-down-mini-icon.svg";
import { useStore } from "../../stores/store";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export interface AccordionSectionData {
  title: string;
  items?: string[];
}

interface Props {
  data: AccordionSectionData[];
}

const Accordion = ({ data }: Props) => {
  const {
    navStore: {
      selectedService,
      setSelectedService,
      selectedMenuSections,
      toggleMenuSection,
      isLeftSidebarOpened,
      toggleLeftSidebar,
      setServicesOpened,
    },
  } = useStore();

  const navigate = useNavigate();

  return (
    <AccordionContainer>
      {data.map(({ title, items }, index) => {
        return (
          <AccordionSection key={title}>
            <AccordionTitle
              isOpened={selectedMenuSections.includes(index)}
              onClick={() => toggleMenuSection(index)}>
              <ServicesMenuItem content={title} icon="package" />
              <ArrowDownIcon />
            </AccordionTitle>
            <AccordionItemsContainer isOpened={selectedMenuSections.includes(index)}>
              {items &&
                items.map((item) => (
                  <AccordionItem
                    isSelected={`${title}:${item}` === selectedService}
                    key={item}
                    onClick={() => {
                      setSelectedService(`${title}:${item}`, navigate);
                      isLeftSidebarOpened && toggleLeftSidebar();
                      isLeftSidebarOpened && setServicesOpened(false);
                    }}>
                    <ServicesMenuItem content={item} icon="package" />
                  </AccordionItem>
                ))}
            </AccordionItemsContainer>
          </AccordionSection>
        );
      })}
    </AccordionContainer>
  );
};

export default observer(Accordion);
