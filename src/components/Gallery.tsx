import Icon from "@/components/ui/icon";

const Gallery = () => {
  const screenshots = [
    {
      title: "Редактор блоков",
      description: "Интуитивный интерфейс для создания программ",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=600&h=400&fit=crop",
    },
    {
      title: "Галерея проектов",
      description: "Тысячи готовых проектов для вдохновения",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    },
    {
      title: "Игровые проекты",
      description: "Создавайте игры любого жанра",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
    },
    {
      title: "Анимации",
      description: "Оживляйте персонажей и создавайте истории",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
    },
    {
      title: "Редактор спрайтов",
      description: "Создавайте и редактируйте персонажей",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    },
    {
      title: "Сообщество",
      description: "Делитесь проектами с друзьями",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-rubik text-4xl md:text-5xl font-bold mb-6">
            Галерея
            <span className="bg-gradient-to-r from-scratch-orange to-scratch-red bg-clip-text text-transparent ml-2">
              возможностей
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Посмотрите, как выглядит Scratch OS и что можно в нём создать
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="scratch-card overflow-hidden">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src={screenshot.image}
                    alt={screenshot.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Expand" size={20} className="text-gray-600" />
                  </div>
                </div>

                <h3 className="font-rubik text-xl font-semibold mb-2 text-gray-800 group-hover:text-scratch-orange transition-colors duration-300">
                  {screenshot.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {screenshot.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-scratch-orange text-scratch-orange px-8 py-4 rounded-2xl font-rubik font-semibold text-lg hover:bg-scratch-orange hover:text-white transition-all duration-300 flex items-center gap-3 mx-auto">
            <Icon name="ExternalLink" size={24} />
            Посмотреть все скриншоты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
