import { useRef, useState } from "react";

type DropZoneProps = {
  onFileDrop: (file: File) => void;
};

export function DropZone({ onFileDrop }: DropZoneProps) {
  const [isDragging, setIsDragging] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    onFileDrop(file);
  };

  return (
    <>
      <div
        className={`drop-zone ${isDragging ? "dragging" : ""}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);

          const file = e.dataTransfer.files?.[0];

          if (file) {
            handleFile(file);
          }
        }}
      >
        <button className="drop-zone-text">CHOOSE FILE</button>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/*,video/*,audio/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];

          if (file) {
            handleFile(file);
          }
        }}
      />
    </>
  );
}