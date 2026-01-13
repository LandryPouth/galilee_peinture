export interface Project {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
  status: string;
  type: string;
}

export const projectsData = [
  {
    id: 1,
    titleKey: "items.villa_bonapriso.title",
    locationKey: "items.villa_bonapriso.location",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop",
    descriptionKey: "items.villa_bonapriso.description",
    statusKey: "status.completed",
    typeKey: "type.villa",
  },
  {
    id: 2,
    titleKey: "items.residence_bastos.title",
    locationKey: "items.residence_bastos.location",
    image:
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    descriptionKey: "items.residence_bastos.description",
    statusKey: "status.in_construction",
    typeKey: "type.residence",
  },
  {
    id: 3,
    titleKey: "items.jardins_kribi.title",
    locationKey: "items.jardins_kribi.location",
    image:
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop",
    descriptionKey: "items.jardins_kribi.description",
    statusKey: "status.in_project",
    typeKey: "type.residence",
  },
];
