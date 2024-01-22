import { observer } from "mobx-react-lite";
import { forwardRef, useEffect, useRef, useState } from "react";

export interface WithCloseOnOutsideClickProps {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
}

const withCloseOnOutsideClick = (WrappedComponent: any) => {
  const WithCloseOnOutsideClick = (props: any, ref: any) => {
    const [isOpened, setIsOpened] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleOutsideClick = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
          setIsOpened(false);
        }
      };
  
      document.addEventListener('mousedown', handleOutsideClick);
      
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }, []);
  
    return <WrappedComponent ref={popupRef} {...props} isOpened={isOpened} setIsOpened={setIsOpened}/>
  }

  return observer(forwardRef(WithCloseOnOutsideClick));
}

export default withCloseOnOutsideClick;