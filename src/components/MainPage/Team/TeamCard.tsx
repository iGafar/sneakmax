import { FC } from "react";
import styled from "styled-components";
import { ITeam } from "../../../store/types";

interface IProps {
  data: ITeam;
}

const TeamCard: FC<IProps> = ({ data }) => {
  return (
    <TeamCardStyle>
      <picture>
        <img src={data.imgUrl} alt={data.name} />
      </picture>
      <h3>{data.name}</h3>
      <p>{data.role}</p>
    </TeamCardStyle>
  );
};

const TeamCardStyle = styled.li`
  color: rgb(255, 255, 255);

  picture {
    width: 340px;
    height: 360px;
    overflow: hidden;
    display: inline-block;
    margin-bottom: 20px;
    border-radius: 5px;

    img {
      width: 100%;
    }
  }

  h3 {
    font-family: "Intro";
    font-size: 24px;
    font-weight: 700;
    line-height: 24px;
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 140%;
  }
`;

export default TeamCard;
