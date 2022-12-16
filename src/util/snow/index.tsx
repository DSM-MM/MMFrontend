import { useState, createContext } from "react";
import SnowFall, { SnowfallProps } from "react-snowfall";
import styled from "@emotion/styled";

export interface SnowFallType extends SnowfallProps {
  setColor: (color: string) => void;
  setSnowflakeCount: (count: number) => void;
}

export interface PropsType {
  children: React.ReactNode;
}

export const SettingContext = createContext<Partial<SnowFallType>>({});

export const SnowStyleProvider = ({ children }: PropsType) => {
  const [color, setColor] = useState<string>("#dee4fd");
  const [snowflakeCount, setSnowflakeCount] = useState<number>(200);
  return (
    <_Wrapper>
      <SettingContext.Provider
        value={{ color, setColor, snowflakeCount, setSnowflakeCount }}
      >
        <SnowFall color={color} snowflakeCount={snowflakeCount} />
        {children}
      </SettingContext.Provider>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 70%;
  height: 30vh;
`;
