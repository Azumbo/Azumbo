import React, { useState, useRef, useCallback } from 'react';
import Cropper, { Area } from 'react-easy-crop';

const StrongoliMeraviglioso: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImages, setCroppedImages] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

  const onCropComplete = useCallback((_: Area, areaPixels: Area) => {
    setCroppedAreaPixels(areaPixels);
  }, []);

  const confirmCrop = async () => {
    if (selectedIndex === null || !croppedAreaPixels) return;
    const src = previews[selectedIndex];
    await new Promise<void>((res) => {
      const img = new Image();
      img.onload = () => {
        const canvas = canvasRef.current;
        if (!canvas) return res();
        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(
            img,
            croppedAreaPixels.x,
            croppedAreaPixels.y,
            croppedAreaPixels.width,
            croppedAreaPixels.height,
            0,
            0,
            croppedAreaPixels.width,
            croppedAreaPixels.height
          );
          canvas.toBlob((blob) => {
            if (blob) {
              setCroppedImages((prev) => [...prev, URL.createObjectURL(blob)]);
            }
            res();
          }, 'image/png');
        } else {
          res();
        }
      };
      img.src = src;
    });
    setSelectedIndex(null);
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
            <img
              key={i}
              src={src}
              alt={`preview-${i}`}
              className="w-32 h-32 object-cover rounded cursor-pointer"
              onClick={() => setSelectedIndex(i)}
            />
          ))}
        </div>
      )}

      {selectedIndex !== null && (
        <div className="w-full max-w-lg mt-4">
          <div className="relative w-full h-64 bg-gray-800">
            <Cropper
              image={previews[selectedIndex]}
              crop={crop}
              zoom={zoom}
              aspect={3 / 2}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
          <input
            type="range"
            min={1}
            max={3}
            step={0.1}
            value={zoom}
            onChange={(e) => setZoom(Number(e.target.value))}
            className="w-full mt-2"
          />
          <button
            onClick={confirmCrop}
            className="mt-2 bg-secondary text-black px-4 py-2 rounded hover:opacity-80 transition"
          >
            Подтвердить обрезку
          </button>
        </div>
      )}

      <canvas ref={canvasRef} className="mt-4 border border-secondary" />

      {croppedImages.length > 0 && (
        <div className="flex flex-wrap gap-4 mt-4">
          {croppedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`cropped-${i}`}
              className="w-48 rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default StrongoliMeraviglioso;

