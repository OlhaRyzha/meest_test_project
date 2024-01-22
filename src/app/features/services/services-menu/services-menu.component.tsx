import { ReactComponent as PlusIcon } from "../../../assets/plus-icon.svg";
import ServicesUserInfo from "../../services/services-user-info/services-user-info.component";
import Button from "../../../common/button/button.component";
import Accordion, {AccordionSectionData} from "../../../common/accordion/accordion.component";
import { ServicesMenuBody, ServicesMenuContainer, ServicesMenuHeader } from "./services-menu.styles";
import ServicesMenuItem from "../services-menu-item/services-menu-item.component";
import { useStore } from "../../../stores/store";
import { observer } from "mobx-react-lite";
import InputSearch from "../../../common/input-search/input-search.component";
import { useNavigate } from "react-router-dom";


export const menuItems: AccordionSectionData[] = [
  { 
    title: "Shipments",
    items: ["Parcel list", "Drafts", "Templates", "Archive Deleted"]
  },  
  {
    title: "Account Settings",
    items: ["Personal data", "Security settings", "Payment details", "My receivers"]
  },
  { 
    title: "PUDO",
    items: ["Item1", "Item2", "Item3", "Item4"]
  },
  { 
    title: "Bonuses",
    items: ["Item1", "Item2", "Item3", "Item4"]
  },
];

const ServicesMenu = () => {
  const { userStore: { user, logout }, navStore: { isLeftSidebarOpened, toggleLeftSidebar, setSelectedService, setSelectedMenuSections} } = useStore();
  const navigate = useNavigate();

  const onCreateParcelClick = () => {
    navigate('/services/parcel/create/step-1'); 
    isLeftSidebarOpened && toggleLeftSidebar(); 
    setSelectedService(undefined);
    setSelectedMenuSections([]);
  }


  return (
    <ServicesMenuContainer>
      <ServicesMenuHeader>
        <ServicesUserInfo />
        <InputSearch name="parcel-search" placeholder="Track your parcel" />
        <Button onClick={ () => onCreateParcelClick() } contentStyle="thin"><PlusIcon />Create new</Button>
      </ServicesMenuHeader>
      <ServicesMenuBody>
        <Accordion data={menuItems}/>
        {user && <ServicesMenuItem content="Logout" icon="logout" onClick={async () => await logout()}  />}
      </ServicesMenuBody>
    </ServicesMenuContainer>
  )
}

export default observer(ServicesMenu);
