import Navbar from "../components/Navbar";
import { useState } from "react";
import ListItemBtn from "../components/ListItemBtn";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const DigitalCopy = () => {
  const [title, setTitle] = useState("");
  const [coverImagePreview, setCoverImagePreview] = useState(null);
  const [price, setPrice] = useState("");
  // const [quantity, setQuantity] = useState("1");
  const [category, setCategory] = useState("Book");
  const [description, setDescription] = useState("");
  // const [productType, setProductType] = useState("Digital Copy");
  const [coverFile, setCoverFile] = useState(null);
  const [digitalFile, setDigitalFile] = useState([]);
  const navigate = useNavigate();

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
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
    // formData.append("quantity", quantity);
    formData.append("category", category);
    formData.append("description", description);
    // formData.append("productType", productType);
    formData.append("coverFile", coverFile);
    formData.append("digitalFile", digitalFile);

    axios
      .post("http://localhost:8000/digital-copy", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        toast.success("Item listed successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.log("error occurred", error);
        toast.error("Error occurred! Please fill out all fields");
      });
  };

  return (
    <>
      <Navbar />
      <div className="w-10/12 bg-white rounded-3xl mt-32 m-auto flex flex-row justify-between p-3 mb-4">
        <div>
          <label className="flex h-3/5 relative justify-center items-center rounded-2xl cursor-pointer max-h-fit overflow-hidden">
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
          <label>
            <input
              type="file"
              accept=".pdf, .epub"
              onChange={handleDigitalFileChange}
              className="w-full border border-black rounded-lg"
            />
          </label>
        </div>
        <div className="rounded-3xl bg-stone-50 w-1/2 p-8 flex flex-col justify-between">
          <div>
            <input
              type="text"
              className="border-b-2 border-stone-400 text-black font-heading font-bold text-3xl bg-stone-50 p-2 focus:border-b-2 focus:outline-none placeholder:font-normal w-full"
              placeholder="Give a Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex flex-row gap-5 mt-2">
              <select
                className="cursor-pointer outline-none text-xs font-semibold rounded-xl px-3 py-1 bg-stone-200"
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
              <input
                type="text"
                placeholder="Enter Price"
                className="font-sub text-2xl h-fit p-3 bg-stone-50 font-bold text-blue-700 placeholder:font-normal border-b-2 border-stone-400 outline-none w-44"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <button className="mb-20 mt-10" onClick={handleListItem}>
            <ListItemBtn />
          </button>
        </div>
      </div>
    </>
  );
};

export default DigitalCopy;
