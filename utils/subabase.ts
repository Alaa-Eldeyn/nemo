import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

const bucketName = process.env.SUPABASE_BUCKET as string;

export const uploadImage = async (image: File) => {
  const timestamp = Date.now().toString();
  const imageName = `${timestamp}-${image.name}`;
  const { data, error } = await supabase.storage
    .from(bucketName)
    .upload(imageName, image, {
      cacheControl: "3600",
    });
  if (error) {
    throw new Error(error.message);
  }
  return supabase.storage.from(bucketName).getPublicUrl(imageName).data
    .publicUrl;
};

export const deleteImage = (url: string) => {
  const imageName = url.split("/").pop();
  if (!imageName) throw new Error("Invalid URL");
  return supabase.storage.from(bucketName).remove([imageName]);
};
