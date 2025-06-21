import React, { useState, useEffect } from "react";

const ImageUpload = () => {
  const [images, setImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    const storedImages = localStorage.getItem("uploadedImages");
    if (storedImages) {
      setImages(JSON.parse(storedImages));
    }
  }, []);
  const saveToLocalStorage = (imagesToSave) => {
    localStorage.setItem("uploadedImages", JSON.stringify(imagesToSave));
  };
  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const fileReaders = files.map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve({ url: reader.result, uploading: true });
        };
        reader.readAsDataURL(file);
      });
    });
    Promise.all(fileReaders).then((newImages) => {
      const updated = [...images, ...newImages];
      setImages(updated);
      simulateUpload(newImages, updated);
    });
  };
  const simulateUpload = (newImages, updatedImages) => {
    setUploading(true);
    
    setTimeout(() => {
      const finalImages = updatedImages.map((img) => ({
        ...img,
        uploading: false,
      }));
      setImages(finalImages);
      saveToLocalStorage(finalImages);
      setUploading(false);
    }, 2000);
  };
  return (
    <div className="flex space-x-4 p-4 bg-white rounded-2xl overflow-x-auto border-3 border-dashed border-[#D1E0E9] w-[700px] ml-70 ">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="relative w-20 h-20 rounded-xl overflow-hidden"
        >
          <img
            src={img.url}
            alt={`upload-${idx}`}
            className="w-full h-full object-cover"
          />
          {img.uploading && (
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white text-sm">
              <span className="ff-open sans">Hochladen...</span>
              <div className="w-4/5 h-1 bg-gray-300 mt-2 rounded-full overflow-hidden">
                <div className="bg-[#22C55E] w-3/5 h-full animate-pulse"></div>
              </div>
            </div>
          )}
        </div>
      ))}
      <label className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer">
        <span className="text-2xl text-blue-500">+</span>
        <input
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleImageUpload}
        />
        </label>
    </div>
  );
};
export default ImageUpload;
