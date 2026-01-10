import React, { useState } from "react";
import axios from "axios";
import './Sidebar.css'
import { LiaPhotoVideoSolid } from "react-icons/lia";
import './OpenCreate.css'
const USER_ID = "USER_ID_HERE";

const OpenCreate = ({ onClose, refreshPosts }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState("");
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_UPLOAD_PRESET");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/auto/upload",
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
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  const createPost = async (url, type) => {
    await axios.post("http://localhost:5000/api/posts", {
      userId: USER_ID,
      mediaUrl: url,
      mediaType: type === "video" ? "video" : "image",
      caption,
    });

    refreshPosts();
    onClose();
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
                    <div
                      className="progress"
                      style={{ width: `${progress}%` }}
                    />
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
