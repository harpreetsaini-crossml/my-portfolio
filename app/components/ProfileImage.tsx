import Image from 'next/image';

export default function ProfileImage() {
  return (
    <div className="relative">
      <div className="relative w-full aspect-[4/5] bg-white p-3 shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <Image
          src="/profile.jpg"
          alt="Profile Image of Harpreet Singh"
          width={480}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-white -z-10 transform -rotate-2"></div>
    </div>
  );
}