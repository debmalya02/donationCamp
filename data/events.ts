import { Event } from '@/types/events';

export const upcomingEvents: Event[] = [
  {
    id: 1,
    title: "Children's Education Workshop",
    date: "November 15, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "Community Center, Mumbai",
    description: "Join us for an interactive workshop focused on empowering underprivileged children through education. We'll be distributing school supplies and conducting learning sessions.",
    image: "/education.jpg",
    capacity: 100,
    registeredCount: 65,
  },
  {
    id: 2,
    title: "Health & Wellness Camp",
    date: "November 25, 2023",
    time: "9:00 AM - 5:00 PM",
    location: "Public Hospital, Delhi",
    description: "Free medical checkups, health awareness sessions, and medicine distribution for elderly citizens and underprivileged families.",
    image: "/food-drive.jpg",
    capacity: 200,
    registeredCount: 120,
  },
];

export const pastEvents: Event[] = [
  {
    id: 3,
    title: "Food Distribution Drive",
    date: "October 1, 2023",
    time: "8:00 AM - 12:00 PM",
    location: "Various Locations, Mumbai",
    description: "Successfully distributed food packages to families in need during the festival season.",
    image: "/food-drive.jpg",
    attendees: 500,
    highlights: ["500 families supported", "45 volunteers", "2 tons of food distributed"],
  },
  {
    id: 4,
    title: "Tree Plantation Drive",
    date: "September 15, 2023",
    time: "7:00 AM - 11:00 AM",
    location: "City Park, Mumbai",
    description: "Community effort to plant trees and create awareness about environmental conservation.",
    image: "/education.jpg",
    attendees: 300,
    highlights: ["1000 trees planted", "60 volunteers", "5 schools participated"],
  },
];