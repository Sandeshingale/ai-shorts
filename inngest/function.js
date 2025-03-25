import axios from "axios";
import { inngest } from "./client";
import { createClient } from "@deepgram/sdk";
import { GeneratImageScript } from "@/configs/AiModel";
import { ConvexHttpClient } from "convex/browser";
const ImagePromptScript =`Generate Image prompt of {style} style with all details for each scene for 30 seconds video : script : {script}
-Just Give specifing image prompt depends on the story line
-do not gove camera angle image prompt
-follow the following schema and return JSON data (Max 4-5 Images)
[
{
imagePrompt:'',
sceneContent:'<Script Content>'
}
]
`


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    return { message: `Hello ${event.data.email}!` };
  },
);

const BASE_URL='https://aigurulab.tech';
export const GenerateVideoData = inngest.createFunction(
    { id: 'generate-video-data' },
    { event: 'generate-video-data' },
    async ({ event, step }) => {
      const { script, topic, title, caption, videoStyle, voice,recordId } = event?.data;
      const convex=new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL,{
        fetchTimeoutMs:10000,
      })
      const GenerateAudioFile = await step.run(
        "GenerateAudioFile",
        async () => {
          
          const result =  await axios.post(
            BASE_URL + '/api/text-to-speech',
            {
              input: script,
              voice: voice
            },
            {
              headers: {
                'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY,
                'Content-Type': 'application/json',
              },
            }
          );
            console.log(result.data.audio)
            return "https://firebasestorage.googleapis.com/v0/b/projects-2025-71366.firebasestorage.app/o/audio%2F1742636145777.mp3?alt=media&token=84d59a97-fbd4-4d6e-9e12-a8beb4b851ce"
          
        }
      );
  
      // const GenrateCaptions = await step.run(

      //   "generateCaptions",
      //   async()=>{
      //     const deepgram=createClient(process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY)
        
      //     const{result,error}= await deepgram.listen.prerecorded.transcribeUrl(
      //       {
      //         url:GenerateAudioFile,
      //       },
      //       {
      //         model:"nova-3",
              
      //       }
            
      //     )
      //     return result.results?.channels[0]?.alternatives[0]?.words
      //   }
      // )

//       const GenrateImagePrompts=await step.run(
//         "generateImagePrompt",
//         async()=>{
//           const  FINAL_PROMPT=ImagePromptScript.replace("{style}",videoStyle).replace('{script}',script)
//           const result=await GeneratImageScript.sendMessage(FINAL_PROMPT)
//           const resp=JSON.parse(result.response.text())

//           return resp
//         }

// )

      // const GenerateImages=await step.run(
      //   "generateImages",
      //   async()=>{
      //     let images=[]
      //     images = await Promise.all(
      //       GenrateImagePrompts.map(async(element)=>{
      //         const result = await axios.post(BASE_URL+'/api/generate-image',
      //           {
      //               width: 1024,
      //               height: 1024,
      //               input: element?.imagePrompt,
      //               model: 'sdxl',//'flux'
      //               aspectRatio:"1:1"//Applicable to Flux model only
      //           },
      //           {
      //               headers: {
      //                   'x-api-key': process.env.NEXT_PUBLIC_AIGURULAB_API_KEY, // Your API Key
      //                   'Content-Type': 'application/json', // Content Type
      //               },
      //           })
      //   console.log(result.data.image) //Output Result: Base 64 Image
      //           return result.data.image
      // }   
      //       )
      //     )
      //     return images
      //   }
      // )

      const UpdateDB=await step.run(
        'UpdateDB',
        async()=>{

             const result=await convex.mutation(api.videoData.UpdateVideoRecord,
              {
                recordId:recordId,
                audioUrl:'',
                captionJson:[],
                images:[]
              }

             )
             return result;
        }
      )
      return UpdateDB
    }
  );
