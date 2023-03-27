import { initVocabDb } from './database/initConnections';
import { BookInfoRepository } from './database/repository/bookInfoRepository'

export async function initVocabDbConnection() {
  let repo = BookInfoRepository(initVocabDb())
  return repo
}