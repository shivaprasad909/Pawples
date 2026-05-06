import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export { cloudinary };

// ── Upload a file (server-side) ───────────────────────────────────────────
export interface UploadResult {
  publicId: string;
  url: string;
  secureUrl: string;
  width: number;
  height: number;
  format: string;
}

export async function uploadImage(
  source: string | Buffer,
  folder: string = "pawples",
  options?: Record<string, unknown>
): Promise<UploadResult> {
  const input = Buffer.isBuffer(source)
    ? `data:image/jpeg;base64,${source.toString("base64")}`
    : source;

  const result = await cloudinary.uploader.upload(input, {
    folder,
    resource_type: "image",
    transformation: [{ quality: "auto:good", fetch_format: "auto" }],
    ...options,
  });

  return {
    publicId: result.public_id,
    url: result.url,
    secureUrl: result.secure_url,
    width: result.width,
    height: result.height,
    format: result.format,
  };
}

// ── Delete an image by public_id ──────────────────────────────────────────
export async function deleteImage(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}

// ── Get an optimised URL (client-safe, no secrets needed) ────────────────
export function getOptimisedUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    crop?: string;
    quality?: string | number;
    format?: string;
  } = {}
): string {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  if (!cloudName) return "";

  const { width, height, crop = "fill", quality = "auto", format = "auto" } = options;
  const transforms: string[] = [`q_${quality}`, `f_${format}`];
  if (width) transforms.push(`w_${width}`);
  if (height) transforms.push(`h_${height}`);
  if (width || height) transforms.push(`c_${crop}`);

  return `https://res.cloudinary.com/${cloudName}/image/upload/${transforms.join(",")}/${publicId}`;
}

// ── Generate a signed upload URL (for client-side direct uploads) ─────────
export async function getSignedUploadUrl(folder: string = "pawples") {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const params = { timestamp, folder };
  const signature = cloudinary.utils.api_sign_request(
    params,
    process.env.CLOUDINARY_API_SECRET!
  );
  return {
    timestamp,
    signature,
    folder,
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
  };
}
