export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export const team: TeamMember[] = [
  {
    id: "rico",
    name: "Rico",
    role: "Founder & CEO",
    image: "/images/placeholder-team-1.jpg",
    imageAlt: "Rico — Founder & CEO", // REPLACE: Client headshot
  },
  {
    id: "diane",
    name: "Diane",
    role: "Partner & COO",
    image: "/images/placeholder-team-2.jpg",
    imageAlt: "Diane — Partner & COO", // REPLACE: Client headshot
  },
  {
    id: "oldrich",
    name: "Oldrich",
    role: "Finance Director",
    image: "/images/placeholder-team-3.jpg",
    imageAlt: "Oldrich — Finance Director", // REPLACE: Client headshot
  },
  {
    id: "joy",
    name: "Joy",
    role: "Executive Assistant",
    image: "/images/placeholder-team-4.jpg",
    imageAlt: "Joy — Executive Assistant", // REPLACE: Client headshot
  },
];
