import { getLookupCount } from "../database/lookupController";
import { getBookCount } from "../database/bookController";

export async function prepKindleMeta() {
    const bookCount = await getBookCount();
    const lookupCount = await getLookupCount();
    const metadata = { ...bookCount, ...lookupCount };
    return metadata;
}
