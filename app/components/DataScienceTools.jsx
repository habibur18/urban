import Image from "next/image";

export default function DataScienceTools() {
  const tools = [
    {
      name: "Python",
      description: "Programming Language",
      image: "/python.png",
    },
    {
      name: "PyCharm",
      description: "IDE for Python",
      image: "/pycharm.png",
    },
    {
      name: "Jupyter Notebook",
      description: "Interactive Computing",
      image: "/Jupyter Notebook.png",
    },
    {
      name: "NumPy",
      description: "Numerical Computing Library",
      image: "/Numpy.png",
    },
    {
      name: "Pandas",
      description: "Data Manipulation Library",
      image: "/Pandas.png",
    },
    {
      name: "Matplotlib",
      description: "Plotting Library",
      image: "/Matplotlib.png",
    },
    {
      name: "Scikit-learn",
      description: "Machine Learning Library",
      image: "/Scikit-Learn (Sklearn).png",
    },
    {
      name: "TensorFlow",
      description: "Machine Learning Framework",
      image: "/Tensorflow.png",
    },
    {
      name: "Seaborn",
      description: "Statistical Visualization",
      image: "/Seaborn.png",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        যেসব ট্যুলস ও টেকনোলোজি শিখবেন
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 h-max rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col items-center">
              <Image
                width={32}
                height={32}
                src={tool.image}
                alt={`${tool.name} logo`}
                className="object-contain mb-4"
              />
              <h2 className="text-sm font-semibold text-center">{tool.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
