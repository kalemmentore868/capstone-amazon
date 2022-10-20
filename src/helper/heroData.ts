// @ts-nocheck
import camera from "../assets/img/camera.avif";
import shoe from "../assets/img/shoe.avif";
import watch from "../assets/img/watch.avif";
import headphone from "../assets/img/headphone.jpg";

export interface HeroObj {
  src: string;
  alt: string;
  title: string;
  desc: string;
}

export const dummyData = [
  {
    imgUrl: camera,
    title: "Camera",
    price: 200,
  },
  {
    imgUrl: headphone,
    title: "Headphones",
    price: 150,
  },
  {
    imgUrl: shoe,
    title: "shoes",
    price: 300,
  },
  {
    imgUrl: watch,
    title: "Watch",
    price: 50,
  },
  {
    imgUrl: camera,
    title: "Camera",
    price: 200,
  },
  {
    imgUrl: headphone,
    title: "Headphones",
    price: 150,
  },
];

const heroList: HeroObj[] = [
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
    desc: "Lovely beats headphon,e excellent for music listeners",
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

export default heroList;
