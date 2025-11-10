import { QuartzFilterPlugin } from "../types"

const allowedGenreMap:Record<string,boolean> ={
    "punk rock": true,
    "pop rock": true,
    "alt rock": true,
    "country": true,
    "german metal":false,
}


export const FilterGenre: QuartzFilterPlugin<{}> = () => ({
    name: "FilterGenre",
    shouldPublish(_ctx, [_tree, vfile]) {
        console.log(`[FilterGenre] File: ${vfile.data?.slug}`);
        console.log(`[FilterGenre] Frontmatter exists: ${!!vfile.data?.frontmatter}`);
        console.log(`[FilterGenre] Frontmatter keys: ${vfile.data?.frontmatter ? Object.keys(vfile.data.frontmatter).join(', ') : 'none'}`);
        console.log(`[FilterGenre] Frontmatter object:`, JSON.stringify(vfile.data?.frontmatter, null, 2));
        
        const genres: string[] = (vfile.data?.frontmatter as any)?.genre ?? [];
        console.log(`[FilterGenre] Genres array:`, genres);
        if(genres.length === 0){
            console.log(`No tags found for ${vfile.data?.frontmatter?.title}, publishing`);
            return true;
        }
        for (const genre of genres) {
            console.log(`Checking genre: ${genre}`);
            if (allowedGenreMap[genre]) {
                return true;
            } 
            else{
                    return false;
            }
        }
        return false;
    },
})