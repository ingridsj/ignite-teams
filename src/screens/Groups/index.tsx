import { Header } from "@components/Header";

import * as S from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <S.Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Galera do Ignite" />
    </S.Container>
  );
}
