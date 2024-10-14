import { NextRequest, NextResponse } from "next/server";
import { db } from "@/drizzle/db";
import { Videos } from "@/drizzle/schemas";
import { eq } from "drizzle-orm";
import { clerkClient, getAuth } from "@clerk/nextjs/server";

export async function POST(request: NextRequest) {
  // const { video } = await request.json();
  // const { userId } = getAuth(request);
  //
  // if (!userId) {
  //   return NextResponse.json(
  //     { error: "Usuário não autenticado." },
  //     { status: 401 },
  //   );
  // }
  //
  // const prompt = PROMPT.replace("#DURATION#", video.duration)
  //   .replace("#TOPIC#", video.topic)
  //   .replace("#IMAGE_STYLE#", video.imageStyle);
  //
  // const resultChatMessage = await chatSession.sendMessage(prompt);
  //
  // const { scenes } = JSON.parse(resultChatMessage.response.text()) as {
  //   scenes: { imagePrompt: string; contentText: string }[];
  // };
  //
  // const audioUrl = await generatedAudioVideo(scenes);
  //
  // const captions = await transcriptAudio(audioUrl);
  //
  // const imagesUrl: string[] = [];
  //
  // for (const { imagePrompt } of scenes) {
  //   const imageUrl = await generateImage(imagePrompt);
  //
  //   imagesUrl.push(imageUrl);
  // }
  //
  // const user = await clerkClient().users.getUser(userId);
  // const email = user.emailAddresses[0]?.emailAddress;

  // const videoResult = await db
  //   .insert(Videos)
  //   .values({
  //     script: scenes,
  //     audioUrl,
  //     captions,
  //     images: imagesUrl,
  //     createdBy: email,
  //   })
  //   .returning();

  const videoResult = await db
    .select()
    .from(Videos)
    .where(eq(Videos.id, "yepk6kroxaznlrlacd4if8je"));

  return NextResponse.json({ video: videoResult[0] }, { status: 201 });
}

export async function GET(request: NextRequest) {
  const { userId } = getAuth(request);

  if (!userId) {
    return NextResponse.json(
      { error: "Usuário não autenticado." },
      { status: 401 },
    );
  }

  const user = await clerkClient().users.getUser(userId);
  const email = user.emailAddresses[0]?.emailAddress;

  const videos = await db
    .select()
    .from(Videos)
    .where(eq(Videos.createdBy, email));

  return NextResponse.json(videos);
}
