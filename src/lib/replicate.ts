import Replicate from "replicate";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import { storage } from "@/firebase/config";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_KEY,
});

const input = {
  prompt: "",
  height: 1280,
  width: 1024,
  num_outputs: 1,
};

const generateImage = async (prompt: string): Promise<string> => {
  input.prompt = prompt;

  const output = (await replicate.run(
    "bytedance/sdxl-lightning-4step:5599ed30703defd1d160a25a63321b4dec97101d98b4674bcc56e41f62f35637",
    { input },
  )) as string[];

  const imageResponse = await fetch(output[0], {
    method: "GET",
  });

  const arrayBuffer = await imageResponse.arrayBuffer();

  const base64Image =
    "data:image/png;base64," + Buffer.from(arrayBuffer).toString("base64");

  const fileName = "ai-short-video-files/" + Date.now() + ".png";

  const storageRef = ref(storage, fileName);

  await uploadString(storageRef, base64Image, "data_url");

  return await getDownloadURL(storageRef);
};

export { generateImage };
