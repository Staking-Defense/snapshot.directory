import { useState } from "react";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { Courier_Prime } from '@next/font/google';
import clsx from 'clsx';
import GitHub from '@mui/icons-material/GitHub';

import sdl from "public/images/sdl.png";

const title_font = Courier_Prime({
  weight: ['400'],
  preload: false,
});

export default function Celo() {
    const [title, setTitle] = useState('YOUR_NETWORK_NAME_HERE'); //TODO: Replace with your network name



    return ( 
      <>
      <Head>
        <title>YOUR_NETWORK_NAME chain snapshot</title> {/*TODO: Replace with your network name */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <meta name="description" content="Community run <YOUR_NETWORK_NAME> network node snapsnot brought to you by SDL" /> {/*TODO: Replace with your network name */}
        <meta name="keywords" content="<YOUR_NETWORK_NAME>, crypto, blockchain, distributed computing, staking defense league, sdl" /> {/*TODO: Replace with your network name */}
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
                            {/* <span className={clsx("code-line", title_font.className)}>$ wget https://mainnet.celo.snapshot.directory/celo.tar.lz4</span>  //TODO: Replace with your command instructions 
                            <br/>
                            <span className={clsx("code-line", title_font.className)}>$ lz4 -d celo.tar.lz4 | tar -xvf - -C /celo</span> */}
                        </div>
                    </div>
                    <div>
                        <a href="<LINK_TO_ANSIBLE/TERRAFORM ETC>"><GitHub/></a> {/*TODO: If you are using automation to deploy link it here */}
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