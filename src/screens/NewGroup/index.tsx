import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { groupCreate } from "@storage/group/groupCreate";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import * as S from "./styles";

export function NewGroup() {
  const [newGroup, setNewGroup] = useState("");
  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      await groupCreate(newGroup);
      navigation.navigate("players", { group: newGroup });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <S.Container>
      <Header showBackButton />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={setNewGroup} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Container>
  );
}
