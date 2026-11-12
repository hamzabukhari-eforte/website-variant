import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-phone-number-input/style.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/mie.scss";
import "../styles/globals.scss";
import "../src/component/header/header.style.scss";
import "react-table/react-table.css";

import Layout from "../src/component/layouts/mainLayout";
import { client } from "../src/apollo/client";
import { ApolloProvider } from "react-apollo";
import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/ConfigStore";
import Head from "next/head";
import { PersistGate } from "redux-persist/integration/react";
import Router from "next/router";
import PageChange from "../src/component/PageChange";
import ReactDOM from "react-dom";
import SideBar from "../src/component/sidecontactForm/Sidebar";
import CookieBanner from "../src/component/cookieBanner";
import { useEffect } from "react";
import * as ga from "react-ga";
import { useRouter } from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
Router.events.on("routeChangeStart", (url) => {
  document.body.classList.add("body-page-transition");
  ReactDOM.render(<PageChange path={url} />, document.getElementById("page-transition"));
});

Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
  document.body.classList.remove("body-page-transition");
});

function MyApp({ Component, pageProps }) {
  /**
   * Addng a div element with id page transition to show loading screen when switching between pages
   */
  if (typeof window !== "undefined") {
    const myDiv = document.createElement("div");
    myDiv.id = "page-transition";
    const body = document.querySelector("body");
    body.appendChild(myDiv);
  }

  useEffect(() => {
    const getTalkTo = () => {
      var Tawk_API = Tawk_API || {},
        Tawk_LoadStart = new Date();

      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/62a1abaa7b967b117993a0c1/1g53od59g";
      // s1.charSet = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    };

    const quoraPixelCode = () => {
      !(function (q, e, v, n, t, s) {
        if (q.qp) return;
        n = q.qp = function () {
          n.qp ? n.qp.apply(n, arguments) : n.queue.push(arguments);
        };
        n.queue = [];
        t = document.createElement(e);
        t.async = !0;
        t.src = v;
        s = document.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s);
      })(window, "script", "https://a.quora.com/qevents.js");
      qp("init", "9b8a8c9e206c4f698c5726ec04b13148");
      qp("track", "ViewContent");
    };

    if (typeof window !== "undefined") {
      getTalkTo();
      quoraPixelCode();
    }
  }, []);

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />

        <title>{pageProps?.metaData?.title}</title>

        <link rel="icon" href="/favicon.png" />
        <meta
          name="robots"
          content="noindex, nofollow, noarchive, nosnippet, noimageindex"
        />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet" />
        <meta name="bingbot" content="noindex, nofollow, noarchive, nosnippet" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1"
        />
        <meta name="locale" content="en_US" />
        <meta name="og:locale" content="en_US" />
        <meta property="og:image" content={pageProps?.metaData?.image} />
        <meta property="og:image:secure_url" content={pageProps?.metaData?.image} />
        <meta name="og:image" content={pageProps?.metaData?.image} />
        <meta name="og:type" content="website" />
        <meta name="url" content={`https://eforte.io${router.asPath}`} />
        <meta name="og:url" content={`https://eforte.io${router.asPath}`} />
        <meta name="og:title" content={pageProps?.metaData?.title} />
        <meta name="description" content={pageProps?.metaData?.description} />
        <meta name="og:description" content={pageProps?.metaData?.description} />
        <meta name="keywords" content={pageProps?.metaData?.keywords} />
        <meta name="og:site_name" content="eForte.io" />
        <meta name="article:published_time" content={pageProps?.metaData?.publishTime} />
        <link rel="canonical" href="https://eforte.io/blog/how-offshore-talent-is-solving-the-technical-challenges-for-startup-incubators" />
        <script
          key="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(pageProps?.structuredData) }}
        />
        {/* <script async src="build/react.js" /> */}
        <script async src="https://www.google.com/recaptcha/api.js" />
        {/* <script async src="build/index.js" /> */}
        <script
          type="text/javascript"
          src="https://2pay-js.2checkout.com/v1/2pay.js"
          async
        />
        {/* <script
          // strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-0D4QW9HQDE`}
          async
        />
        <script
          // strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0D4QW9HQDE', {
              page_path: window.location.pathname,
            });
          `,
          }}
        /> */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T2TMGH3');
`,
          }}
        ></script>

        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T2TMGH3"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(q,e,v,n,t,s){if(q.qp) return; 
              n=q.qp=function(){
                n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);
              }; 
              n.queue=[];
              t=document.createElement(e);
              t.async=!0;
              t.src=v; 
              s=document.getElementsByTagName(e)[0]; 
              s.parentNode.insertBefore(t,s);
            }
            (window, 'script', 'https://a.quora.com/qevents.js');
            qp('init', '9b8a8c9e206c4f698c5726ec04b13148');
            qp('track', 'ViewContent');`,
          }}
        ></script>
        <noscript>
          <img
            alt="quora-img"
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://q.quora.com/_/ad/9b8a8c9e206c4f698c5726ec04b13148/pixel?tag=ViewContent&noscript=1"
          />
        </noscript>
      </Head>
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Layout>
                <SideBar />
                <CookieBanner />
                <Component {...pageProps} />
              </Layout>
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
