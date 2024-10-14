import { AssemblyAI, TranscriptWord } from "assemblyai";

const client = new AssemblyAI({
  apiKey: process.env.ASSEMBLYAI_API_KEY!,
});

const transcriptAudio = async (
  audioUrl: string,
): Promise<TranscriptWord[] | null | undefined> => {
  const config = {
    audio_url: audioUrl,
  };

  const { words } = await client.transcripts.transcribe(config);

  return words;
};

export { transcriptAudio };
