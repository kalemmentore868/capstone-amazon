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
    title: "Hobbies",
    description: "yadda yadda yadda",
  },
  {
    imgUrl: headphone,
    title: "Electronics",
    description: "yadda yadda yadda",
  },
  {
    imgUrl: shoe,
    title: "Footwear",
    description: "yadda yadda yadda",
  },
  {
    imgUrl: watch,
    title: "Accessories",
    description: "yadda yadda yadda",
  },
  {
    imgUrl: camera,
    title: "Hobbies",
    description: "yadda yadda yadda",
  },
  {
    imgUrl: headphone,
    title: "Electronics",
    description: "yadda yadda yadda",
  },
];

export const dummyData2 = [
  {
    imgUrl: camera,
    title: "Camera",
    description: "yadda yadda yadda",
    price: 150,
  },
  {
    imgUrl: headphone,
    title: "Headphones",
    description: "yadda yadda yadda",
    price: 50,
  },
  {
    imgUrl: shoe,
    title: "shoes",
    description: "yadda yadda yadda",
    price: 90,
  },
  {
    imgUrl: watch,
    title: "Watch",
    description: "yadda yadda yadda",
    price: 600,
  },
  {
    imgUrl: camera,
    title: "Camera",
    description: "yadda yadda yadda",
    price: 450,
  },
  {
    imgUrl: headphone,
    title: "Headphones",
    description: "yadda yadda yadda",
    price: 1444,
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
