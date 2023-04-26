import { wordRepo, bookRepo } from "#preload";

export async function getBookTitlesByWord(word) {
    try {
        const wordData = await wordRepo.getWordUsageByWord(word);
        return wordData;
    } catch (error) {
        console.error(error);
    }
}
