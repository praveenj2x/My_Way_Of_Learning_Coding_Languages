import Image from 'next/image';

export default function Home() {
  return (
<div >
<Image
  src="/assets/logo.png"
  alt="Logo"
  width={1000}
  height={1000}
/>  
</div>
  );
}
