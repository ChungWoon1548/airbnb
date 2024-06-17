import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid4 } from "uuid";
import { FaPlus, FaMinus } from "react-icons/fa6";

const List = styled.ul`
  font-size: 0.8rem;
  margin-top: 1.5rem;
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-gray);
  padding: 1rem 0;
  &:last-child {
    border-bottom: none;
  }
`;

const PersonType = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
`;

const PersonAge = styled.p`
  font-size: 0.8rem;
  color: var(--font-gray);
  margin-top: 0.3rem;
`;

const Operators = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Operator = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  color: var(--font-gray);
  border-radius: 50%;
  border: 1px solid var(--font-gray);
  background-color: transparent;
  cursor: pointer;
  &:hover {
    color: #000000;
    border: 1px solid #000000;
  }
`;

const Count = styled.span`
  font-size: 1.1rem;
`;

export default function Traveler({ handleTraveler, travelerDetail }) {
  const guestsCnt = Object.values(travelerDetail);
  const [guests, setGuests] = useState(initGuests);

  const handleCount = (e, type, operator) => {
    e.stopPropagation();
    if (operator === "minus") {
      setGuests((guests) =>
        guests.map((guest) => (guest.type === type ? { ...guest, count: guest.count - 1 } : guest))
      );
    } else {
      setGuests((guests) =>
        guests.map((guest) => (guest.type === type ? { ...guest, count: guest.count + 1 } : guest))
      );
    }
    handleTraveler(type, operator);
  };

  return (
    <>
      <List>
        {guests.map((guest, idx) => (
          <Item key={uuid4()}>
            <div>
              <PersonType>{guest.text}</PersonType>
              <PersonAge>{guest.age}</PersonAge>
            </div>
            <Operators>
              <Operator
                type="button"
                disabled={guestsCnt[idx] === 0}
                onClick={(e) => handleCount(e, guest.type, "minus")}
              >
                <FaMinus />
              </Operator>
              <Count>{guestsCnt[idx]}</Count>
              <Operator type="button" onClick={(e) => handleCount(e, guest.type, "plus")}>
                <FaPlus />
              </Operator>
            </Operators>
          </Item>
        ))}
      </List>
    </>
  );
}

const initGuests = [
  {
    text: "성인",
    type: "adult",
    age: "13세 이상",
  },
  {
    text: "어린이",
    type: "child",
    age: "2~12세",
  },
  {
    text: "유아",
    type: "baby",
    age: "2세 미만",
  },
];
