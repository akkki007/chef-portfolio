import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const ResumeSections = () => {
  // About information
  const aboutInfo = {
    name: "Sairaj Nazare",
    title: "Cook",
    description: "Approximately year and half training in various functions within a Food and Beverage environment, including banquets, grilling, operations, prep work, and kitchen. Customer Service orientation gained in 4 star environments, serving the needs of high-end clients and everyday guests. Experience gained in India, U.S. and France. Pursuing MBA to further business education in entrepreneurship, hospitality, management, and leadership.",
    contact: {
      phone: "+1 9493078733",
      email: "sairajnazare@gmail.com",
      address: "1870 East 16th street, New Port Beach, CA-92663"
    },
    languages: ["English (Fluent)", "Hindi", "Marathi"],
    skills: ["Organized", "Punctual", "Hardworking", "Eager to learn", "Good communication skills"],
    education: [
      {
        degree: "Executive MBA In Hospitality Management",
        institution: "Alliant International University, Los Angeles CA",
        year: "2023-2024"
      },
      {
        degree: "Bachelor of Science in Hospitality Studies",
        institution: "AISSMS College of Hotel Management and Catering Technology, Pune, India",
        year: "2018-2021"
      },
      {
        degree: "Culinary Arts",
        institution: "Maharashtra State Institute Of Hotel Management And Catering Technology, Pune",
        year: "2016-2018"
      }
    ]
  };

  // Experience information
  const experiences = [
    {
      id: 1,
      title: "Food and Beverage Trainee",
      company: "Hotel Sheraton Grand Pune",
      period: "7th Nov 2019 - 30th Nov 2019",
      location: "Pune, India",
      description: "5 Star property located near Pune Railway Station catering to business guests. 400 rooms, restaurants such as House of Mandarin and Feast, semi-luxury type of property.",
      responsibilities: [
        "Worked as a butler taking care of the VIP guests in many functions",
        "Set up for breakfast and tea/coffee counter every morning",
        "Set up buffet counter and refilling of cutlery and plates"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.041490033863!2d73.87426631541695!3d18.5307339874059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8bbf%3A0x2a1a1a1a1a1a1a1a!2sSheraton%20Grand%20Pune%20Bund%20Garden%20Hotel!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Kitchen Trainee",
      company: "Hotel Snow Lodge",
      period: "3rd Dec 2019 - 29th Feb 2020",
      location: "Courchevel, France",
      description: "The Snow Lodge Hotel Courchevel 1850",
      responsibilities: [
        "Handling of kitchen operations and staff meals for the international workforce of up to 70 people"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2779.999999999999!2d6.53333331541695!3d45.416667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDI1JzAwLjAiTiA2wrAzMicwMC4wIkU!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Cook 3",
      company: "JW Marriott",
      period: "1st Jan 2022 - 31st Dec 2022",
      location: "Austin, Texas",
      description: "4-star property located in the heart of downtown Austin, the JW Marriott Austin offers luxury comfort",
      responsibilities: [
        "Made tacos, sandwiches, salads, and sautés in a busy corner restaurant",
        "Assisted with banquets according to Banquet Event Order, assembling carts, and taking care of cleaning and temperature logs",
        "Performed both grilling and prepping for in Burger Bar Café",
        "Responsible for opening and closing the café"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.999999999999!2d-97.74999931541695!3d30.266667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE2JzAwLjAiTiA5N8KwNDUnMDAuMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Cook 2",
      company: "Lido House Autograph Collection",
      period: "28th June 2023 - Ongoing",
      location: "Newport Beach, Los Angeles",
      description: "Lido House, part of the Autograph Collection, is a boutique hotel located in Newport Beach, California",
      responsibilities: [
        "Managed grill, saute and pantry department at Mayors Table Pacific Pub And Kitchen",
        "Also worked at the Roof Top Kitchen right from ordering, prepping and working on the line"
      ],
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.999999999999!2d-117.93333331541695!3d33.616667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM3JzAwLjAiTiAxMTfCsDU2JzAwLjAiVw!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus",
      imageUrl: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section className="py-12 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Profile Image and Basic Info */}
            <div className="md:w-1/3">
              <div className="bg-amber-100 p-6 rounded-lg shadow-md">
                
                <h1 className="text-2xl font-bold text-center mb-1">{aboutInfo.name}</h1>
                <p className="text-amber-700 text-center font-medium mb-4">{aboutInfo.title}</p>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span>{aboutInfo.contact.email}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span>{aboutInfo.contact.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-5 h-5 mt-1 mr-2 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{aboutInfo.contact.address}</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {aboutInfo.languages.map((lang, i) => (
                      <span key={i} className="bg-amber-200 text-amber-800 px-3 py-1 rounded-full text-sm">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="font-bold text-lg mb-2 text-amber-800">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {aboutInfo.skills.map((skill, i) => (
                      <span key={i} className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* About Content */}
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">{aboutInfo.description}</p>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Education</h3>
                <div className="space-y-4">
                  {aboutInfo.education.map((edu, i) => (
                    <div key={i} className="border-l-4 border-amber-500 pl-4 py-1">
                      <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Computer Skills</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                    <svg className="w-6 h-6 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.5 11.957c0 6.375-5.163 11.544-11.531 11.544C5.599 23.501.5 18.332.5 11.957S5.599.413 11.969.413c6.368 0 11.531 5.169 11.531 11.544z" fill="#2B579A"/>
                      <path d="M23.5 11.957c0 6.375-5.163 11.544-11.531 11.544C5.599 23.501.5 18.332.5 11.957S5.599.413 11.969.413c6.368 0 11.531 5.169 11.531 11.544z" fillOpacity=".3" fill="#2B579A"/>
                      <path d="M12.04 4.914h-.081c-1.538.025-2.956.65-3.975 1.75-.975 1.1-1.463 2.513-1.4 4.031.1 2.8 2.294 5.069 5.106 5.069h.244c1.5-.025 2.888-.625 3.913-1.7 1.025-1.075 1.531-2.463 1.481-3.963-.113-2.775-2.344-5.019-5.288-5.188z" fill="#FFF"/>
                      <path d="M15.6 7.2l-3.2 2.1-1.35-1.1-3.9 4.2 1.5 1.2 2.55-2.4 3.2 2.4 5.1-6.3z" fill="#FFF"/>
                    </svg>
                    <span>Microsoft Word</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                    <svg className="w-6 h-6 mr-2 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.5 11.957c0 6.375-5.163 11.544-11.531 11.544C5.599 23.501.5 18.332.5 11.957S5.599.413 11.969.413c6.368 0 11.531 5.169 11.531 11.544z" fill="#217346"/>
                      <path d="M23.5 11.957c0 6.375-5.163 11.544-11.531 11.544C5.599 23.501.5 18.332.5 11.957S5.599.413 11.969.413c6.368 0 11.531 5.169 11.531 11.544z" fillOpacity=".3" fill="#217346"/>
                      <path d="M12.04 4.914h-.081c-1.538.025-2.956.65-3.975 1.75-.975 1.1-1.463 2.513-1.4 4.031.1 2.8 2.294 5.069 5.106 5.069h.244c1.5-.025 2.888-.625 3.913-1.7 1.025-1.075 1.531-2.463 1.481-3.963-.113-2.775-2.344-5.019-5.288-5.188z" fill="#FFF"/>
                      <path d="M15.6 7.2l-3.2 2.1-1.35-1.1-3.9 4.2 1.5 1.2 2.55-2.4 3.2 2.4 5.1-6.3z" fill="#FFF"/>
                    </svg>
                    <span>Microsoft Excel</span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg">
                    <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.5 11.957c0 6.375-5.163 11.544-11.531 11.544C5.599 23.501.5 18.332.5 11.957S5.599.413 11.969.413c6.368 0 11.531 5.169 11.531 11.544z" fill="#D24726"/>
                      <path d="M23.5 11.957c0 6.375-5.163 11.544-11.531 11.544C5.599 23.501.5 18.332.5 11.957S5.599.413 11.969.413c6.368 0 11.531 5.169 11.531 11.544z" fillOpacity=".3" fill="#D24726"/>
                      <path d="M12.04 4.914h-.081c-1.538.025-2.956.65-3.975 1.75-.975 1.1-1.463 2.513-1.4 4.031.1 2.8 2.294 5.069 5.106 5.069h.244c1.5-.025 2.888-.625 3.913-1.7 1.025-1.075 1.531-2.463 1.481-3.963-.113-2.775-2.344-5.019-5.288-5.188z" fill="#FFF"/>
                      <path d="M15.6 7.2l-3.2 2.1-1.35-1.1-3.9 4.2 1.5 1.2 2.55-2.4 3.2 2.4 5.1-6.3z" fill="#FFF"/>
                    </svg>
                    <span>Microsoft PowerPoint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-12 bg-gray-50" id="experience">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {experiences.map((exp) => (
              <Card key={exp.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-amber-500 to-amber-600 p-0">
                  <div className="relative h-48 w-full">
                    <Image
                      src={exp.imageUrl}
                      alt={`${exp.company} image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-bold mb-2">{exp.title}</CardTitle>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{exp.company}, {exp.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span>{exp.period}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{exp.description}</p>
                  
                  <h4 className="font-semibold mb-2">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i}>{resp}</li>
                    ))}
                  </ul>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Location:</h4>
                    <div className="aspect-w-16 aspect-h-9">
                      <iframe
                        src={exp.mapUrl}
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};