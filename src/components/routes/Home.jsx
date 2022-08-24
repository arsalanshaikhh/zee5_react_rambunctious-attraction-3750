import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  Flex,
  SimpleGrid,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import axios from "axios";
import ProductAddToCart from "../Moviecard";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  var key = "AIzaSyAKo2_8Ji4nOCiN1uTPBhgenXAbYm9XBQs";
  const getData = () => {
    axios({
      url: `https://www.googleapis.com/youtube/v3/search?regionCode=IN&part=snippet&key=${key}&type=video&maxResults=20`,
      method: "GET",
    })
      .then((res) => setData(res.data.items))
      .catch((err) => console.log(err));
  };
  // console.log(data);
  return (
    <SimpleGrid
      columns={[1, 3, 3, 6]}
      spacing="2%"
      p="3% 5%"
      color="white"
      bg="rgb(15,6,23)"
      w="100%"
    >
      <>
        {data.map((e) => {
          return <ProductAddToCart key={e.id} props={e}></ProductAddToCart>;
        })}
      </>
    </SimpleGrid>
  );
}

export default Home;
