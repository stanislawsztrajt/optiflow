import axios from "axios";
import { Iresponse } from "../types/api";

export const uploadImages = async (images: []): Promise<string[]> => {
  const imagesUrls: string[] = [];
  for (const image in images) {
    const data = new FormData();
    data.append("file", images[image]);
    data.append(
      "api_key",
      process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY as string
    );
    data.append(
      "api_secret",
      process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET as string
    );
    data.append(
      "cloud_name",
      process.env.NEXT_PUBLIC_CLOUDINARY_NAME as string
    );
    data.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET as string
    );
    const res: Iresponse<{ url: string }> = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_NAME}/image/upload`,
      data
    );

    imagesUrls.push(res.data.url);
  }

  return imagesUrls;
};
