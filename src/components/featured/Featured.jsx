import styled from "styled-components";

//
//
//

const Feat = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  justify-content: space-between;
  gap: 20px;

  z-index: 1;
`;

const FeatItem = styled.div`
  position: relative;
  color: white;
  border-radius: 10px;
  overflow: hidden;

  height: 250px;
`;

const FeatImg = styled.img`
  width: 100%;
  object-fit: cover;
`;

const FeatTitles = styled.div`
  position: absolute;

  bottom: 20px;
  left: 20px;
`;

const FT1 = styled.h1``;

const FT2 = styled.h2``;

const Featured = () => {
  return (
    <Feat>
      <FeatItem>
        <FeatImg
          alt=""
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
        ></FeatImg>
        <FeatTitles>
          <FT1>Dublin</FT1>
          <FT2>123 properties</FT2>
        </FeatTitles>
      </FeatItem>

      <FeatItem>
        <FeatImg
          alt=""
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
        ></FeatImg>
        <FeatTitles>
          <FT1>Reno</FT1>
          <FT2>533 properties</FT2>
        </FeatTitles>
      </FeatItem>

      <FeatItem>
        <FeatImg
          alt=""
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
        ></FeatImg>
        <FeatTitles>
          <FT1>Austin</FT1>
          <FT2>532 properties</FT2>
        </FeatTitles>
      </FeatItem>
    </Feat>
  );
};

export default Featured;
