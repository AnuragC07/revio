import Navbar from "../components/Navbar";
import { useState } from "react";
import ListItemBtn from "../components/ListItemBtn";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ListItem = () => {
  const [title, setTitle] = useState("");
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [previewImage1, setPreviewImage1] = useState(null);
  const [previewImage2, setPreviewImage2] = useState(null);
  const [previewImage3, setPreviewImage3] = useState(null);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("Book");
  const [description, setDescription] = useState("");
  const [productType, setProductType] = useState("Physical Copy");
  const [coverFile, setCoverFile] = useState(null);
  const [previewFile1, setPreviewFile1] = useState(null);
  const [previewFile2, setPreviewFile2] = useState(null);
  const [previewFile3, setPreviewFile3] = useState(null);
  const [digitalFile, setDigitalFile] = useState(null);
  const navigate = useNavigate();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleProductType = (e) => {
    setProductType(e.target.value);
  };

  const handleFileChange = (e, setFile, setImagePreview) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleDigitalFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setDigitalFile(selectedFile);
  };

  const handleListItem = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("productType", productType);
    formData.append("coverFile", coverFile);
    formData.append("previewFile1", previewFile1);
    formData.append("previewFile2", previewFile2);
    formData.append("previewFile3", previewFile3);

    axios
      .post("http://localhost:8000/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toast.success("Item listed successfully!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Error occurred! Please fill out all fields");
      });
  };

  const handleUploadDigitalCopy = () => {
    const formData = new FormData();
    formData.append("digitalCopy", digitalFile);
    formData.append("productId", "id-of-the-product");
  
    axios
      .post("http://localhost:8000/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toast.success("Digital copy uploaded successfully!");
      })
      .catch((error) => {
        console.error('Digital Upload Error:', error);
        toast.error("Error occurred during digital copy upload!");
      });
  };
  

  return (
    <>
      <Navbar />
      <div className="w-10/12 bg-white rounded-3xl mt-32 m-auto flex flex-row justify-between p-3 mb-4">
        <div>
          <label className="flex h-4/5 relative justify-center items-center rounded-2xl cursor-pointer max-h-fit overflow-hidden">
            <AddIcon className="text-stone-500" />
            <p className="ml-5 font-semibold text-stone-500">Add Cover Image</p>
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) =>
                handleFileChange(e, setCoverFile, setCoverImagePreview)
              }
              className="hidden"
            />
            {coverImagePreview && (
              <div className="mt-2 rounded-md absolute inset-0 flex justify-center items-center">
                <img
                  src={coverImagePreview}
                  alt="Preview"
                  className="max-h-full max-w-full object-contain rounded-lg"
                />
              </div>
            )}
          </label>
          <div className="flex flex-row gap-1">
            <label className=" h-44 w-44 m-3 rounded-md flex relative justify-center items-center cursor-pointer">
              <AddIcon className="text-stone-500" />
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) =>
                  handleFileChange(e, setPreviewFile1, setPreviewImage1)
                }
                className="hidden"
              />
              {previewImage1 && (
                <div className="mt-2 rounded-md absolute inset-0 flex justify-center items-center">
                  <img
                    src={previewImage1}
                    alt="Preview"
                    className="max-h-44 max-w-44 object-contain rounded-lg"
                  />
                </div>
              )}
            </label>
            <label className="h-44 w-44 m-3 rounded-md flex relative justify-center items-center cursor-pointer">
              <AddIcon className="text-stone-500" />
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) =>
                  handleFileChange(e, setPreviewFile2, setPreviewImage2)
                }
                className="hidden"
              />
              {previewImage2 && (
                <div className="mt-2 rounded-md absolute inset-0 flex justify-center items-center">
                  <img
                    src={previewImage2}
                    alt="Preview"
                    className="max-h-44 max-w-44 object-contain rounded-lg"
                  />
                </div>
              )}
            </label>
            <label className=" h-44 w-44 m-3 rounded-md flex relative justify-center items-center cursor-pointer">
              <AddIcon className="text-stone-500" />
              <input
                type="file"
                accept=".jpg, .jpeg, .png"
                onChange={(e) =>
                  handleFileChange(e, setPreviewFile3, setPreviewImage3)
                }
                className="hidden"
              />
              {previewImage3 && (
                <div className="mt-2 rounded-md absolute inset-0 flex justify-center items-center">
                  <img
                    src={previewImage3}
                    alt="Preview"
                    className="max-h-44 max-w-44 object-contain rounded-lg"
                  />
                </div>
              )}
            </label>
          </div>
        </div>
        <div className="rounded-3xl border border-stone-100 bg-stone-50 shadow-md w-1/2 p-8 flex flex-col justify-between">
          <div>
            <input
              type="text"
              className="border-b-2 border-stone-400 text-black font-heading font-bold text-3xl bg-stone-50 p-2 focus:border-b-2 focus:outline-none placeholder:font-normal w-full"
              placeholder="Give a Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex flex-row gap-5 mt-2">
              <select
                className="cursor-pointer border mt-4 border-stone-400 outline-none text-xs font-semibold rounded-xl px-3 py-1 bg-stone-100"
                value={category}
                onChange={handleCategory}
              >
                <option
                  value="Book"
                  className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1"
                >
                  Book
                </option>
                <option
                  value="Notes"
                  className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1"
                >
                  Notes
                </option>
                <option
                  value="Donation"
                  className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1"
                >
                  Donation
                </option>
              </select>
            </div>
            <textarea
              placeholder="Add a description"
              className="w-full border border-stone-200 bg-stone-50 h-44 mt-5 rounded-xl font-sub text-lg font-medium text-stone-500 p-4 outline-none"
              onChange={handleDescription}
            ></textarea>
            <div className="flex justify-between mt-10">
              <h2>Physical Copy</h2>
              {/* <select
                className="cursor-pointer outline-none font-sub text-xl font-bold text-stone-600 p-2 rounded-lg px-3 bg-stone-50"
                onChange={handleProductType}
              >
                <option
                  className="cursor-pointer outline-none font-semibold rounded-xl px-3 py-1"
                >
                  Physical Copy
                </option>
                <option
                  className="cursor-pointer outline-none font-semibold rounded-xl px-3 py-1"
                >
                  Digital Copy
                </option>
              </select> */}
              <input
                type="text"
                placeholder="Enter Price"
                className="font-sub text-2xl h-fit p-3 bg-stone-50 font-bold text-blue-700 placeholder:font-normal border-b-2 border-stone-400 outline-none w-44"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <input
              type="text"
              placeholder="Enter Quantity"
              className="font-sub text-lg font-bold text-stone-600 h-fit p-3 bg-stone-50 placeholder:font-normal border-b-2 border-stone-400 outline-none w-44"
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          {/* {productType === "Digital Copy" && (
            <div className="mt-5">
              <input
                type="file"
                accept=".pdf, .epub"
                onChange={handleDigitalFileChange}
                className="w-full border border-black rounded-lg"
              />
              <button
                onClick={handleUploadDigitalCopy}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Upload Digital Copy
              </button>
            </div>
          )} */}

          <button className="mb-20 mt-10" onClick={handleListItem}>
            <ListItemBtn />
          </button>
        </div>
      </div>
    </>
  );
};

export default ListItem;
