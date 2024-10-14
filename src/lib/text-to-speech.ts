import textToSpeech from "@google-cloud/text-to-speech";
import * as protos from "@google-cloud/text-to-speech/build/protos/protos";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
import { storage } from "@/firebase/config";
import { createId } from "@paralleldrive/cuid2";

const client = new textToSpeech.TextToSpeechClient({
  apiKey: process.env.GOOGLE_API_KEY,
});

const generatedAudioVideo = async (
  scenes: { imagePrompt: string; contentText: string }[],
): Promise<string> => {
  let script = "";

  scenes.forEach(({ contentText }) => {
    script += contentText + " ";
  });

  const speechRequest = {
    input: { text: script },
    voice: {
      languageCode: "en-US",
      ssmlGender: protos.google.cloud.texttospeech.v1.SsmlVoiceGender.NEUTRAL,
    },
    audioConfig: {
      audioEncoding: protos.google.cloud.texttospeech.v1.AudioEncoding.MP3,
    },
  };

  const [response] = await client.synthesizeSpeech(speechRequest);

  const storageRef = ref(storage, `ai-short-video-files/${createId()}.mp3`);

  const audioBuffer = Buffer.from(response.audioContent!);

  await uploadBytes(storageRef, audioBuffer, { contentType: "audio/mp3" });

  return await getDownloadURL(storageRef);
};

export { generatedAudioVideo };
