import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";
import SideNav from "~/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="This is the twitter clone by Khant Sithu." />
      </Head>
      <div className="container mx-auto flex">
        <SideNav />
        <div className="min-h-screen border-x flex-grow items-start sm:pr-5">
          <Component {...pageProps} />
      </div>
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
