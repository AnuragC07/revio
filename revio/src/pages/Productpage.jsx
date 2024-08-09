import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import DownloadIcon from "@mui/icons-material/Download";
const Productpage = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/${id}`)
      .then((response) => {
        setItem(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const addToBag = (item) => {
    const currentBag = JSON.parse(localStorage.getItem("bag")) || [];
    localStorage.setItem("bag", JSON.stringify([...currentBag, item]));
  };

  const handleDownload = () => {
    window.location.href = `http://localhost:8000/download/${id}`;
  };

  const getImageUrl = (filename) => {
    return item.file
      ? `http://localhost:8000/files/coverFile/${filename}`
      : `http://localhost:8000/images/${filename}`;
  };

  return (
    <>
      <Navbar />
      <div className="w-10/12 bg-white rounded-3xl mt-32 m-auto flex flex-row justify-between p-3 mb-4">
        <div>
          <div className="flex ">
            <img
              src={getImageUrl(item.image)}
              alt=""
              className="h-full w-full max-h-full ml-3 mb-4 rounded-md"
            />
          </div>
          {!item.file && (
            <div className="flex flex-row gap-1">
              <img
                src={getImageUrl(item.previewImage1)}
                alt=""
                className="h-44 w-44 m-3 rounded-md"
              />
              <img
                src={getImageUrl(item.previewImage2)}
                alt=""
                className="h-44 w-44 m-3 rounded-md"
              />
              <img
                src={getImageUrl(item.previewImage3)}
                alt=""
                className="h-44 w-44 m-3 rounded-md"
              />
            </div>
          )}
        </div>
        <div className=" rounded-3xl border border-stone-100 bg-stone-50 shadow-md h-fit w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-heading font-bold">{item.title}</h1>
            <div className="flex flex-row gap-5 mt-2">
              <p className="bg-slate-600 text-white w-fit px-3 py-1 font-semibold rounded-2xl text-xs">
                {item.category}
              </p>
              {item.file && (
                <p className="font-sub font-bold text-slate-700">
                  Digital Copy
                </p>
              )}
            </div>
            <p className="text-blue-700 font-sub font-semibold mt-4 cursor-pointer">
              {"by"} {item.seller}
            </p>
            <hr className="mb-8 mt-2 text-white" />
            <p className="font-sub text-lg font-medium text-stone-500 mt-3">
              {item.description}
            </p>
            <div className="flex justify-between">
              {!item.file && (
                <h2 className="font-sub text-2xl font-bold text-stone-600 mt-20">
                  {item.productType}
                </h2>
              )}
              <h2 className="font-sub text-3xl font-bold text-blue-700 mt-20">
                {item.price}
                {"₹"}
              </h2>
            </div>
            {!item.file && (
              <h3 className="font-sub text-base font-bold text-stone-600">
                {item.quantity}
                {" Left"}
              </h3>
            )}
          </div>
          <div className="mb-10 flex flex-row justify-between mx-8 mt-12">
            {item.file && item.price === 0 ? (
              <button
                onClick={handleDownload}
                className="rounded-2xl w-72 h-14 border border-stone-200  bg-white text-blue-700 px-4 py-2 flex justify-between mx-2 font-bold font-heading text-xl items-center shadow-md hover:shadow-lg"
              >
                <h2>Download</h2>
                <DownloadIcon />
              </button>
            ) : (
              <button
                onClick={() => addToBag(item)}
                className="rounded-2xl w-72 h-14 border border-stone-200  bg-white text-blue-700 px-4 py-2 flex justify-between mx-2 font-bold font-heading text-xl items-center shadow-md hover:shadow-lg"
              >
                <h2>Add to Bag</h2>
                <LocalMallRoundedIcon />
              </button>
            )}
            <Link to="/bag">
              <button className="rounded-2xl w-40 h-14 font-semibold font-heading text-lg border border-stone-200  bg-blue-600 text-white shadow-md">
                <h2>Go to Bag</h2>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Productpage;
