import {
  ClientsPage,
  CompanieLi,
  CompaniesTitle,
  StyledLink,
  СompaniesList,
} from "./styles";

function Clients() {
  return (
    <ClientsPage>
      <CompaniesTitle>Companies</CompaniesTitle>
      <СompaniesList>
        <CompanieLi>
          <StyledLink to="audi">AUDI</StyledLink>
        </CompanieLi>
        <CompanieLi>
          <StyledLink to="bmw">BMW</StyledLink>
        </CompanieLi>
        <CompanieLi>
          <StyledLink to="volvo">VOLVO</StyledLink>
        </CompanieLi>
      </СompaniesList>
    </ClientsPage>
  );
}

export default Clients;
