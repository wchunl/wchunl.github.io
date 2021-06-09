import * as React from "react";
import {
  FaGithub,
  FaDev,
  FaLinkedin,
  FaQuora,
  FaTwitter
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const siteConfig = {
    copyright: `Copyright © ${new Date().getFullYear()} Muhammad Ahmad. All Rights Reserved.`,
    author: {
      name: "Muhammad Ahmad",
      accounts: [
        {
          url: "https://github.com/wchunl",
          label: "Github Account",
          type: "gray",
          icon: <FaGithub />
        },
        // {
        //   url: "https://twitter.com/muhammad_ahmaad",
        //   label: "Twitter Account",
        //   type: "twitter",
        //   icon: <FaTwitter />
        // },
        {
          url: "https://www.linkedin.com/in/wai-chun-leung-a55745171",
          label: "LinkedIn Account",
          type: "linkedin",
          icon: <FaLinkedin />
        },
      ]
    }
  };
  
  export default siteConfig;
  