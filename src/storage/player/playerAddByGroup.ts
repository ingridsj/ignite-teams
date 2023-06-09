import AsyncStorage from "@react-native-async-storage/async-storage";
import { PLAYER_COLLECTION } from "@storage/config";
import { AppError } from "@utils/AppError";

import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { playersGetByGroup } from "./playersGetByGroup";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  group: string
) {
  try {
    const storedPlayers = await playersGetByGroup(group);

    const playerAlreadyExists = storedPlayers.filter((player) => {
      return player.name === newPlayer.name;
    });

    if (playerAlreadyExists.length > 0) {
      throw new AppError("Essa pessoa já está adicionada em um time aqui.");
    }

    const playersToCreate = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(
      `${PLAYER_COLLECTION}-${group}`,
      playersToCreate
    );
  } catch (error) {
    throw error;
  }
}
