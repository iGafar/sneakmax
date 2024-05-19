import React, { FC } from "react";
import styled from "styled-components";
import TeamCard from "./TeamCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { fetchTeam } from "../../../store/slices/teamSlice";
import { ITeam } from "../../../store/types";

const TeamBlock: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const teamData = useSelector<RootState, ITeam[]>((state) => state.team.data);

  React.useEffect(() => {
    dispatch(fetchTeam());
  }, [dispatch]);

  return (
    <TeamBlockStyle id="team">
      <div className="container">
        <h2>Наша команда</h2>
        <ul>
          {teamData &&
            teamData.map((item: ITeam) => (
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
