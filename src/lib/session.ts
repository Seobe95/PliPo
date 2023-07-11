import * as jose from "jose";

interface SessionParams {
  data: Record<string, any>;
  expiresIn: string | number;
}

export const signToken = async ({ data, expiresIn }: SessionParams) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  const alg = "HS256";

  try {
    const token = await new jose.SignJWT(data)
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
  return token;
  } catch (e) {
    console.log(e, "토큰만들기 시류패")
  }

  
};

export const verifyToken = async <T>(token: string): Promise<T> => {
  try {
    return (
      await jose.jwtVerify(
        token,
        new TextEncoder().encode(process.env.JWT_SECRET)
      )
    ).payload as T;
  } catch (e) {
    throw new Error("token expired");
  }
};
