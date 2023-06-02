import { TouchableOpacityProps } from "react-native";

import { Container, Title } from "./styles";

type Props = TouchableOpacityProps & {
  isActive?: boolean;
  title: string;
};

export function Filter({ title, isActive = false, ...rest }: Props) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
