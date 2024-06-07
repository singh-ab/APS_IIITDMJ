import {authMiddleware} from '@clerk/nextjs'

export default authMiddleware({
    publicRoutes : [
        "/",
        "/auth(.*)",
        "/about"
    ],
    ignoredRoutes : [
       
    ]
})
export const config = {
    matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }