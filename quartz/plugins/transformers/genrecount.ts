import {QuartzTransformerPlugin} from "../types"
import {allowedGenreMap, genresFromFrontmatter} from "../allowedGenreConfig"
import { Root as HTMLRoot } from "hast";
import {VFile} from "vfile";


const genreOccurencesMap: Record<string, number> = createEmptyGenreOccurencesMap(allowedGenreMap);
console.log(genreOccurencesMap);

export const GenreCount: QuartzTransformerPlugin = () => {
    return{
        name: "GenreCount",
        htmlPlugins(){
            return [
                () =>{
                    return async(tree: HTMLRoot, file: VFile) => {
                        const genres: string[] = genresFromFrontmatter(file);
                }
                }
            ]
        }
    }
}

function createEmptyGenreOccurencesMap(allowedGenres: Record<string,boolean>): Record<string, number> {
    const genreOccurencesMap:Record<string, number> ={};
    for (const genre of Object.keys(allowedGenres)) {
        genreOccurencesMap[genre] = 0;
    }
    return genreOccurencesMap;
}