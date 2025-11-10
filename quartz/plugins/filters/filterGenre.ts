import { QuartzFilterPlugin } from "../types"

const allowedGenreMap:Record<string,boolean> ={
    "punk-rock": true,
    "pop-rock": true,
    "alt-rock": true,
    "country": true,
    "german-metal":false,
}


export const FilterGenre: QuartzFilterPlugin<{}> = () => ({
    name: "FilterGenre",
    shouldPublish(_ctx, [_tree, vfile]) {
        const tags: string[] = vfile.data?.frontmatter?.tags ?? [];
        for (const tag of tags) {
            if(tag.startsWith("genre:")){
                if (allowedGenreMap[tag.split(":")[1]]) {
                    return true;
                } 
            }
            else{
                return true;
            }
        }
        return false;
    },
})