import React, { useState, useRef, useLayoutEffect } from 'react'; // Import useState
import { useInView } from 'react-intersection-observer';
import './App.css'; 
import musicFile from '/src/assets/song.mp3';
import { FaMusic, FaPause } from 'react-icons/fa';
import image1 from '/src/assets/1.png';
import image2 from '/src/assets/2.png';
import image3 from '/src/assets/3.png';
import image4 from '/src/assets/4.png';
import image5 from '/src/assets/5.png';
import image6 from '/src/assets/6.png';
import image7 from '/src/assets/7.png';
import isha8 from '/src/assets/isha-8.jpg';
import isha9 from '/src/assets/isha-9.jpg';
import isha10 from '/src/assets/isha-10.jpg';
import isha24 from '/src/assets/isha-24.jpg';
import isha20 from '/src/assets/isha-20.jpg';
import isha29 from '/src/assets/isha-29.jpg';
import isha30 from '/src/assets/isha-30.jpg';
import isha1 from '/src/assets/isha-1.jpg';
import isha5 from '/src/assets/isha-5.jpg';
import isha6 from '/src/assets/isha-6.jpg';
import isha16 from '/src/assets/isha-16.jpg';
import isha12 from '/src/assets/isha-12.jpg';



function InvitationSection({ children, id }) { 
  const { ref, inView } = useInView({
    threshold: 0.5, 
    triggerOnce: true,
  });

  return (
    <section 
      id={id} 
      className={`invitation-section ${inView ? 'is-visible' : ''}`} 
      ref={ref}
    >
      {children}
    </section>
  );
}


function App() {
  // State to manage which "page" to show
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  // State to manage the fade-out animation
  const [isFading, setIsFading] = useState(false);

  // This function will be called when the envelope is clicked
  const handleOpenEnvelope = () => {
    // 1. Trigger the fade-out animation
    setIsFading(true);

    // 2. Wait for the animation to finish (1 second)
    setTimeout(() => {
      // 3. Switch to the main invitation page
      setIsEnvelopeOpen(true);
    }, 1000); // This duration must match the CSS transition!
  };


  const galleryRef = useRef(null);



  const galleryNext = () => {
    if (galleryRef.current) {
      const itemWidth = galleryRef.current.clientWidth;
      galleryRef.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };
  const galleryPrev = () => {
    if (galleryRef.current) {
      const itemWidth = galleryRef.current.clientWidth;
      galleryRef.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  const galleryRef2 = useRef(null);
  const galleryNext2 = () => {
    if (galleryRef2.current) {
      const itemWidth = galleryRef2.current.clientWidth;
      galleryRef2.current.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
  };
  const galleryPrev2 = () => {
    if (galleryRef2.current) {
      const itemWidth = galleryRef2.current.clientWidth;
      galleryRef2.current.scrollBy({ left: -itemWidth, behavior: 'smooth' });
    }
  };

  // music player

   const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(musicFile));

  audioRef.current.loop = true;

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };



  // --- CONDITIONAL RENDERING ---

  // 1. If the envelope is NOT open, show the Envelope Cover
  if (!isEnvelopeOpen) {
    return (
      <div 
        className={`envelope-container ${isFading ? 'fading-out' : ''}`} 
        onClick={handleOpenEnvelope}
      >
        <div className="envelope-wrapper">
          <div className="envelope-flap"></div>
          <div className="envelope-body"><p className='envelope-phrase fleur-de-leah-regular'>Click Me</p></div>
        </div>
      </div>
    );
  }
  

  // 2. If the envelope IS open, show the main Invitation
  return (

    
    <main>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Fleur+De+Leah&family=Gelasio:ital,wght@0,400..700;1,400..700&family=Mea+Culpa&family=Monsieur+La+Doulaise&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Style+Script&family=Tangerine:wght@400;700&family=Updock&display=swap" rel="stylesheet"></link>
      {/* OPENING */}
      <InvitationSection id="section-opening">
        <div className='hero-container transition'>
          <div className='hero-name'>
            <h1 className='pt-serif-regular'>PATRICIA</h1>
            <h3><span className='event-text'>Turns</span> <span className='event-number monsieur-la-doulaise-regular'>18</span></h3>
          </div>
          <div className="music-controls">
            <button className="music-button" onClick={togglePlay}>
              {isPlaying ? <FaPause /> : <FaMusic />} {/* Use the icons here */}
            </button>
          </div>
          <div className='hero-info transition'>
            <p>DEC | 7 | SUN</p>
            <p>6:30 PM</p>
            <p className='ascott'>ASCOTT MAKATI</p>
          </div>
        </div>
        
      </InvitationSection>


      <InvitationSection id="section-invite">
        <div className="invitation-card transition">
          <p className="invitation-phrase monsieur-la-doulaise-regular">You are invited!</p>
          <div className="ornament"></div>
          <h1 className="debutante-name updock-regular">Patricia's 18th</h1>

          <div className="calendar-widget">
              <div className="month-name">DECEMBER</div>
              <table>
                  <thead>
                      <tr>
                          <th>FRI</th>
                          <th>SAT</th>
                          <th>SUN</th>
                          <th>MON</th>
                          <th>TUES</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>5</td>
                          <td>6</td>
                          <td className="highlight-date-wrapper">
                            <span className="highlight-date">7</span>
                          </td>
                          <td>8</td>
                          <td>9</td>
                      </tr>
                  </tbody>
              </table>
          </div>

          <p className="date-time-info"><b>SUNDAY, DECEMBER 7, 2025</b></p>
          <p className="date-time-info"><b>SIX THIRTY IN THE EVENING</b></p>
        </div>
      </InvitationSection>

      <InvitationSection id="section-about">
        <div className='meetDebutant transition'>
          <h1 className='fleur-de-leah-regular'>Meet the Debutant</h1>
          <p>As I turn eighteen, I am excited to spend this special milestone with people who mean the most to me. People who made life meaningful and people I wish to face an exciting new chapter with.</p>
          <p>You are one of the people I cherish, and your presence would make this night even more memorable.</p>
          <p><b><i>Thank you for being part of my story — for celebrating who I am and who I can become. </i></b>May this night reminds us of how precious life is.</p>
        </div>'
      </InvitationSection>

      <InvitationSection id="section-venue">
        <div className='venue-card transition'>
          <h2 className='fleur-de-leah-regular'>Venue</h2>
          <h1 className='gelasio'>Ascott Makati</h1>
          <p><i>Glorietta 4, Ayala Center, Makati City, 1224 Metro Manila</i></p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.841913150523!2d121.02383633601725!3d14.551031285987989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c91b3f665ea7%3A0x552c6cf190be5375!2sAscott%20Makati!5e0!3m2!1sen!2sph!4v1762341954570!5m2!1sen!2sph"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </InvitationSection>
          
      <InvitationSection id="section-roses">
          <div className='roses et-transition'>
            <h1><span className='eighteen monsieur-la-doulaise-regular et-roses'>18</span><span className='et-special mea-culpa-regular'>Roses</span></h1>
            <ul className='roses-list gelasio'><b>
              <li>Ian Guillen</li>
              <li>CJ Guillen</li>
              <li>JR Asuncion</li>
              <li>Rjon Asuncion</li>
              <li>Altheo Asuncion</li>
              <li>Alfredo Asuncion</li>
              <li>Gil Guillen</li>
              <li>Gene Guillen</li>
              <li>Dondi Sayson</li>
              <li>Enzo Garcia</li>
              <li>Jeremiah Salumbides</li>
              <li>Fourth Salumbides</li>
              <li>Third Salumbides</li>
              <li>Fernan Salumbides</li>
              <li>Luis Salumbides</li>
              <li>Manuel Salumbides</li>
              <li>Benedict Pascua</li>
              <li>Robbie Guillen</li></b>
            </ul>
          </div> 
      </InvitationSection>
      
      <InvitationSection id="section-treasures">
          <div className='treasures et-transition'>
            <h1><span className='eighteen monsieur-la-doulaise-regular et-treasures'>18</span><span className='et-special mea-culpa-regular'>Treasures</span></h1>
            <ul className='treasures-list gelasio'><b>
              <li>Dani Del Barrio</li>
              <li>Bea Salumbides</li>
              <li>Cassandra Salumbides</li>
              <li>Lanie Perez</li>
              <li>Ezra Estrañero</li>
              <li>Jazlyn Melo</li>
              <li>Francesca Tudio</li>
              <li>Aviya Framil</li>
              <li>Juvi Escalante</li>
              <li>Naomi Ventanilla</li>
              <li>Dagny Daliva</li>
              <li>Jamila Geslani</li>
              <li>Eileen Vicedor</li>
              <li>Julia Maranan</li>
              <li>Ammi Vergara</li>
              <li>Jacqueline Vasquez</li>
              <li>Justine Camero</li>
              <li>Cassandra Baraan</li></b>
            </ul>
          </div> 
      </InvitationSection>

      <InvitationSection id="section-bills">
        <div className='bills et-transition'>
            <h1><span className='eighteen monsieur-la-doulaise-regular et-bills'>18</span><span className='et-special mea-culpa-regular'>Bills</span></h1>
            <ul className='bills-list gelasio'><b>
              <li>Sarah Almanzor</li>
              <li>Arnold Gandia</li>
              <li>Darneil Perez</li>
              <li>Marissa Salvo</li>
              <li>Susan Bautista</li>
              <li>Grace Carpio Pascual</li>
              <li>Kathryn Alma Manuntag</li>
              <li>Madeline Asuncion</li>
              <li>Elaine Sibal</li>              
              <li>Ria Tagle</li>
              <li>Alexie Tagle</li>
              <li>Ena Salumbides-Barril</li>
              <li>Cherie  Morato-Salumbides</li>
              <li>Fernan Salumbides</li>
              <li>Elizabeth Salumbides</li>
              <li>Veronica Salumbides</li></b>
            </ul>
          </div> 
      </InvitationSection>

      <InvitationSection id="section-dresscode">
        <div className='dresscode-card transition'>
          <h2 className='fleur-de-leah-regular'>Dress Code</h2>
          <p>To match the night's <b><i>enchanted</i></b> theme, come in your <b><i>formal</i></b> and elegant attire</p>
          <h1 className='gelasio'> Color Palette: </h1>
          <span className='colorCircle color1'></span>
          <span className='colorCircle color2'></span>
          <span className='colorCircle color3'></span>
          <span className='colorCircle color4'></span>
          <span className='colorCircle color5'></span>
          <p><i>Note: Kindly avoid wearing casual wear ( jeans, sneakers, or slippers )</i>
          </p>
          <div className='men-outfits'>
            <img src={image1}></img>
            <img src={image2}></img>
            <img src={image3}></img>
          </div>
             <p><b>Gentlemen:</b> Formal suit or dark long sleeve polo and black pants; tie or suit may complement the color palette</p>
          <div className='women-outfits'>
            <img src={image4}></img>
            <img src={image5}></img>
            <img src={image6}></img>
            <img src={image7}></img>
          </div>
             <p><b>Ladies:</b> Long dress or skirt that match the color palette; Plain or patterned</p>
        </div>
      </InvitationSection>

      <InvitationSection id="section-gift">
        <div className='gift-container et-transition'>
          <div className='gift-registry'>
            <h1 className='fleur-de-leah-regular'>Gift Registry</h1>
            <p><b><i>Your presence on my special day is already the greatest gift I could ever ask for.</i></b></p>
            <p>But if you wish to share something more, you may choose to give a <b>monetary gift</b>, browse through my <b>gift registry </b>below, or honor me a gift that we have a <b>personal connection</b> to.</p>
            <a href='https://www.thingstogetme.com/1893778a63c24' target='_blank'><button><p className='gift-link'>Gift Registry</p></button></a>
          </div>
        </div>
        
      </InvitationSection>

      <InvitationSection id="section-reminders">
        <div className='reminders-card transition'>
          <h2 className='fleur-de-leah-regular'>Reminders</h2>
          <h1><b>ARRIVAL TIME</b></h1>
          <p>Kindly arrive on or before 6:30 PM to allow enough time for registration, photos, and guest seating</p>
          <h1><b>PLUS ONES AND KIDS</b></h1>
          <p>This is an invitation-only event. Please refrain from bringing a plus one and children</p>
          <h1><b>18 SPECIALS</b></h1>
          <p>Pay attention to the flow of the program and be ready when it's your time to be called on stage</p>
          <h1><b>18 ROSES</b></h1>
          <p>Gentlemen participating in the 18 Roses are requested to wear a tuxedo or formal suit</p>
        </div>
      </InvitationSection>

      <InvitationSection id="section-landscape-gallery">
        <div className='gallery-wrapper'>
          <h2 className='fleur-de-leah-regular'>Gallery</h2>
          <div className='landscape-gallery-container gallery-container transition' tabindex="0" ref={galleryRef}>
          <div className='landscape-gallery-item'>
            <img src={isha12}></img>
          </div>
          <div className='landscape-gallery-item'>
            <img src={isha8}></img>
          </div>
          <div className='landscape-gallery-item'>
            <img src={isha9}></img>
          </div>
          <div className='landscape-gallery-item'>
            <img src={isha10}></img>
          </div>
          <div className='landscape-gallery-item'>
            <img src={isha24}></img>
          </div>
          <div className='landscape-gallery-item'>
            <img src={isha20}></img>
          </div>
          <div className='landscape-gallery-item'>
            <img src={isha29}></img>
          </div>
          <div className='landscape-gallery-item'>
            <img src={isha30}></img>
          </div>
          </div>
            <button class="gallery-nav-btn prev-btn" aria-label="Previous image" onClick={galleryPrev}>‹</button>
            <button class="gallery-nav-btn next-btn" aria-label="Next image" onClick={galleryNext}>›</button>
        </div>
        
      </InvitationSection>

      <InvitationSection id="section-portrait-gallery">
        <div className='gallery-wrapper'>
          <div className='portrait-gallery-container transition' tabindex="0" ref={galleryRef2}>
          <div className='portrait-gallery-item'>
            <img src={isha1}></img>
          </div>
          <div className='portrait-gallery-item'>
            <img src={isha5}></img>
          </div>
          <div className='portrait-gallery-item'>
            <img src={isha6}></img>
          </div>
          <div className='portrait-gallery-item'>
            <img src={isha16}></img>
          </div>

        </div>
        <button class="gallery-nav-btn prev-btn" aria-label="Previous image" onClick={galleryPrev2}>‹</button>
          <button class="gallery-nav-btn next-btn" aria-label="Next image" onClick={galleryNext2}>›</button>
        </div>
        
      </InvitationSection>

    </main>
  );
}

export default App;