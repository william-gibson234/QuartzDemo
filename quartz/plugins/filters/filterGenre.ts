import { QuartzFilterPlugin } from "../types"

const genreList = ["punk-rock","pop-rock","alt-rock","country"];


export const FilterGenre: QuartzFilterPlugin<{}> = () => ({
    name: "FilterGenre",
    shouldPublish(_ctx, [_tree, vfile]) {
        // Add your filter logic here
        // Return true to publish, false to exclude
        if(vfile.data.frontmatter){
            console.log(vfile.data.frontmatter.tags);
            return true
        }
        return false;
    },
})