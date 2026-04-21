import type { AuthorDTO } from "@/dto/AuthorDTO";
import type { Author } from "@/model/Author";

export function mapAuthor(dto: AuthorDTO): Author {
  return {
    id: dto.id,
    firstName: dto.first_name,
    lastName: dto.last_name,
  };
}

export function mapAuthors(dtos: AuthorDTO[]): Author[] {
  return dtos.map(mapAuthor);
}
