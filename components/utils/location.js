GOOGLE_API_KEY = "AIzaSyDmRv6NajQE0bSPkgClZyJrp_kBjPgDixM";

export function mapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
  const Url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const result = await fetch(Url);
  if (!result.ok) {
    throw new Error("Failed to fetch address");
  }
  const data = await result.json();
  const address = data.results[0].formatted_address;
  return address;
  console.log("address", address.results[0].formatted_address);
}
