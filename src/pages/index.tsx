import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from 'next/head';
import { Courier_Prime } from '@next/font/google';
import clsx from 'clsx';
import { folder } from "@/utils/types";

import celo from "public/images/networks/celo.png";
import sui from "public/images/networks/sui.svg";
//TODO: add new network images here
import sdl from "public/images/sdl.png";


const title_font = Courier_Prime({
  weight: ['400'],
  preload: false,
});

interface FolderProps {
  folder: folder;
}

interface FolderContainerProps {
  folders: folder[];
}


export default function Home() {
  const [title, setTitle] = useState('Networks');

  useEffect(() => {
    document.title = "snapshot.directory";
  }, []);

  const folderData = [
    { id: 1, name: 'celo', image: celo },
    { id: 2, name: 'sui', image: sui },
    //TODO: add new network folder
  ];
  
  const Folder = ({ folder }: FolderProps) => (
 <div className="folder">
   <Link href="/networks/[foldername]]" as={`/networks/${folder.name}`}>
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
      <title>folder</title>
      <defs>
        <image  width="512" height="398" id="img1" href="data:image/png;base64,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"/>
      </defs>
      <style>
      </style>
      <use id="Background" href="#img1" x="0" y="57"/>
    </svg>
    <Image className="folder-image" alt="folder" src={folder.image}  />
    <div className="folder-name">{folder.name}</div>
    </Link>
  </div>
  );

  const FolderContainer = ({ folders }: FolderContainerProps) => (
    <div className="folder-container">
      <div className="folder-container-bg">
        <div className={clsx("folder-container-fg", title_font.className)}>
          <div className="folder-container-content">
            {folders.map((folder) => (
              <Folder key={folder.id} folder={folder} />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
             .folder-container-fg::before {
               content: "${title}";
             }`}
      </style>
    </div>
  );

  return ( 
    <>
    <Head>
      <title>snapshot.directory</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="description" content="Community run blockchain network node snapsnots brought to you by SDL" />
      <meta name="keywords" content="crypto, blockchain, distributed computing, staking defense league, sdl" />
      <meta property="og:image" content="/andriod-chrome-512x512.png"/>
      <meta property="og:image:type" content="image/png"/>
      <meta property="og:image:width" content="512"/>
      <meta property="og:image:height" content="512"/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://snapshot.directory"/>
    </Head>
      <div className="app">
        <div className="top-bar">
          <Link href="/">
          <div className={clsx("title", title_font.className)}>snapshot.directory</div>
          </Link>
        </div>
        <div className="content">
         <FolderContainer folders={folderData} />
        </div>
        <div className="footer">
          <a href="https://stakingdefense.org">
          <span>In collaboration with <Image src={sdl} alt="members" className="footer-image" /> members</span>
          </a>
        </div>
      </div>
      </>
  );
}


