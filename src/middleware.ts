import {authMiddleware} from '@clerk/nextjs'

export default authMiddleware({
    publicRoutes : [
        "/",
        "/auth(.*)",
        "/about",
        "/contact",
        "/events",
        "/sessions"
    ],
    ignoredRoutes : [
       
    ]
})
export const config = {
    matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
  }