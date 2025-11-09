import { Root as HTMLRoot } from "hast";
import { toString } from "hast-util-to-string";
import count from "word-count";
import { QuartzTransformerPlugin } from "../types";

export const WordCount: QuartzTransformerPlugin = () => {
    return{
        name: "WordCount",
        htmlPlugins(){
            return [
                () =>{
                    return async (tree: HTMLRoot,file) =>{
                        let text = toString(tree);
                        console.log(text);
                    }
                }
            ]
        }
    }
}