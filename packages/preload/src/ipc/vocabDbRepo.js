import { initVocabDb } from '../database/initConnections';
import { BookInfoRepository } from '../database/repository/bookInfoRepository';

export async function vocabDbRepo() {
  let repo = BookInfoRepository(initVocabDb());
  console.log(repo);
  return repo;
};
