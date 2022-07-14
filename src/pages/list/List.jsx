/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import SearchItem from "../../components/searchItem/SearchItem";

//
//
//

const Container = styled.div`
  display: flex;
  justify-content: center;

  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  gap: 20px;
`;

const Search = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  height: max-content;

  position: sticky;
  top: 10px;
`;

const SItem = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-size: 12px;
`;

const Input = styled.input`
  height: 30px;
  border: none;
  padding: 5px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const Result = styled.div`
  flex: 3;
`;

const Date = styled.span`
  height: 30px;
  background-color: white;
  padding: 5px;

  display: flex;
  align-items: center;

  cursor: pointer;
`;

const Option = styled.div`
  padding: 10px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
`;

const OptionText = styled.span``;

const Small = styled.small``;

const OptionInput = styled.input`
  width: 50px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #0071c2;
  color: white;
  border: none;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`;

const List = () => {
  //props coming from Header.jsx "Search" button
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  const d = new window.Date();

  return (
    <div>
      <Navbar />

      {/* /prop for only 50% of header */}
      <Header type="list" />
      <Container>
        <Wrapper>
          <Search>
            <Title>Search</Title>
            <SItem>
              <Label>Destination</Label>
              <Input placeholder={destination} type="text" />
            </SItem>

            <SItem>
              <Label>Check-in Date</Label>
              <Date onClick={() => setOpenDate(!openDate)}>{`${format(
                date[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</Date>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={d}
                  ranges={date}
                />
              )}
            </SItem>

            <SItem>
              <Label>Options</Label>
              <Option>
                <OptionItem>
                  <OptionText>
                    Min price <Small>per night</Small>
                  </OptionText>
                  <OptionInput type="number"></OptionInput>
                </OptionItem>

                <OptionItem>
                  <OptionText>
                    Max price <Small>per night</Small>
                  </OptionText>
                  <OptionInput type="number"></OptionInput>
                </OptionItem>

                <OptionItem>
                  <OptionText>Adult</OptionText>
                  <OptionInput
                    type="number"
                    placeholder={options.adult}
                    min={1}
                  ></OptionInput>
                </OptionItem>

                <OptionItem>
                  <OptionText>Children</OptionText>
                  <OptionInput
                    type="number"
                    placeholder={options.children}
                    min={0}
                  ></OptionInput>
                </OptionItem>

                <OptionItem>
                  <OptionText>Room</OptionText>
                  <OptionInput
                    type="number"
                    placeholder={options.room}
                    min={1}
                  />
                </OptionItem>
              </Option>
            </SItem>
            <Button>Search</Button>
          </Search>
          <Result>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </Result>
        </Wrapper>
      </Container>
    </div>
  );
};

export default List;
