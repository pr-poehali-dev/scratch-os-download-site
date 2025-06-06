import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 scratch-gradient opacity-10"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-scratch-orange rounded-2xl rotate-12 animate-bounce-gentle"></div>
      <div
        className="absolute top-40 right-20 w-12 h-12 bg-scratch-yellow rounded-full animate-bounce-gentle"
        style={{ animationDelay: "0.5s" }}
      ></div>
      <div
        className="absolute bottom-32 left-20 w-20 h-20 bg-scratch-red rounded-3xl rotate-45 animate-bounce-gentle"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Logo placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-scratch-orange to-scratch-red rounded-3xl flex items-center justify-center scratch-shadow">
              <Icon name="Blocks" size={48} className="text-white" />
            </div>
          </div>

          <h1 className="font-rubik text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-scratch-orange via-scratch-yellow to-scratch-red bg-clip-text text-transparent">
              Scratch OS
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Операционная система на движке Scratch 3 — место, где
            программирование становится игрой, а идеи превращаются в реальность
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://drive.google.com/file/d/1REeQvlhTg7AFg7RJ7KN5kmSwBs7E-oW8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-scratch-orange to-scratch-red text-white px-8 py-4 rounded-2xl font-rubik font-semibold text-lg hover:scale-105 transform transition-all duration-300 scratch-shadow flex items-center gap-3"
            >
              <Icon name="Download" size={24} />
              Скачать Scratch OS
            </a>

            <button className="border-2 border-scratch-orange text-scratch-orange px-8 py-4 rounded-2xl font-rubik font-semibold text-lg hover:bg-scratch-orange hover:text-white transition-all duration-300 flex items-center gap-3">
              <Icon name="Play" size={24} />
              Посмотреть демо
            </button>
          </div>

          <div className="flex justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle" size={16} className="text-green-500" />
              Бесплатно
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Shield" size={16} className="text-blue-500" />
              Безопасно
            </div>
            <div className="flex items-center gap-2">
              <Icon name="Heart" size={16} className="text-scratch-red" />
              Open Source
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
