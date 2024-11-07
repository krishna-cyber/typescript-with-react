import React, { useState } from "react";

const Index = () => {
    type Link = {
        id: number;
        url: string;
        text: string
    }
  let navLinks:Link[] = [
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    {
      id: 2,
      url: "/about",
      text: "About",
    },
    {
      id: 3,
      url: "/services",
      text: "Services",
    },
    {
      id: 4,
      url: "/contact",
      text: "Contact",
    },
  ];
  const [text, setText] = useState<string>();
  const [count, setCount] = useState(0);
  const [link,setLink]= useState<Link[]>(navLinks)

  return <div>Index</div>;
};

export default Index;
