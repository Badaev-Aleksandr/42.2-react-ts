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
          <StyledNavLink
            to="audi"
            style={({ isActive }) => ({ color: isActive ? "red" : "#551A8B" })}
          >
            AUDI
          </StyledNavLink>
        </CompanieLi>
        <CompanieLi>
          <StyledNavLink
            to="bmw"
            style={({ isActive }) => ({ color: isActive ? "red" : "#551A8B" })}
          >
            BMW
          </StyledNavLink>
        </CompanieLi>
        <CompanieLi>
          <StyledNavLink
            to="volvo"
            style={({ isActive }) => ({ color: isActive ? "red" : "#551A8B" })}
          >
            VOLVO
          </StyledNavLink>
        </CompanieLi>
      </СompaniesList>
      <Outlet />
    </ClientsPage>
  );
}

export default Clients;
