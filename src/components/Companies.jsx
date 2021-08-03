import React from 'react';
import styled from 'styled-components';

const CompaniesWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, auto));
  grid-auto-rows: 100px;
  gap: 20px;
`;
const Company = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CompanyLogo = styled.span`
  display: flex;
  width: 92px;
  height: 92px;
  img {
    width: 100%;
  }
`;
const CompanyName = styled.h3`
  margin-top: 12px;
  line-height: 1.2;
  text-align: center;
`;

export default ({ companies }) => (
  <CompaniesWrapper>
    {companies &&
      companies.length > 0 &&
      companies.map((company) => (
        <Company key={company.id}>
          <CompanyLogo>
            <img
              src={
                company.logo_path
                  ? `https://image.tmdb.org/t/p/w92${company.logo_path}`
                  : require('@assets/noPosterSmall.png').default
              }
              alt={company.name}
            />
          </CompanyLogo>
          <CompanyName>{company.name}</CompanyName>
        </Company>
      ))}
  </CompaniesWrapper>
);
