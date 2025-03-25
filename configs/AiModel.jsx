const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
  
    export const generateScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "write a two diffrent script for 30 seconds video on topic: kids Story\nGive me response in JSON format and follow the schema\n{\nscripts:[\n{\ncontent:\"\"\n},\n],\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"scripts\": [\n    {\n      \"content\": \"(SCENE START - ANIMATED BOOK OPENING) \\n\\n**(NARRATOR, warm and inviting voice):** Once upon a time, in a land filled with rainbow trees and giggling clouds, lived a little firefly named Flicker. (Show animation of Flicker flying hesitantly)\\n\\n**(SOUND:** Soft, whimsical music) \\n\\n**(NARRATOR):** Flicker was different. His light…it didn’t shine as bright as the other fireflies. (Flicker's light dims, sad expression) \\n\\n**(NARRATOR):** But Flicker didn't give up! He practiced every night, wiggling his little bottom and focusing all his energy. (Quick montage of Flicker practicing) \\n\\n**(NARRATOR):** And then, one night… (Flicker glows with a vibrant light, illuminating the screen.) He shone brighter than ever before! He realized it wasn't about how bright he shone, but that he did not give up on himself. \\n\\n**(NARRATOR):** The End! (ANIMATED BOOK CLOSES. Screen fades out.)\"\n    },\n    {\n      \"content\": \"(SCENE START - LIVE ACTION. A child, around 6-8, sits on a cozy rug, surrounded by stuffed animals. They are holding a drawing of a monster.)\\n\\n**(CHILD, speaking directly to camera):** Meet Grumbles! (Holds up drawing) Grumbles is a monster, but he's not scary. \\n\\n**(SOUND:** Gentle, playful music)\\n\\n**(CHILD):** He used to be lonely because everyone thought he was grumpy. (Close up of the drawing, showing a sad-looking monster.) \\n\\n**(CHILD):** But then, I drew him! And I gave him a best friend - a fluffy purple bunny. (Shows addition of a bunny to the drawing). \\n\\n**(CHILD):** Now, Grumbles isn't lonely anymore. He loves playing with his bunny and having adventures in my imagination! (Child smiles broadly). Even the scariest monsters just need a friend! (Child giggles, hugs the drawing to their chest). \\n\\n(FADE OUT)\"\n    }\n  ]\n}\n```"},
          ],
        },
      ],
    });
  
    export const GeneratImageScript = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate Image prompt of anime style with all details for each scene for 30 seconds video : script : A boy who was born without a magic in his world where magic is everything and now he wants to prove the citizens of the village magic us not everything and he will become wizard king of the world so that people will acknowledge him \n-Just Give specifing image prompt depends on the story line\n-do not gove camera angle image prompt\n-follow the following schema and return JSON data (Max 4-5 Images)\n[\n{\nimagePrompt:'',\nsceneContent:'<Script Content>'\n}\n]"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "I am sorry, I can't generate images myself. This capability is only enabled for the \"Gemini 2.0 Flash Experimental\" model when the selected output format is \"Images and text\". However, I can provide you with a JSON containing image prompts based on your storyline.\n\n```json\n[\n  {\n    \"imagePrompt\": \"Anime style, close-up of a young boy (around 12 years old) with determined eyes and messy brown hair. He's wearing simple, slightly worn clothing. Background: A bustling, fantasy village with magical energy swirling in the air; people casting spells, glowing objects, and floating structures.\",\n    \"sceneContent\": \"A boy who was born without magic in a world where magic is everything...\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, medium shot of the boy standing in the village square, looking up at a group of older children effortlessly performing magic spells. His expression is a mix of envy and determination. The villagers around him are indifferent or scornful.\",\n    \"sceneContent\": \"...and now he wants to prove the citizens of the village magic is not everything...\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, action shot of the boy training intensely in a forest clearing. He's using makeshift training equipment (logs, rocks) and his body is covered in sweat and dirt. Focus on his physical strength and raw determination. Sunlight streams through the trees.\",\n    \"sceneContent\": \"...and he will become wizard king of the world...\"\n  },\n  {\n    \"imagePrompt\": \"Anime style, wide shot of the boy, now older (around 16), standing confidently atop a mountain peak. He's wearing more refined but still practical clothing. The wind whips through his hair as he looks out at a vast, magical landscape. His eyes are filled with unwavering resolve.\",\n    \"sceneContent\": \"...so that people will acknowledge him.\"\n  }\n]\n```\n"},
          ],
        },
      ],
    });
    //const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    //console.log(result.response.text());
  
  
  