"use client";

const SummerCare = () => {
  const tips = [
    {
      id: 1,
      title: "Stay Hydrated",
      desc: "Drink at least 8-10 glasses of water daily to keep your skin fresh and body cool.",
      icon: "💧",
    },
    {
      id: 2,
      title: "Skincare First",
      desc: "Never skip SPF 50+ sunscreen. It protects your skin from harmful UV rays and tanning.",
      icon: "🧴",
    },
    {
      id: 3,
      title: "Light Clothing",
      desc: "Wear breathable cotton fabrics and light colors to stay comfortable in the heat.",
      icon: "👕",
    },
  ];

  return (
    <section className="mt-24 py-16 bg-orange-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col mb-10">
          <h2 className="text-3xl font-black text-slate-900 border-l-8 border-orange-500 pl-4">
            ☀️ Summer Care Tips
          </h2>
          <p className="text-slate-500 mt-2 ml-6 font-medium">
            Essential advice for the sunny days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{tip.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {tip.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SummerCare;
