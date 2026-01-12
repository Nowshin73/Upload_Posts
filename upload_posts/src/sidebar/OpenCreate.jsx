import React, { useEffect, useState } from "react";
import axios from "axios";
import { LiaPhotoVideoSolid } from "react-icons/lia";
import "./OpenCreate.css";
import { CLOUD_NAME, UPLOAD_PRESET } from "../consts/cloud_name";
import { uploadPost } from "../consts/server";

const OpenCreate = ({ onClose, refreshPosts, user }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  /* Cleanup preview URL */
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;

    if (!selected.type.startsWith("image") && !selected.type.startsWith("video")) {
      alert("Only image or video allowed");
      return;
    }

    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  };

  const uploadToCloudinary = async () => {
    if (!file) return;

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", UPLOAD_PRESET);

    /* These match the Cloudinary settings I told you */
    formData.append("folder", "fancygram");
    formData.append("public_id", file.name.split(".")[0]); // filename

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
        formData,
        {
          onUploadProgress: (e) => {
            const percent = Math.round((e.loaded * 100) / e.total);
            setProgress(percent);
          },
        }
      );

      await createPost(res.data.secure_url, res.data.resource_type);
      reset();
    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (url, type) => {
    await axios.post(uploadPost, {
      // userId: "65875454df5h24",   // 🔥 real logged-in user
      mediaUrl: url,
      mediaType: type === "video" ? "video" : "image",
      caption,
    });
     confirm("Post uploaded successfully!");      
  //  refreshPosts();
    // onClose();
    // reset();
  };

  const reset = () => {
    setFile(null);
    setPreview(null);
    setCaption("");
    setProgress(0);
  };

  return (
    <div className="create">
      <div className="create-container">
        <div className="create-up">
          <span>Create New Post</span>
        </div>

        <div className="create-down">
          <div className="upload-box">

            {!preview && (
              <>
                <LiaPhotoVideoSolid className="photo-video" />
                <p>Drag photos and videos here</p>
              </>
            )}

            {preview && (
              <div className="preview">
                {file.type.startsWith("image") ? (
                  <img src={preview} alt="preview" />
                ) : (
                  <video src={preview} controls />
                )}
              </div>
            )}

            {preview && (
              <>
                <textarea
                  placeholder="Write a caption..."
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  className="caption-input"
                />

                {loading && (
                  <div className="progress-bar">
                    <div className="progress" style={{ width: `${progress}%` }} />
                  </div>
                )}

                <button
                  className="primary-button"
                  onClick={uploadToCloudinary}
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Share"}
                </button>
              </>
            )}

            <input
              type="file"
              accept="image/*,video/*"
              hidden
              id="fileUpload"
              onChange={handleFileChange}
            />

            {!preview && (
              <label htmlFor="fileUpload" className="secondary-button">
                Select From Computer
              </label>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenCreate;
