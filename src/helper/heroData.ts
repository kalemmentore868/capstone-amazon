// @ts-nocheck
import camera from "../assets/img/camera.avif";
import shoe from "../assets/img/shoe.avif";
import watch from "../assets/img/watch.avif";
import headphone from "../assets/img/headphone.jpg";
import bread from "../assets/img/bread.jpg";

export interface HeroObj {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

export const dummyData2 = [
  {
    img_url:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YWxmcmVkb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Alfredo",
    description: "yadda yadda yadda",
    price: 40,
    id: 1,
  },
  {
    img_url:
      "https://images.unsplash.com/photo-1627662168223-7df99068099a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoZWVzeSUyMGJhY29uJTIwZnJpZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Nuggets and Fries",
    description: "yadda yadda yadda",
    price: 30,
    id: 2,
  },
  {
    img_url:
      "https://images.unsplash.com/photo-1542344807-21226ec94b39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Hot dogs",
    description: "yadda yadda yadda",
    price: 12,
    id: 3,
  },
];

export const heroList: HeroObj[] = [
  {
    src: camera,
    alt: "image of camera",
    title: "Camera",
    desc: "Lovely nikon camera, excellent for photographers",
  },
  {
    src: headphone,
    alt: "image of headphones",
    title: "Headphones",
    desc: "Lovely beats headphone, excellent for music listeners",
  },
  {
    src: shoe,
    alt: "image of shoes",
    title: "shoes",
    desc: "Lovely nike shoes, excellent for runners",
  },
  {
    src: watch,
    alt: "image of watch",
    title: "Watch",
    desc: "sleek watch",
  },
];
