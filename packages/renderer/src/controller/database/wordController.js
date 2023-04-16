import { wordRepo } from "#preload"

export async function getWordsCount() {
    try {
        const wordCount = await wordRepo.getWordCount()
        return wordCount
    } catch (error) {
        console.error(error)
    }
}