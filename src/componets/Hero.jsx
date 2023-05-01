import './Hero.css'
import image from '../assets/image.jpeg'

const Hero = () => {
  return (
    <>
        <div className='hero-container'>
            <div className='left'>
                <p className='btn'>Fullstack Website Developer</p>
                <p className='motto'>Coding Your Imaginations to Life.</p>
                <p className='hero-body'>As a fullstack web developer, my goal is to turn people&apos;s imaginative designs into functional and user-friendly web applications. I bring together my technical skills and creativity to build responsive and dynamic websites that meet your project requirements. Let&apos;s work together to bring your digital vision to life!</p>
                <a href='mailto:pelumiisola87@gmail.com' className='hero-button'>Get In Touch</a>
            </div>

            <div>
                <img className='my-image' src={image} />
            </div>
        </div>
    </>
  )
}

export default Hero