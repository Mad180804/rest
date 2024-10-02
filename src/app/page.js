

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Head from 'next/head';
import './globals.css';
import BG from './components/BG';
import BGText from './components/BG-text';
import MENU from './components/MENU';
export default function Home() {

  return (
    <>
      <div style={{ position: 'relative' }}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;200i&display=swap"
            rel="stylesheet"
          />

        </Head>
       
        <div style={{   backgroundColor:"#404040",}}>  <Header /></div>
          <BG/>
        
        {/* <BGText/> */}
        <MENU/>
        </div>

    </>
  );
}
