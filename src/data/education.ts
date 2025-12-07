export type Education = {
  id: string;
  degree: string;
  institution: string;
  gpa:string,
  total_gpa:string,
  period: string;
  description: string;
};

export const educationData: Education[] = [
  {
    id: "edu1",
    degree: "B.Tech Computer Science and Engineering",
    institution: "Vellore Institute of Technology",
    gpa:"8.6",
    total_gpa: "10",
    period: "2019-2023",
    description: "Core Computer Engineering",
  },
  {
    id: "edu2",
    degree: "Higher Secondary",
    institution: "Everest English Boarding Higher Secondary School",
    gpa:"3.71",
    total_gpa: "4",
    period: "2017-2019",
    description: "Major in Science and Mathematics",
  },
];

