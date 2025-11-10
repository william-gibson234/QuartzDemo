import { VFile } from "vfile"

export const allowedGenreMap:Record<string,boolean> = {
    "punk rock": true,
    "pop rock": true,
    "alt rock": true,
    "country": true,
    "german metal":false,
}

export const genresFromFrontmatter = (vfile: VFile): string[] => 
    ((vfile.data?.frontmatter as any)?.genre ?? [])
