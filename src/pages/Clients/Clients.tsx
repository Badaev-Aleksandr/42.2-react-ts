import { Outlet } from "react-router-dom";
import {
  ClientsPage,
  CompanieLi,
  CompaniesTitle,
  StyledNavLink,
  СompaniesList,
} from "./styles";

function Clients() {
  return (
    <ClientsPage>
        <CompaniesTitle>Companies</CompaniesTitle>
        <СompaniesList>
          <CompanieLi>
            <StyledNavLink to="audi">AUDI</StyledNavLink>
          </CompanieLi>
          <CompanieLi>
            <StyledNavLink to="bmw">BMW</StyledNavLink>
          </CompanieLi>
          <CompanieLi>
            <StyledNavLink to="volvo">VOLVO</StyledNavLink>
          </CompanieLi>
        </СompaniesList>
        <Outlet/>
    </ClientsPage>
  );
}

export default Clients;
