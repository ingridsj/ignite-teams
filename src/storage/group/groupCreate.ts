import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/config";
import { groupGetAll } from "./groupGetAll";

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupGetAll();

    const groupsToCreate = JSON.stringify([...storedGroups, newGroupName]);

    await AsyncStorage.setItem(GROUP_COLLECTION, groupsToCreate);
  } catch (error) {
    throw error;
  }
}
