import Link from "next/link";
import Image from "next/image";
export default function FirstPost() {
  return (
    <>
      <h1>My Profile</h1>
      <Image
        src="/images/profile.jpg"
        height={144}
        width={144}
        alt="My Profile"
      />
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}
