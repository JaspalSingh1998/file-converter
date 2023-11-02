"use client";
import ReactDropzone from "react-dropzone";
import { useToast } from "./ui/use-toast";
import { FiUploadCloud } from "react-icons/fi";
import { LuFileSymlink } from "react-icons/lu";
import { useState } from "react";

const Dropzone = () => {
  const { toast } = useToast();
  const [is_hover, setIsHover] = useState<boolean>(false);
  const accepted_files = {
    "image/*": [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".webp",
      ".ico",
      ".tif",
      ".tiff",
      ".raw",
      ".tga",
    ],
    "audio/*": [],
    "video/*": [],
  };

  const handleUpload = (data: Array<any>): void => {
    handleExitHover();
  };
  const handleHover = (): void => setIsHover(true);
  const handleExitHover = (): void => setIsHover(false);
  return (
    <ReactDropzone
      onDrop={handleUpload}
      onDragEnter={handleHover}
      onDragLeave={handleExitHover}
      accept={accepted_files}
      onDropRejected={() => {
        handleExitHover();
        toast({
          variant: "destructive",
          title: "Error uploading your file(s)",
          description: "Allowed Files: Audio, Video and Images.",
          duration: 5000,
        });
      }}
      onError={() => {
        handleExitHover();
        toast({
          variant: "destructive",
          title: "Error uploading your file(s)",
          description: "Allowed Files: Audio, Video and Images.",
          duration: 5000,
        });
      }}
    >
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className=" bg-gray-50 h-72 lg:h-80 xl:h-96 rounded-3xl shadow-sm border-2 border-dashed cursor-pointer flex items-center justify-center"
        >
          <input {...getInputProps()} />
          <div className="space-y-4 text-gray-500">
            {is_hover ? (
              <>
                <div className="justify-center flex text-6xl">
                  <LuFileSymlink />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  Yes, right there
                </h3>
              </>
            ) : (
              <>
                <div className="justify-center flex text-6xl">
                  <FiUploadCloud />
                </div>
                <h3 className="text-center font-medium text-2xl">
                  Click, or drop your files here
                </h3>
              </>
            )}
          </div>
        </div>
      )}
    </ReactDropzone>
  );
};

export default Dropzone;
