import styled from "styled-components";
import "./Hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
//
//
//

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  position: relative;
`;

const BookNow = styled.button`
  position: absolute;
  top: 10px;
  right: 0;

  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;

  border-radius: 5px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Address = styled.div`
  font-size: 12px;

  display: flex;
  align-items: center;
  gap: 10px;
`;

const AdSpan = styled.span``;

const Distance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;

const Price = styled.span`
  color: green;
  font-weight: 500;
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  width: 33%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const DetText = styled.div`
  flex: 3;
`;

const DetPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetTitle = styled.h1``;

const DetDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

const PriceT1 = styled.h1`
  font-size: 18px;
  color: #555;
`;

const PS1 = styled.span`
  font-size: 14px;
  color: #555;
`;

const PriceT2 = styled.h2`
  font-weight: 300;
`;

const PB = styled.b``;

const DetBtn = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
      key: "idXsds1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
      key: "idXsds2",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
      key: "idXsds3",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
      key: "idXsds4",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
      key: "idXsds5",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
      key: "idXsds6",
    },
  ];

  return (
    <div>
      <Navbar />
      <Header type="list" />

      <Container>
        <Wrapper>
          <BookNow>Reserve or Book Now!</BookNow>
          <Title>Grand Hotel</Title>
          <Address>
            <FontAwesomeIcon icon={faLocationDot} />
            <AdSpan>Elton St 125 New York</AdSpan>
          </Address>
          <Distance>Excellent location 500m from center</Distance>
          <Price>
            Book a stay over 117$ at this property and get a free airport taxi
          </Price>
          <Images>
            {photos.map((photo, i) => (
              <ImgWrapper key={photo.key}>
                <Img src={photo.src} alt="" />
              </ImgWrapper>
            ))}
          </Images>

          <Details>
            <DetText>
              <DetTitle>Stay in the heart of City</DetTitle>
              <DetDesc>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartm
              </DetDesc>
            </DetText>
            <DetPrice>
              <PriceT1>Perfect for a 9-night stay!</PriceT1>
              <PS1>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8!
              </PS1>
              <PriceT2>
                <PB>$945</PB> (9 nights)
              </PriceT2>
              <DetBtn>Reserve or Book Now!</DetBtn>
            </DetPrice>
          </Details>
        </Wrapper>

        <MailList />
        <Footer />
      </Container>
    </div>
  );
};

export default Hotel;
