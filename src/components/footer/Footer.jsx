import styled from "styled-components";

//
//
//

const Foot = styled.footer`
  width: 100%;
  max-width: 1024px;
  font-size: 12px;

  margin: 50px 0;
`;

const FootLists = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 50px;
`;

const FootList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FootListItem = styled.li`
  margin-bottom: 10px;
  color: #003580;
  cursor: pointer;
`;

const FootText = styled.div``;

const Footer = () => {
  return (
    <Foot>
      <FootLists>
        <FootList>
          <FootListItem>Countries</FootListItem>
          <FootListItem>Regions</FootListItem>
          <FootListItem>Cities</FootListItem>
          <FootListItem>Disctricts</FootListItem>
          <FootListItem>Airports</FootListItem>
          <FootListItem>Hotels</FootListItem>
        </FootList>
        <FootList>
          <FootListItem>Countries</FootListItem>
          <FootListItem>Regions</FootListItem>
          <FootListItem>Cities</FootListItem>
          <FootListItem>Disctricts</FootListItem>
          <FootListItem>Airports</FootListItem>
          <FootListItem>Hotels</FootListItem>
        </FootList>
        <FootList>
          <FootListItem>Countries</FootListItem>
          <FootListItem>Regions</FootListItem>
          <FootListItem>Cities</FootListItem>
          <FootListItem>Disctricts</FootListItem>
          <FootListItem>Airports</FootListItem>
          <FootListItem>Hotels</FootListItem>
        </FootList>
        <FootList>
          <FootListItem>Countries</FootListItem>
          <FootListItem>Regions</FootListItem>
          <FootListItem>Cities</FootListItem>
          <FootListItem>Disctricts</FootListItem>
          <FootListItem>Airports</FootListItem>
          <FootListItem>Hotels</FootListItem>
        </FootList>
        <FootList>
          <FootListItem>Countries</FootListItem>
          <FootListItem>Regions</FootListItem>
          <FootListItem>Cities</FootListItem>
          <FootListItem>Disctricts</FootListItem>
          <FootListItem>Airports</FootListItem>
          <FootListItem>Hotels</FootListItem>
        </FootList>
      </FootLists>
      <FootText>Copyright ♥ 2022 Qozbooking</FootText>
    </Foot>
  );
};

export default Footer;
