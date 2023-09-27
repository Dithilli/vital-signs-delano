import Image from 'next/image'
import vitalSigns from '../assets/images/Vitalsigns.svg' 
import tagline from '../assets/images/DesignTagline.svg'
import phoneNumber from '../assets/images/Phone Number.svg'
import combinedLogo from '../assets/images/combinedLogo.svg'

export default function Logo() {
  const styles = {
    vitalSigns :{
      position: 'absolute',
  },
  tagline :{
      position: 'absolute',
  },
  phoneNumber: {
      position: 'absolute'
  },
  container: {
      position: 'relative',
      width: '100%',
      margin: 'auto',
  }
}

  return (
    <>
    <div className={styles.container}>
      <Image
        style={styles.vitalSigns}
        src={combinedLogo}
        alt="Vital Signs Logo"
      />
      </div>
    </>
  )
}