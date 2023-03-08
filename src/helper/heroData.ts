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
    img_url: bread,
    title: "Bread",
    description: "yadda yadda yadda",
    price: 15,
    _id: 1,
  },
  {
    img_url:
      "https://images.unsplash.com/photo-1506976785307-8732e854ad03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWdnc3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Eggs",
    description: "yadda yadda yadda",
    price: 30,
    _id: 2,
  },
  {
    img_url:
      "https://images.unsplash.com/photo-1618164436241-4473940d1f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNoZWVzZXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Cheese",
    description: "yadda yadda yadda",
    price: 25,
    _id: 3,
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
