import Image from 'next/image'
import logo1 from '../assets/images/Vitalsigns.png' 

export default function Logo() {
  return (
    <>
      <Image
        src={logo1}
        alt="Vital Signs Logo"
      />
    </>
  )
}