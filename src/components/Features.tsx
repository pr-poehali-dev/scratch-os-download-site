import Icon from "@/components/ui/icon";

const Features = () => {
  const features = [
    {
      icon: "Blocks",
      title: "Визуальное программирование",
      description:
        "Создавайте программы, перетаскивая блоки кода. Никаких сложных синтаксисов — только чистая логика.",
      color: "scratch-orange",
    },
    {
      icon: "Gamepad2",
      title: "Интерактивные игры",
      description:
        "Разрабатывайте собственные игры, анимации и интерактивные истории прямо в операционной системе.",
      color: "scratch-yellow",
    },
    {
      icon: "Users",
      title: "Сообщество творцов",
      description:
        "Делитесь проектами, учитесь у других и находите вдохновение в глобальном сообществе Scratch.",
      color: "scratch-red",
    },
    {
      icon: "Palette",
      title: "Творческие инструменты",
      description:
        "Встроенные редакторы спрайтов, звуков и фонов для создания уникального контента.",
      color: "scratch-orange",
    },
    {
      icon: "BookOpen",
      title: "Обучающие материалы",
      description:
        "Пошаговые уроки и проекты для изучения основ программирования в игровой форме.",
      color: "scratch-yellow",
    },
    {
      icon: "Zap",
      title: "Быстрая работа",
      description:
        "Оптимизированная производительность на базе Scratch 3 для плавной работы всех проектов.",
      color: "scratch-red",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-rubik text-4xl md:text-5xl font-bold mb-6">
            Возможности
            <span className="bg-gradient-to-r from-scratch-orange to-scratch-red bg-clip-text text-transparent ml-2">
              Scratch OS
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Все инструменты для творчества и обучения программированию в одной
            операционной системе
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="scratch-card group">
              <div
                className={`w-16 h-16 bg-${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon name={feature.icon} size={32} className="text-white" />
              </div>

              <h3 className="font-rubik text-xl font-semibold mb-4 text-gray-800">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
