import Layout from "@components/Layout/Layout";
import AppContextShop from 'context/AppContextShop.js'
import useContextInitialCartState from "Hooks/useContextInitialCartState";
import Navbar from "@components/Navbar/Navbar";

export default function MyApp({ Component, pageProps }) {
  const initialState = useContextInitialCartState()
  return (
    <AppContextShop.Provider value={initialState} >
      <Navbar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextShop.Provider>
  )
}