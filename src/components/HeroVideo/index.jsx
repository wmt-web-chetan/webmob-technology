

export default function HeroVideo() {


  return (
    <div className="w-full flex justify-center">
      <video
        className="object-cover  h-full"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/bgHero.webp"
      >
        <source src="/hero.webm" type="video/webm" />
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
