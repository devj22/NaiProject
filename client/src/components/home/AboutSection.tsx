import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" 
              alt="Team of Nainaland Deals" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Nainaland Deals</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
            Since 2005, Nainaland Deals has been a trusted name in the land property market across Panvel, Khalapur, Karjat, and nearby rapidly developing regions. With over a decade of experience, we have been guiding customers toward smart and secure land investments tailored to their needs and goals.
Our team of experienced real estate professionals offers personalized support at every step—from property discovery and site visits to legal documentation and final purchase—ensuring a smooth and hassle-free buying experience.

            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of experienced real estate professionals is committed to providing personalized guidance throughout your property buying journey, from initial search to final purchase.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
