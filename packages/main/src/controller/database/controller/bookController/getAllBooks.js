import { dbHandler } from "../../repository/dbHandler";


export async function getAllBooks(folderPath) {
    const filePath = folderPath + '/system/vocabulary/vocab.db';
    let db = await dbHandler(filePath)
}