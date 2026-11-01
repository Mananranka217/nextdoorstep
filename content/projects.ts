// Top projects. Copy one block to add a project; delete one to remove it.
// To add a photo, put it in /public/assets and set image: "/assets/your-photo.jpg".
export type Project = {
  builder: string;
  name: string;
  location: string;
  priceRange: string;
  rera: string;
  image?: string;
};

export const projects: Project[] = [
  { builder: "[BUILDER]", name: "[PROJECT NAME]", location: "[LOCATION]", priceRange: "[PRICE RANGE]", rera: "[RERA NO.]" },
  { builder: "[BUILDER]", name: "[PROJECT NAME]", location: "[LOCATION]", priceRange: "[PRICE RANGE]", rera: "[RERA NO.]" },
  { builder: "[BUILDER]", name: "[PROJECT NAME]", location: "[LOCATION]", priceRange: "[PRICE RANGE]", rera: "[RERA NO.]" },
];
