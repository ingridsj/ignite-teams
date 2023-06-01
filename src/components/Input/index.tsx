import * as S from "./styles";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return <S.Container {...rest} />;
}
