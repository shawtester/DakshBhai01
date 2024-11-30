"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

// Dynamically import the TinyMCE editor to ensure it's client-rendered
const Editor = dynamic(() => import("@tinymce/tinymce-react").then((mod) => mod.Editor), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Description({ data, handleData }) {
  const [content, setContent] = useState(data?.description || "");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure the component only runs on the client
  }, []);

  if (!isClient) return null; // Render nothing on the server

  const handleEditorChange = (content) => {
    setContent(content);
    handleData("description", content); // Pass content back to parent
  };

  return (
    <section className="flex flex-col gap-3 bg-white border p-4 rounded-xl overflow-y-auto max-h-[500px]">
      <h1 className="font-semibold">Description</h1>

      <Editor
        apiKey="de1qnloldjo8ek8emia7kwdaerc863qyxbe98vvi2q62u49j"
        value={content}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            "advlist autolink lists link image charmap preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table paste code help wordcount",
            "colorpicker", // For color options
            "emoticons", // Optional: For emoticons
          ],
          toolbar:
            "undo redo | formatselect | bold italic underline strikethrough | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | emoticons | removeformat | code | help",
          content_style:
            "body { font-family: Arial, sans-serif; font-size: 14px; }",
        }}
        onEditorChange={handleEditorChange}
      />
    </section>
  );
}
