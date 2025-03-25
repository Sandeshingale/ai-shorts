import {serve} from "inngest/next"

import { GenerateVideoData, helloWorld } from "@/inngest/function"
import { inngest } from "@/inngest/client"

export const {GET,POST,PUT} =serve({
    client:inngest,
    functions:[
helloWorld,
GenerateVideoData
    ],
})