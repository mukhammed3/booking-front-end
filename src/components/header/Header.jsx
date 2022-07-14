import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import {
  faBed,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import "./Header.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//
//
//

const Head = styled.div`
  background-color: #003580;
  color: white;

  display: flex;
  justify-content: center;

  position: relative;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;

  margin: ${(props) => props.set};
`;

const List = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  //props
  border: ${(props) => props.state === "active" && "1px solid white"};
  padding: ${(props) => props.state === "active" && "10px"};
  border-radius: ${(props) => props.state === "active" && "20px"};
`;

const Span = styled.span``;

const Title = styled.h1``;

const Desc = styled.p`
  margin: 20px 0;
`;

const Button = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Search = styled.div`
  height: 30px;
  width: 100%;
  max-width: 1024px;
  background-color: white;
  border: 3px solid #febb02;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 10px 0;
  border-radius: 5px;

  position: absolute;

  bottom: -25px;
`;

const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  border: none;
  outline: none;
`;

const InputSpan = styled.span`
  color: lightgray;
  cursor: pointer;
`;

const Options = styled.div`
  position: absolute;
  z-index: 2;

  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;

const OptionItem = styled.div`
  width: 200px;

  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

const OptionText = styled.span``;

const OptionCounter = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  background-color: white;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const OptionCounterNubmer = styled.span``;

const Header = ({ type }) => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [openDate, setOpenDate] = useState(false);

  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  //search btn prop sending to HOTELS page

  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/hotels", {
      state: { destination, date, options },
    });
  };

  return (
    <Head>
      <Container set={type === "list" ? "20px 0 0 0" : "20px 0 100px 0"}>
        <List>
          <ListItem state="active">
            <FontAwesomeIcon icon={faBed} />
            <Span>Stays</Span>
          </ListItem>

          <ListItem>
            <FontAwesomeIcon icon={faPlane} />
            <Span>Flights</Span>
          </ListItem>

          <ListItem>
            <FontAwesomeIcon icon={faCar} />
            <Span>Car rentals</Span>
          </ListItem>

          <ListItem>
            <FontAwesomeIcon icon={faBed} />
            <Span>Attractions</Span>
          </ListItem>

          <ListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <Span>Airport Taxis</Span>
          </ListItem>
        </List>
        {type !== "list" && (
          <>
            <Title>A lifetime of discounts? It's Genius</Title>
            <Desc>
              Get rewarded for you travels - unlock instant savings of 10% or
              more with a free qizbooking account
            </Desc>
            <Button>Sign in / Register</Button>
            <Search>
              <SearchItem>
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <Input
                  type="text"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </SearchItem>

              <SearchItem>
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <InputSpan onClick={() => setOpenDate(!openDate)}>{`${format(
                  date[0].startDate,
                  "dd/MM/yyyy"
                )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</InputSpan>

                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </SearchItem>

              <SearchItem>
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <InputSpan
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</InputSpan>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <OptionText>Adult</OptionText>
                      <OptionContainer>
                        <OptionCounter
                          disabled={options.adult <= 1}
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCounter>
                        <OptionCounterNubmer>
                          {options.adult}
                        </OptionCounterNubmer>
                        <OptionCounter
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCounter>
                      </OptionContainer>
                    </OptionItem>

                    <OptionItem>
                      <OptionText>Children</OptionText>
                      <OptionContainer>
                        <OptionCounter
                          disabled={options.children <= 0}
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCounter>
                        <OptionCounterNubmer>
                          {options.children}
                        </OptionCounterNubmer>
                        <OptionCounter
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCounter>
                      </OptionContainer>
                    </OptionItem>

                    <OptionItem>
                      <OptionText>Room</OptionText>
                      <OptionContainer>
                        <OptionCounter
                          disabled={options.room <= 1}
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </OptionCounter>
                        <OptionCounterNubmer>
                          {options.room}
                        </OptionCounterNubmer>
                        <OptionCounter
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </OptionCounter>
                      </OptionContainer>
                    </OptionItem>
                  </Options>
                )}
              </SearchItem>

              <SearchItem>
                <Button onClick={handleSearch}>Search</Button>
              </SearchItem>
            </Search>
          </>
        )}
      </Container>
    </Head>
  );
};

export default Header;
