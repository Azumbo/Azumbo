import React, { useState, useRef } from 'react';

const StrongoliMeraviglioso: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    const newFiles = Array.from(fileList).filter((f) => f.type.startsWith('image/'));
    setFiles((prev) => [...prev, ...newFiles]);
    const newPreviews = newFiles.map((f) => URL.createObjectURL(f));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const onCropAndSave = async () => {
    const croppedUrls: string[] = [];
    for (let i = 0; i < previews.length; i++) {
      const src = previews[i];
      await new Promise<void>((res) => {
        const img = new Image();
        img.onload = () => {
          const size = Math.min(img.width, img.height);
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(
              img,
              (img.width - size) / 2,
              (img.height - size) / 2,
              size,
              size,
              0,
              0,
              size,
              size
            );
            canvas.toBlob((blob) => {
              if (blob) {
                croppedUrls.push(URL.createObjectURL(blob));
              }
              res();
            }, 'image/png');
          } else {
            res();
          }
        };
        img.src = src;
      });
    }
    setPreviews(croppedUrls);
  };

  return (
    <div className="min-h-screen bg-black text-primary flex flex-col items-center p-6 space-y-4">
      <h1 className="text-3xl font-bold">Strongoli - Meraviglioso 📸</h1>
      <div
        className="w-full max-w-lg flex flex-col items-center justify-center border-2 border-dashed border-secondary rounded-lg p-8 cursor-pointer"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
      >
        <p className="text-secondary">Перетащите файлы сюда или кликните для выбора</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {previews.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {previews.map((src, i) => (
            <img key={i} src={src} alt={`preview-${i}`} className="w-32 h-32 object-cover rounded" />
          ))}
        </div>
      )}

      {previews.length > 0 && (
        <button
          onClick={onCropAndSave}
          className="bg-secondary text-black px-4 py-2 rounded hover:opacity-80 transition"
        >
          Обрезать и сохранить
        </button>
      )}
    </div>
  );
};

export default StrongoliMeraviglioso;

