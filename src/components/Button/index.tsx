import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: S.ButtonTypeStyleProps;
};

export function Button({ type = "PRIMARY", title, ...rest }: Props) {
  return (
    <S.Container {...rest} type={type}>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
