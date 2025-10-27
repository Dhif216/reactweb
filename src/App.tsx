import "./App.css";
import Orb from './Orb'; 
import SplitText from './SplitText'; 
import Magnet from './Magnet';
import SkillsProgress from './SkillsProgress'; 
import { StaggeredMenu } from './StaggeredMenu'; 
import InfiniteMenu from './InfiniteMenu'; 

// Links and Socials for the Menu
const MENU_ITEMS = [
    { label: "Home", ariaLabel: "Go to Home section", link: "#home" },
    { label: "About", ariaLabel: "Learn about Mouadh Dhif", link: "#about-section" },
    { label: "Projects", ariaLabel: "View featured work", link: "#projects-section" },
    { label: "Contact", ariaLabel: "Get in touch with Mouadh", link: "#contact-section" },
];

const SOCIAL_ITEMS = [
    { label: "LinkedIn", ariaLabel: "Visit LinkedIn profile", link: "https://linkedin.com/in/dhif-mouadh" },
    { label: "Dribbble", ariaLabel: "Visit Dribbble profile", link: "https://dribbble.com/dhif-mouadh" },
    { label: "GitHub", ariaLabel: "Visit GitHub profile", link: "https://github.com/dhif216" },
];

// Using stable placeholder links
const PROJECTS_DATA = [
    { image: 'https://via.placeholder.com/512/00ffff/000000?text=Movies', 
        link: 'https://dhif216.github.io/movies/', 
        title: 'Movie Streaming UI', description: 'Entertainment Design' },
    
    { image: 'https://via.placeholder.com/512/ff00ff/000000?text=Website', 
        link: 'https://dhif216.github.io/website/', 
        title: 'Modern Website', description: 'Responsive Web Development' },
    
    { image: 'https://via.placeholder.com/512/ffff00/000000?text=Hipped', 
        link: 'https://dhif216.github.io/hippi/', 
        title: 'Hippi Site', description: 'E-commerce Redesign & Branding' },
    
    { image: 'https://via.placeholder.com/512/00ff00/000000?text=Gamer', 
        link: 'https://dhif216.github.io/gamer/', 
        title: 'Gamer Hub', description: 'Social Platform UX/UI' },
    
    { image: 'https://via.placeholder.com/512/0000ff/000000?text=Tour', 
        link: 'https://dhif216.github.io/Local-Horse-Tour-Website-Redesign/', 
        title: 'Horse Tour Booking', description: 'Local Business Website Redesign' },
    
    { image: 'https://via.placeholder.com/512/ff8000/000000?text=Portfolio', 
        link: 'https://dhif216.github.io/portfolio.v1/', 
        title: 'Portfolio V1', description: 'Initial Self-Branding Project' },
];

function App() {
    const handleAnimationComplete = () => {
        console.log('Dhif Mouadh header animation complete!');
    };
    
    return (
        <div className="App">
            
            {/* Orb Background Container (Outer Wrapper) */}
            <div style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100vh', 
                zIndex: -1,
                pointerEvents: 'none', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
            }}>
                <div style={{ 
                    width: '90vmin',   
                    height: '90vmin', 
                    maxWidth: '1000px', 
                    maxHeight: '1000px',
                    pointerEvents: 'auto' 
                }}>
                    <Orb
                        hoverIntensity={0.5}
                        rotateOnHover={true}
                        hue={0}
                        forceHoverState={false}
                    />
                </div>
            </div>
            
            {/* 🟢 STAGGERED MENU INTEGRATION */}
            <StaggeredMenu
                items={MENU_ITEMS}
                socialItems={SOCIAL_ITEMS}
                displayItemNumbering={true}
                accentColor="#64b5f6" 
                position="right"
                isFixed={true}
            />
            
            {/* Hero Section */}
            <header id="home" className="hero-section"> 
                <div className="hero-content">
                    <div className="profile-photo-placeholder">
                        <img src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="Mouadh Dhif Profile" />
                    </div>
                    <SplitText text="Mouadh" className="designer-name-mouadh" tag="h1" delay={150} duration={0.7} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} threshold={0.1} textAlign="center" onLetterAnimationComplete={handleAnimationComplete} />
                    <SplitText text="Dhif" className="designer-name-dhif stacked" tag="h1" delay={150} duration={0.7} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 30 }} to={{ opacity: 1, y: 0 }} threshold={0.1} textAlign="center" />
                    <SplitText text="UX/UI Designer & Creative Technologist" className="designer-role-text" tag="h3" delay={80} duration={0.5} ease="power2.out" splitType="words" from={{ opacity: 0, x: -20 }} to={{ opacity: 1, x: 0 }} threshold={0.1} textAlign="center"/>
                    <Magnet padding={50} disabled={false} magnetStrength={8} wrapperClassName="cta-magnet-wrapper" innerClassName="cta-magnet-inner">
                        <button className="cta-button">View My Work</button>
                    </Magnet>
                </div>
            </header>
            
            {/* About Section */}
            <section id="about-section" className="about-section">
                <div className="about-content">
                    <SplitText text="About Dhif Mouadh" className="about-header" tag="h2" delay={50} duration={0.5} splitType="words" from={{ opacity: 0, y: 20 }} to={{ opacity: 1, y: 0 }} threshold={0.3} textAlign="left"/>
                    <SplitText text="I'm a UX/UI Designer driven by the synergy of beautiful aesthetics and intuitive functionality. My process translates complex problems into elegant, accessible, and high-performing digital solutions." className="about-paragraph" tag="p" delay={10} duration={0.2} ease="power2.out" splitType="words" from={{ opacity: 0, x: -10 }} to={{ opacity: 1, x: 0 }} threshold={0.3} rootMargin="200px" textAlign="left" />
                    <div className="skills-showcase-container">
                        <SkillsProgress />
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects-section" className="projects-section full-viewport-projects">
                <div className="projects-header-wrapper">
                    <SplitText
                        text="Featured Projects"
                        className="projects-main-header"
                        tag="h2"
                        delay={50}
                        duration={0.5}
                        splitType="words"
                        from={{ opacity: 0, y: 20 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.9} 
                        textAlign="center"
                    />
                </div>

                {/* 🟢 CRITICAL RESTORATION: The 3D component is back here */}
                <div className="projects-grid infinite-menu-container">
                    <InfiniteMenu items={PROJECTS_DATA} /> 
                </div>
            </section>

            {/* 🟢 CONTACT SECTION (Final Content Placement) */}
            <section id="contact-section" className="contact-section">
                <div className="contact-content">
                    <SplitText
                        text="Get in Touch"
                        className="contact-header"
                        tag="h2"
                        delay={50}
                        duration={0.5}
                        splitType="words"
                        from={{ opacity: 0, y: 20 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.9} 
                        textAlign="center"
                    />

                    <p className="contact-subtext">
                        Have a project in mind or just want to say hello? Send me a message!
                    </p>

                    <form className="contact-form" 
                          action="YOUR_FORMSPREE_ENDPOINT" // ⬅️ CRITICAL: Replace with your actual Formspree URL
                          method="POST">
                        <input
                            type="email"
                            placeholder="Your Email Address"
                            className="form-input"
                            name="_replyto"
                            required
                        />
                        <textarea
                            placeholder="Your Message..."
                            className="form-textarea"
                            name="message"
                            rows={5}
                            required
                        />
                        <button type="submit" className="cta-button form-submit-btn">
                            Send Message
                        </button>
                    </form>

                    <div className="contact-info">
                        <p>Direct Email: <a href="mailto:dhif_mouadh@hotmail.fr" className="contact-link">dhif_mouadh@hotmail.fr</a></p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/dhif-mouadh" target="_blank" rel="noopener noreferrer" className="contact-link">/in/dhif-mouadh</a></p>
                    </div>

                </div>
            </section>

            {/* Footer Section */}
            <footer id="contact-footer" className="footer-section"> 
                <p>© {new Date().getFullYear()} Mouadh Dhif. All rights reserved.</p>
                <p>Built with React 2025.</p>
            </footer>
        </div>
    );
}

export default App;