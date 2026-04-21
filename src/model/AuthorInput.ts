import type { Author } from "./Author";

export type AuthorInput = Omit<Author, "id">;
