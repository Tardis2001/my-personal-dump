
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import InstagramProvider from "next-auth/providers/instagram"
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID ?? '',
            clientSecret: process.env.GITHUB_SECRET ?? '',
        }),
        InstagramProvider({
            clientId: process.env.INSTAGRAM_ID ?? '',
            clientSecret: process.env.INSTAGRAM_SECRET ?? '',
        }),
        // ...add more providers here
    ],
}

export default NextAuth(authOptions)