import { useState} from "react";
import Upload from "../assets/icon.png";
import { useNavigate } from "react-router-dom";
// import {useHistory} from "react-router-dom"

const Profilephoto = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        about: "",
        avatarUrl: "", 
    });
    
    // const history = useHistory()
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
        setLoading(true);
        const imageData = new FormData();
        imageData.append("file", file);
        imageData.append("upload_preset", "ajayiabdussomad"); 

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/dnugrrdp8/image/upload", {
                method: "POST",
                body: imageData,
            });

            const data = await response.json();
            console.log("Uploaded Image URL:", data.secure_url);

            if (data.secure_url) {
                setFormData((prev) => ({ ...prev, avatarUrl: data.secure_url }));
            }
        } catch (error) {
            console.error("Upload failed", error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    
        console.log("Updated Form Data:", formData); // Debugging
    };


    const validateForm = () => {
        let newErrors = {};
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email";
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    console.log("Form Data before navigating:", formData);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form submitted successfully:", formData);
            navigate("/Ticket", { state: formData }); // Pass form data to Ticket page
        }
    };

    return (
        <div>
            <div className="px-6 pt-6 pb-12 border border-halfLight bg-deep2 my-8 rounded-3xl">
                <p className="mb-3 text-lightGray">Upload Profile Photo (Optional)</p>
                <div className="flex justify-center bg-lightDeep w-full md:h-[200px] relative">
                    <div className="w-60 h-60 border-[4px] bg-lighterDeep border-halfLight rounded-[32px] flex flex-col text-lightGray items-center justify-center md:absolute md:top-[-20px] md:bottom-0">
                        {formData.avatarUrl ? (
                            <img src={formData.avatarUrl} alt="Uploaded Avatar" className="w-full h-full object-cover rounded-[32px]" />
                        ) : (
                            <>
                                <img src={Upload} alt="Upload Icon" className="mb-4" />
                                <span>Drag & drop or click to upload</span>
                            </>
                        )}
                        <input
                            type="file"
                            className="absolute opacity-0 cursor-pointer  inset-0"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                </div>
            </div>

            <div className="bg-lightDeep2 rounded h-1"></div>

            <form onSubmit={handleSubmit} className="mt-8">
                <div className="flex flex-col gap-y-2 my-4">
                    <label htmlFor="fullName" className="text-lightGray">Enter your name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="p-3 text-white border border-lighterDeep bg-deep2 rounded outline-none"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                </div>

                <div className="flex flex-col gap-y-2 my-4">
                    <label htmlFor="email" className="text-lightGray">Enter your email *</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="p-3 bg-deep2 border border-lighterDeep text-white rounded outline-none"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="flex flex-col gap-y-2 my-4">
                    <label htmlFor="about" className="text-lightGray">About The Project</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        className="p-3 bg-deep2 border border-lighterDeep text-white rounded resize-none h-32 outline-none"
                    ></textarea>
                </div>

                <div className="md:grid md:grid-cols-2 gap-x-6">
                    <button
                        type="submit"
                        className="bg-halfLight rounded-lg py-6 px-3 w-full mt-8 text-lightGray text-center"
                    >
                        {loading ? "Uploading..." : "Get My Free Ticket"}
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate("/")}
                        className="rounded-lg py-6 px-3 w-full bg-lightDeep text-halfLight mt-8 border border-halfLight text-center"
                    >
                        Back
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profilephoto;


