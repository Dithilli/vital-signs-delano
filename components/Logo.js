import Image from 'next/image'
import vitalSigns from '../assets/images/Vitalsigns.svg' 
import tagline from '../assets/images/DesignTagline.svg'
import phoneNumber from '../assets/images/Phone Number.svg'
import styles from './Footer.module.css'

export default function Logo() {
  return (
    <>
      <Image
        className={styles.vitalSigns}
        src={vitalSigns}
        alt="Vital Signs Logo"
      />
      <Image
        className={styles.tagline}
        src={tagline}
        alt="Vital Signs Logo"
      />
        <Image
        className={styles.phoneNumber}
        src={phoneNumber}
        alt="Vital Signs Logo"
      />
    </>
  )
}