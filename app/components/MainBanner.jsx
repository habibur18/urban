export default function MainBanner() {
  return (
    <div
      style={{
        backgroundSize: "100% 90%",
      }}
      className='bg-[url("/banner.jpg")] bg-contain min-h-[800px] relative'
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-white"
        style={{
          clipPath: "ellipse(75% 100% at 50% 100%)",
        }}
      ></div>
    </div>
  );
}
