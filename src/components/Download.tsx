import Icon from "@/components/ui/icon";

const Download = () => {
  const requirements = [
    { label: "ОС", value: "Windows 10+, macOS 10.14+, Linux" },
    { label: "RAM", value: "4 ГБ (рекомендуется 8 ГБ)" },
    { label: "Свободное место", value: "2 ГБ" },
    { label: "Интернет", value: "Для скачивания проектов" },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-rubik text-4xl md:text-5xl font-bold mb-6">
            Скачать
            <span className="bg-gradient-to-r from-scratch-orange to-scratch-red bg-clip-text text-transparent ml-2">
              Scratch OS
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Присоединяйтесь к миллионам творцов по всему миру
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Download section */}
          <div className="scratch-card text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-scratch-orange to-scratch-red rounded-3xl flex items-center justify-center mx-auto mb-6 scratch-shadow">
                <Icon name="Download" size={40} className="text-white" />
              </div>

              <h3 className="font-rubik text-2xl font-bold mb-4">
                Последняя версия
              </h3>
              <p className="text-lg text-scratch-orange font-semibold mb-6">
                Scratch OS 3.0
              </p>

              <a
                href="https://drive.google.com/drive/home"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-scratch-orange to-scratch-red text-white px-8 py-4 rounded-2xl font-rubik font-semibold text-lg hover:scale-105 transform transition-all duration-300 scratch-shadow flex items-center justify-center gap-3 mb-4"
              >
                <Icon name="Download" size={24} />
                Скачать для Windows
              </a>

              <div className="flex gap-3">
                <a
                  href="https://drive.google.com/drive/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-gray-300 text-gray-600 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="Apple" size={20} />
                  macOS
                </a>
                <a
                  href="https://drive.google.com/drive/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border-2 border-gray-300 text-gray-600 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  <Icon name="Monitor" size={20} />
                  Linux
                </a>
              </div>
            </div>

            <div className="text-sm text-gray-500 text-center">
              <p className="flex items-center justify-center gap-2 mb-2">
                <Icon name="Shield" size={16} className="text-green-500" />
                Проверено антивирусом
              </p>
              <p>Размер: ~850 МБ • Версия: 3.0.1</p>
            </div>
          </div>

          {/* System requirements */}
          <div className="scratch-card">
            <h3 className="font-rubik text-2xl font-bold mb-6 flex items-center gap-3">
              <Icon name="Settings" size={28} className="text-scratch-orange" />
              Системные требования
            </h3>

            <div className="space-y-4">
              {requirements.map((req, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-gray-700">
                    {req.label}:
                  </span>
                  <span className="text-gray-600 text-right">{req.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={20} className="text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-800 mb-1">Совет</h4>
                  <p className="text-sm text-blue-700">
                    Для лучшей производительности рекомендуется выделенная
                    видеокарта при работе с 3D-проектами
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
