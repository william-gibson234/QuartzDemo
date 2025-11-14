import { VFile } from "vfile"

export const allowedGenreMap:Record<string,boolean> = {
    "punk rock": true,
    "pop rock": true,
    "alt rock": true,
    "country": true,
    "indie r&b": true,
    "german metal":false,
    "indie pop": true,
    "pop punk": true,
}

export const genresFromFrontmatter = (vfile: VFile): string[] => 
    ((vfile.data?.frontmatter as any)?.genre ?? [])
