const profileImage =
  "https://res.cloudinary.com/dosz4fxdk/image/upload/v1761910988/Gemini_Generated_Image_KMR_edited_catljr.png";

export function GET() {
  return Response.redirect(profileImage, 308);
}
