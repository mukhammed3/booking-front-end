import styled from "styled-components";

//
//
//

const Search = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  flex: 2;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #0071c2;
`;

const Distance = styled.span`
  font-size: 12px;
`;

const Taxi = styled.span`
  font-size: 12px;
  background-color: green;
  color: white;

  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

const Subtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Features = styled.span`
  font-size: 12px;
`;

const Cancel = styled.span`
  font-size: 12px;
  color: green;
  font-weight: bold;
`;

const CancelSub = styled.span`
  font-size: 12px;
  color: green;
`;

//details

const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RatSpan = styled.span`
  font-weight: 500;
`;

const RatBtn = styled.button`
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  border: none;
`;

const DetTexts = styled.div`
  text-align: right;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const DetPrice = styled.span`
  font-size: 24px;
`;

const DetTax = styled.span`
  font-size: 12px;
  color: gray;
`;

const DetBtn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const SearchItem = () => {
  return (
    <Search>
      <Img
        alt=""
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
      />
      <Desc>
        <Title>Tower Street Apartments</Title>
        <Distance>500m from center</Distance>
        <Taxi>Free airport taxi</Taxi>
        <Subtitle>Studio Apartment with Air conditioning</Subtitle>
        <Features>Entire studio • 1 bathroom • 21m² 1 full bed</Features>
        <Cancel>Free cancellation</Cancel>
        <CancelSub>
          You can cancel later, so lock in this great price today!
        </CancelSub>
      </Desc>
      <Details>
        <Rating>
          <RatSpan>Excellent</RatSpan>
          <RatBtn>8.9</RatBtn>
        </Rating>
        <DetTexts>
          <DetPrice>123$</DetPrice>
          <DetTax>Includes taxes and fees</DetTax>
          <DetBtn>See availability</DetBtn>
        </DetTexts>
      </Details>
    </Search>
  );
};

export default SearchItem;
