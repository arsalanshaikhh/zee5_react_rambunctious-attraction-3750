import React, { useEffect, useState } from "react";
import { SimpleGrid, Text } from "@chakra-ui/react";
import axios from "axios";
import ProductAddToCart from "../Moviecard";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import { Alert } from "@coreui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@coreui/coreui/dist/css/coreui.min.css";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  // var key = "AIzaSyAKo2_8Ji4nOCiN1uTPBhgenXAbYm9XBQs";
  const getData = () => {
    axios({
      url: `http://localhost:8080/bolly`,
      method: "GET",
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
  // console.log(data);
  return (
    <>
      <div>
        <CCarousel controls>
          <CCarouselItem>
            <CImage
              className="d-block w-100 h-80"
              src="https://wallpaperaccess.com/full/637343.jpg"
              alt="slide 1"
            />
          </CCarouselItem>
          {/* <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/758165.jpg"
              alt="slide 2"
            />
          </CCarouselItem> */}
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/895201.jpg"
              alt="Game of Thrones"
            />
          </CCarouselItem>
          <CCarouselItem>
            <CImage
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/895179.jpg"
              alt="slide 3"
            />
          </CCarouselItem>
        </CCarousel>
      </div>
      <Text pt="10px" fontSize="2xl" bg="rgb(15,6,23)" color="white">
        Bollywood Movies
      </Text>
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
    </>
  );
}

export default Home;
