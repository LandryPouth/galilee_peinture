export interface Project {
  id: number;
  titleKey: string;
  locationKey: string;
  image: string;
  gallery: string[];
  descriptionKey: string;
  statusKey: string;
  typeKey: string;
}

export const projectsData = [
  {
    id: 1,
    titleKey: "items.villa_bonapriso.title",
    locationKey: "items.villa_bonapriso.location",
    image:
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=2070&auto=format&fit=crop",
    ],
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
    gallery: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=2070&auto=format&fit=crop",
    ],
    descriptionKey: "items.jardins_kribi.description",
    statusKey: "status.in_project",
    typeKey: "type.residence",
  },
  {
    id: 4,
    titleKey: "items.immeuble_akwa.title",
    locationKey: "items.immeuble_akwa.location",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    ],
    descriptionKey: "items.immeuble_akwa.description",
    statusKey: "status.completed",
    typeKey: "type.building",
  },
  {
    id: 5,
    titleKey: "items.villa_odza.title",
    locationKey: "items.villa_odza.location",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    ],
    descriptionKey: "items.villa_odza.description",
    statusKey: "status.in_construction",
    typeKey: "type.villa",
  },
  {
    id: 6,
    titleKey: "items.residence_essos.title",
    locationKey: "items.residence_essos.location",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=2076&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=2070&auto=format&fit=crop",
    ],
    descriptionKey: "items.residence_essos.description",
    statusKey: "status.in_project",
    typeKey: "type.residence",
  },
  {
    id: 7,
    titleKey: "items.immeuble_bonanjo.title",
    locationKey: "items.immeuble_bonanjo.location",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558211583-d26f610c1eb1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop",
    ],
    descriptionKey: "items.immeuble_bonanjo.description",
    statusKey: "status.in_construction",
    typeKey: "type.building",
  },
  {
    id: 8,
    titleKey: "items.villa_biyem_assi.title",
    locationKey: "items.villa_biyem_assi.location",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560448075-bb485b067938?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    ],
    descriptionKey: "items.villa_biyem_assi.description",
    statusKey: "status.completed",
    typeKey: "type.villa",
  },
];
