
import InputDropdown from "../../common/input-dropdown/input-dropdown.component";
import { HeaderTertiary, LinkFooter } from "../../common/typography/typography.styles";
import { FooterColumn, FooterTopContainer } from "./footer.styles";

const FooterTop = () => {
  return (
    <FooterTopContainer>
      <FooterColumn>
        <div>
          <HeaderTertiary>More from Meest</HeaderTertiary>
          <LinkFooter href="">Item</LinkFooter>
        </div>
        <div>
          <HeaderTertiary>Our company</HeaderTertiary>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
        </div>
      </FooterColumn>

      <FooterColumn>
        <div>
          <HeaderTertiary>New customer</HeaderTertiary>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
        </div>
        <div>
          <HeaderTertiary>More from Meest</HeaderTertiary>
          <LinkFooter href="">Item</LinkFooter>
        </div>
      </FooterColumn>

      <FooterColumn>
        <div>
          <HeaderTertiary>Top countries</HeaderTertiary>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
          <LinkFooter href="">Item</LinkFooter>
        </div>
        <div>
          <HeaderTertiary>Comparison</HeaderTertiary>
          <LinkFooter href="">Item</LinkFooter>
        </div>
      </FooterColumn>

      <FooterColumn>
        <HeaderTertiary>Location</HeaderTertiary>
        <InputDropdown label={"Change country"}
                       name="country"
          items={[
            {value: "Canada", label: "🇨🇦 Canada"}, 
            {value: "USA", label: "🇺🇸 USA"}, 
            {value: "Ukraine", label: "🇺🇦 Ukraine"}
        ]}/>
        <LinkFooter href="">FAQ</LinkFooter>
        <LinkFooter href="">Pricing</LinkFooter>
      </FooterColumn>
    </FooterTopContainer>
  )
}

export default FooterTop;
