import styled from "styled-components";
//
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header.jsx";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

//
//
//

const Container = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  width: 1024px;
  font-size: 20px;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Container>
        <Featured />
        <Title>Browse by property type</Title>
        <PropertyList />
        <Title>Homes guests love</Title>
        <FeaturedProperties />

        <MailList />
        <Footer />
      </Container>
    </div>
  );
};

export default Home;
