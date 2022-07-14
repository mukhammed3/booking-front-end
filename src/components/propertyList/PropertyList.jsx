import styled from "styled-components";

//
//
//

const PList = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const PListItem = styled.div`
  border-radius: 10px;
  overflow: hidden;

  cursor: pointer;

  flex: 1;
`;

const PListImg = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const PListTitles = styled.div``;

const PListT1 = styled.h1`
  font-size: 18px;
`;

const PListT2 = styled.h2`
  font-size: 14px;
  font-weight: 300;
`;

const PropertyList = () => {
  return (
    <PList>
      <PListItem>
        <PListImg
          alt=""
          src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
        ></PListImg>
        <PListTitles>
          <PListT1>Hotels</PListT1>
          <PListT2>2333 hotels</PListT2>
        </PListTitles>
      </PListItem>

      <PListItem>
        <PListImg
          alt=""
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
        ></PListImg>
        <PListTitles>
          <PListT1>Apartaments</PListT1>
          <PListT2>4776 apartments</PListT2>
        </PListTitles>
      </PListItem>

      <PListItem>
        <PListImg
          alt=""
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
        ></PListImg>
        <PListTitles>
          <PListT1>Resorts</PListT1>
          <PListT2>3574 resorts</PListT2>
        </PListTitles>
      </PListItem>

      <PListItem>
        <PListImg
          alt=""
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
        ></PListImg>
        <PListTitles>
          <PListT1>Villas</PListT1>
          <PListT2>3876 villas</PListT2>
        </PListTitles>
      </PListItem>

      <PListItem>
        <PListImg
          alt=""
          src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
        ></PListImg>
        <PListTitles>
          <PListT1>Cabins</PListT1>
          <PListT2>1769 cabins</PListT2>
        </PListTitles>
      </PListItem>
    </PList>
  );
};

export default PropertyList;
