import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/config";
import { groupGetAll } from "./groupGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupGetAll();

    const newGroupWithoutSpace = newGroupName.trim();

    const groupAlreadyExists = storedGroups.includes(newGroupWithoutSpace);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const groupsToCreate = JSON.stringify([
      ...storedGroups,
      newGroupWithoutSpace,
    ]);

    await AsyncStorage.setItem(GROUP_COLLECTION, groupsToCreate);
  } catch (error) {
    throw error;
  }
}
