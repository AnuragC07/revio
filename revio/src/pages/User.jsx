import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import EditIcon from "@mui/icons-material/Edit";
import ItemCard from "../components/ItemCard";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import toast from "react-hot-toast";

const decodeToken = (token) => {
  const payload = token.split(".")[1];
  return JSON.parse(atob(payload));
};

const User = () => {
  const [username, setUsername] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/", config);
        const filteredProducts = response.data.data.filter((product) => {
          return (
            product.seller === decodedToken.username ||
            product.sellerId === decodedToken.id
          );
        });
        setProducts(filteredProducts);
        setLoading(false);
      } catch (error) {
        console.log("Axios Error:", error);
      }
    };

    fetchData();
    const decodedToken = decodeToken(token);
    setUsername(decodedToken.username);
  }, []);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(`http://localhost:8000/${selectedProduct._id}`, config);
      toast.success("Listed Product deleted successfully!");
      const updatedProducts = products.filter(
        (product) => product._id !== selectedProduct._id
      );
      setProducts(updatedProducts);
      setShowDeleteModal(false);
    } catch (error) {
      toast.error("Product deletion failed!");
      console.error("Error during deletion:", error.response?.data || error.message);
    }
  };
  

  const openDeleteModal = (product) => {
    setSelectedProduct(product);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setSelectedProduct(null);
    setShowDeleteModal(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/login"); // Redirect to the login page or any other page
  };

  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center mt-44 p-10">
        <div className="flex">
          <div className="w-80rounded-2xl p-5">
            <h1 className="text-3xl font-heading font-bold mb-10">{username}</h1>
            <p className="text-lg text-stone-500 font-sub font-semibold">
              BTech CSE
            </p>
            <p className="text-lg text-stone-500 font-sub font-semibold">
              Harvard University
            </p>
            <button
              onClick={handleLogout}
              className="border p-2 px-4 hover:shadow-md border-stone-300 rounded-xl text-red-600 mt-10"
            >
              Logout
            </button>
          </div>
        </div>
        <Link to="/me/edit">
          <p>
            <EditIcon className="text-stone-400 border rounded-full p-1 mt-4 bg-white shadow cursor-pointer" />
          </p>
        </Link>
      </div>

      <div>
        <h1 className="ml-40 font-heading font-bold text-2xl mt-32">
          Listed Resources
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-xl font-bold font-subtitle text-stone-700 m-8">
            No Products listed
          </p>
        ) : (
          <ul className="mt-16 flex gap-8 m-10">
            {products.map((product, index) => (
              <li key={index} className="mb-4 relative">
                {product.seller === username && (
                  <button
                    onClick={() => openDeleteModal(product)}
                    className="text-blue-400 shadow-xl border-2 border-slate-800 w-10 h-10 bg-slate-800 rounded-full absolute top-3 right-3 z-10"
                  >
                    <DeleteRoundedIcon />
                  </button>
                )}
                <div className="relative">
                <ItemCard
                    key={index}
                    image={
                      product.file
                        ? `http://localhost:8000/files/coverFile/${product.image}`
                        : `http://localhost:8000/images/${product.image}`
                    }
                    category={product.category}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    product={product}
                  />
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 max-w-md mx-auto rounded-2xl shadow-lg z-50">
            <h2 className="text-xl font-bold mb-4">Delete Product</h2>
            <p>Are you sure you want to delete this Product?</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleDelete}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
              >
                Delete
              </button>
              <button
                onClick={closeDeleteModal}
                className="bg-stone-100 text-gray-800 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* coming soon ;)  */}
      {/* <div>
        <h1 className="ml-40 font-heading font-bold text-2xl mt-32">
          Your Purchases
        </h1>
        <div className="w-10/12 bg-stone-100 rounded-3xl mt-5 m-auto p-4 mb-4">
          <div className="flex flex-row gap-7">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default User;
