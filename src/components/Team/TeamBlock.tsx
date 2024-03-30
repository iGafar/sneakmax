import { FC } from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";

export interface ITeam {
  id: number;
  imgUrl: string;
  name: string;
  role: string;
}

const teamData: ITeam[] = [
  {
    id: 1,
    imgUrl: "./images/team1.jpeg",
    name: "Максим Золотарев",
    role: "Администратор",
  },
  {
    id: 2,
    imgUrl: "./images/team1.jpeg",
    name: "Максим Золотарев",
    role: "Администратор",
  },
  {
    id: 3,
    imgUrl: "./images/team1.jpeg",
    name: "Максим Золотарев",
    role: "Администратор",
  },
  {
    id: 4,
    imgUrl: "./images/team1.jpeg",
    name: "Максим Золотарев",
    role: "Администратор",
  },
  {
    id: 5,
    imgUrl: "./images/team1.jpeg",
    name: "Максим Золотарев",
    role: "Администратор",
  },
];

const TeamBlock: FC = () => {
  return (
    <TeamBlockStyle id="team">
      <div className="container">
        <h2>Наша команда</h2>
        <ul>
          {teamData.map((item) => (
            <TeamCard data={item} key={item.id} />
          ))}
        </ul>
      </div>
    </TeamBlockStyle>
  );
};

const TeamBlockStyle = styled.section`
  background: rgb(72, 66, 131) url("./images/team-back.png") no-repeat top right;
  background-size: 30%;
  padding: 80px 0 56px;

  h2 {
    color: rgb(255, 255, 255);
    font-family: "Intro";
    font-size: 30px;
    font-weight: 700;
    line-height: 30px;
    margin-bottom: 35px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 32px 15px;
    flex-wrap: wrap;
  }
`;

export default TeamBlock;
