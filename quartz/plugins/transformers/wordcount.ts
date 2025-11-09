import { Root as HTMLRoot } from "hast";
import { toString } from "hast-util-to-string";
import count from "word-count";
import { QuartzTransformerPlugin } from "../types";
import { VFile } from "vfile";

export const WordCount: QuartzTransformerPlugin = () => {
    return{
        name: "WordCount",
        htmlPlugins(){
            return [
                () =>{
                    return async (tree: HTMLRoot, file: VFile) => {
                        let text = toString(tree);
                        //console.log(text);
                        let wordCount = count(text);
                        console.log(file.data.relativePath,': ',wordCount);
                    }
                }
            ]
        }
    }
}