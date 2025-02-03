import NextAuth from 'next-auth'
import type { AuthOptions } from 'next-auth'
import KakaoProvider from 'next-auth/providers/kakao'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: AuthOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string
          password: string
        }
        /** 여기에 로그인 로직 추가 */
        return null
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 60 * 60 * 24,
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.name = user.name
        token.email = user.email
      }
      return token
    },
    session: async ({ session, token }) => {
      session.user = token
      return session
    },
  },
  secret: 'qwer1234',
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
