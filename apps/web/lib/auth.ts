import { auth, currentUser } from "@clerk/nextjs/server"
import prisma from "@queuely/db"
import { redirect } from "next/navigation"

export async function getCurrentUser() {
  const { userId: clerkId } = await auth()

  if (!clerkId) {
    redirect("/sign-in")
  }

  let user = await prisma.user.findUnique({
    where: { clerkId },
  })

  // Fallback: If user is not in DB (e.g. webhook failed or delayed), create them now
  if (!user) {
    const clerkUser = await currentUser()
    if (!clerkUser) redirect("/sign-in")
      
    const email = clerkUser.emailAddresses[0]?.emailAddress
    if (!email) redirect("/sign-in")

    user = await prisma.user.create({
      data: {
        clerkId: clerkId,
        email: email,
        name: [clerkUser.firstName, clerkUser.lastName].filter(Boolean).join(' ') || null,
      },
    })
  }

  return user
}
