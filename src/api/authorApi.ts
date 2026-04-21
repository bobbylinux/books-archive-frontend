import type { Author } from "../model/Author";
import type { AuthorDTO } from "../dto/AuthorDTO";
import type { AuthorInput } from "../model/AuthorInput";
import { mapAuthor, mapAuthors } from "../mappers/AuthorMapper";
import { api } from "./axiosInstance";

const BASE_URL = "/authors";

export async function getAuthors(): Promise<Author[]> {
  const response = await api.get<AuthorDTO[]>(BASE_URL);
  return mapAuthors(response.data);
}

export async function getAuthor(id: number): Promise<Author> {
  const response = await api.get<AuthorDTO>(`${BASE_URL}/${id}`);
  return mapAuthor(response.data);
}

export async function createAuthor(data: AuthorInput): Promise<Author> {
  const response = await api.post<AuthorDTO>(BASE_URL, {
    first_name: data.firstName,
    last_name: data.lastName,
  });

  return mapAuthor(response.data);
}

export async function updateAuthor(
  id: number,
  data: AuthorInput,
): Promise<Author> {
  const response = await api.put<AuthorDTO>(`${BASE_URL}/${id}`, {
    first_name: data.firstName,
    last_name: data.lastName,
  });

  return mapAuthor(response.data);
}

export async function deleteAuthor(id: number): Promise<void> {
  await api.delete(`${BASE_URL}/${id}`);
}
