import { client } from "@/shared/api/client";

type Uuid = string;
type UserId = Uuid;
type Email = string;
type UserName = string;

interface User {
  id: UserId;
  email: Email;
  name: UserName;
}

type AccessToken = string;

interface Session {
  user: User;
  accessToken: AccessToken;
}

export const signInWithEmail = async ({
  email,
}: {
  email: Email
}): Promise<Session> => {
  const { data, error } = await client.auth.signInWithOtp({
    email,
  });

  if (error) {
    throw new Error(error.message);
  }

  const user = {
    id: data.user?.id as string,
    email,
    name: data.user?.user_metadata.name || "",
  };

  const accessToken = data.session?.access_token || "";

  return {
    user,
    accessToken,
  };

};

export const signOut = async (): Promise<void> => {
  const { error } = await client.auth.signOut();

  if (error) {
    throw  new Error(error.message);
  }
};
