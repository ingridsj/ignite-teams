import { TextInputProps } from "react-native";
import { useTheme } from "styled-components";
import * as S from "./styles";

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  return <S.Container {...rest} placeholderTextColor={COLORS.GRAY_300} />;
}
