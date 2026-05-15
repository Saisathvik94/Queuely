"use server"

import { getCurrentUser } from "@/lib/auth"
import prisma from "@/lib/db"
import { generateApiKey } from "@/lib/apiKeys"
import { revalidatePath } from "next/cache"

export async function createApiKey(name: string) {
  const user = await getCurrentUser()
  const { rawKey, prefix, keyHash } = generateApiKey()

  await prisma.apiKey.create({
    data: {
      userId: user.id,
      name,
      prefix,
      keyHash,
    },
  })

  revalidatePath("/api-keys")
  
  return { rawKey } // Return raw key only once
}

export async function revokeApiKey(id: string) {
  const user = await getCurrentUser()

  await prisma.apiKey.update({
    where: {
      id,
      userId: user.id, // ensure user owns the key
    },
    data: {
      revokedAt: new Date(),
    },
  })

  revalidatePath("/api-keys")
}
