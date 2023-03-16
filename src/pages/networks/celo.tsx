import { useState } from "react";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { Courier_Prime } from '@next/font/google';
import clsx from 'clsx';
import Download from '@mui/icons-material/Download';

import sdl from "public/images/sdl.png";

const title_font = Courier_Prime({
  weight: ['400'],
  preload: false,
});

export default function Celo() {
    const [title, setTitle] = useState('Celo');



    return ( 
      <>
      <Head>
        <title>Celo chain snapshot</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="description" content="Community run Celo network node snapsnot brought to you by SDL" />
        <meta name="keywords" content="Celo, crypto, blockchain, distributed computing, staking defense league, sdl" />
      </Head>
        <div className="app">
          <div className="top-bar">
            <Link href="/">
            <div className={clsx("title", title_font.className)}>snapshot.directory</div>
            </Link>
          </div>
          <div className="content">
          <div className="folder-container">
            <div className="folder-container-bg">
                <div className={clsx("folder-container-fg-network", title_font.className)}> 
                    <div className="folder-container-content">
                        <div className="code-block">
                            <span className={clsx("code-line", title_font.className)}>$ wget -nv -O - &quot;$SNAPSHOT_URI&quot; | lz4 --decompress --to-stdout | tar --directory &quot;$CELO_DATA_DIR&quot;/celo -xvf -</span>
                        </div>
                    </div>
                    <div>
                        <a href="http://celo.snapshot.directory"><Download/></a>
                    </div>
                </div>
            </div>
          </div>
          </div>
          <style jsx>{`
             .folder-container-fg-network::before {
               content: "${title}";
             }`}
           </style>
           <div className="footer">
          <a href="https://stakingdefense.org">
          <span>In collaboration with <Image src={sdl} alt="members" className="footer-image" /> members</span>
          </a>
        </div>
        </div>
      </>
    );
  }