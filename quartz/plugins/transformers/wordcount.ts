import { QuartzTransformerPlugin } from "../types"

export const WordCount: QuartzTransformerPlugin = () => {
    return{
        name: "WordCount",
    }
}