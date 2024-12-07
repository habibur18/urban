import Image from "next/image";

export default function ComputerRequirements() {
  const requirements = [
    {
      icon: "/laptop.png",
      title: "ল্যাপটপ/ডেস্কটপ (মিনিমাম ৮ জিবি র্যাম)",
    },
    {
      icon: "/freelance.png",
      title: "ভালো ইন্টারনেট কানেকশন",
    },
    {
      icon: "/programming.png",
      title: "প্রোগ্রামিং ফান্ডামেন্টালস জানা থাকলে ভালো",
    },
    {
      icon: "/technology.png",
      title: "মিনিমাম Core i3 প্রসেসর",
    },
    {
      icon: "/ssd.png",
      title: "২৫৬ জিবি এসএসডি",
    },
    {
      icon: "/perseverance.png",
      title: "লেগে থাকার মানসিকতা",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold text-center mb-12">
        কী কী{" "}
        <span className="text-yellow-400 relative">
          থাকতে
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400"></span>
        </span>
        <span> হবে</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {requirements.map((requirement, index) => (
          <div
            style={{
              borderRadius: "8px",
            }}
            key={index}
            className="p-6 bg-gray-100  rounded-lg"
          >
            <div className="bg-white p-2 rounded-lg inline-block">
              <Image
                className=""
                src={requirement.icon}
                alt=""
                width={64}
                height={64}
              />
            </div>
            <h2 className="text-lg font-medium text-gray-800">
              {requirement.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
