import { wordRepo } from "#preload"

export async function getWordsCount() {
    try {
        const wordCount = wordRepo.getWordCount()
        return wordCount
    } catch (error) {
        console.error(error)
    }
}