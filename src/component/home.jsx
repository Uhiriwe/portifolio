import olivine from '../assets/olivine.png'
import uhiriwe from '../assets/uhiriwe.png'
//  import graph from '../assets/graph.png'
import traffic from '../assets/traffic.png'
import contact from '../assets/contact.png'
import gmail from '../assets/gmail.png'
import instagram from '../assets/instagram.png'
import twitter from '../assets/twitter.png'

function Home() {
  return (
    <div className='homepage' >
      <div className='content'>
        <div className='paragraph' data-aos="fade-up"
          data-aos-duration="3000">
          <h1><b>Hi!</b></h1>
          <div className='typewriter-text'>
            <h1><b className='bold'>I'm </b> MBANGUTSE Olivine,</h1>
          </div>
          <p className='white'> a passionate software engineer with a strong foundation from my university studies. I specialize in developing innovative software solutions, leveraging my expertise in coding, problem-solving, and teamwork.</p>
          <div className='buttons' >
            <button className='btns'>Hire me</button>
            <button className='btn'>My works</button>
          </div>
        </div>
        <img data-aos="fade-up"
          data-aos-duration="3000" className='homeimage' src={olivine} />
      </div>


      <div className='about'>
        <div className='about_paragraph' data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h1 id='about' className='about_title'>ABOUT ME!</h1><br />
          <p className='white'> I'm a software engineer specializing in full-stack development. With a strong academic background in software engineering, I possess a comprehensive skill set encompassing both frontend and backend technologies. On the frontend, I excel in crafting intuitive and engaging user interfaces using<b className='bold'> HTML</b>, <b className='bold'>CSS</b>, and <b className='bold'>JavaScript</b> frameworks like <b className='bold'>React</b>. On the backend, I'm proficient in designing robust server-side architectures and implementing scalable solutions using languages such as <b className='bold'> Node.js</b>, <b className='bold'>PHP</b> and <b className='bold'> Python</b>. My experience in database management and API development allows me to seamlessly integrate frontend and backend components, creating cohesive and efficient web applications. With a passion for innovation and problem-solving, I'm committed to delivering high-quality software solutions that meet the needs of clients and users alike.</p></div>
        <div>
          <img data-aos="fade-up"
            data-aos-duration="3000" className='profile' src={uhiriwe} />
        </div>
      </div>
      <h1 className='skills'>Skills</h1>
      <div className='divisions'>

        <div className='div' data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h2>PYTHON</h2>
          <p className='white'>I have a strong proficiency in Python, a versatile and powerful programming language.</p>
          <h1 className='bold'>69%</h1>
        </div>
        <div className='div' data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          <h2>PHP</h2>
          <p className='white'>I have a solid proficiency in PHP, a widely-used server-side scripting language for web development.</p>
          <h1 className='bold'>80%</h1>

        </div>
        <div className='div' data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h2>CSS</h2>
          <p className='white'>I have a strong proficiency in CSS (Cascading Style Sheets), the language used for styling web pages.</p>
          <h1 className='bold'>100%</h1>
        </div>
        <div className='div' data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h2>Javascript</h2>
          <p className='white'>I possess advanced skills in JavaScript, the programming language of the web, particularly within the context of React, a popular JavaScript library for building user interfaces</p>
          <h1 className='bold'>50%</h1>
        </div>
        <div className='div' data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0">
          <h2>node.js</h2>
          <p className='white'>I possess advanced skills in Node.js, a powerful runtime environment for server-side JavaScript development. </p>
          <h1 className='bold'>40%</h1>
        </div>
        <div className='div' data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <h2>Mysqli</h2>
          <p className='white'>I possess advanced skills in MySQLi, an extension of PHP that provides an interface to the MySQL database server. </p>
          <h1 className='bold'>80%</h1>
        </div>
      </div>
      <h1 id='portifolio' className='skills'>Projects</h1>
      <div data-aos="fade-up"
        data-aos-duration="3000" className='div_project'>

        <div>
          <img data-aos="fade-up"
            data-aos-duration="3000" className='img_project' src={traffic} />
        </div>
        <div data-aos="fade-up"
          data-aos-duration="3000" className='element_project'>
          <p><b>Name</b>: Traffic Huck</p>
          <p><b>Role</b>: Traffic Management</p>
          <p><b>Technologies</b>: React,Django </p>
          <p><b>Description</b>: A Traffic Management System (TMS) is a comprehensive solution designed to manage various aspects of traffic flow, congestion, safety, and efficiency on roadways, highways, and urban streets. These systems utilize a combination of hardware, software, sensors, communication networks, and data analytics to monitor, control, and optimize traffic operations in real-time.  </p>
          <p><b>Hosted link</b>: click here</p>
          <p><b>Github link</b>: click herje</p>
          <p><b>Developer</b>: Olivine <b className='bold'>Mbangutse</b></p>
        </div>
      </div>

      <div data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000" className='resume'>
        <h1 id='resume' className='skills'>Resume</h1>
        <p className='paragraph_resume'> I'm Full stack developer, i did my high school in software development and i'm current student in AUCA (Adventist University in Central Africa) software engineering.I did my enternaship in pixel ink LTD and also i got my exparience in IDA technology.
          The exparience I gained from IDA includes python using  django framework,JavaScript using React, PHP, MySQLi and alse CSS,Tailwind as styling language ...</p>
        <div className='button_resume'>
          <button className='btn'>Download CV</button>
        </div>

      </div>
      <h1 id='contact' className='skills'>Contact Us</h1>
      <div className='icon_contact'>
        <div>
          <img data-aos="fade-up"
            data-aos-anchor-placement="bottom-center" className='icon_size' src={contact} />
          <p>+250791032369</p>
        </div>
        <div>
          <img data-aos="fade-up"
            data-aos-anchor-placement="bottom-center" className='icon_size' src={gmail} />
          <p>olivineuhiriwe2001@gmail.com</p>
        </div>
        <div>
          <img data-aos="fade-up"
            data-aos-anchor-placement="bottom-center" className='icon_size' src={instagram} />
          <p>uhiriwe__250</p>
        </div>
        <div>
          <img className='icon_size' src={twitter} />
          <p>olivine_250</p>
        </div>
      </div>
      <h1 className='skills'>Send Message</h1>
      <div>
        <form className="form">
          <input data-aos="fade-left"
            data-aos-duration="3000" type="text" name="full name" placeholder="enter your full name" /><br /><br />
          <input data-aos="fade-right"
            data-aos-duration="3000" type="email" name="email" placeholder=" enter your email" />
          <br /><br />
          <textarea data-aos="fade-left"
            data-aos-duration="3000" className="area" placeholder="your massage here!"></textarea><br /><br />
          <div className='button_form'>
            <button className='send'><h3>SEND</h3></button>
          </div>
        </form>

      </div>
      <hr className='hr' />
      <div className='footer'>
        <p className='copy'>&copy; 2024 Mbangutse olivine. All rights reserved.</p>
      </div>


    </div>
  )
}

export default Home