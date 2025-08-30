
import { motion } from 'framer-motion';
import './HeroSections.css';


const HeroSections = () => {
  return (
    <div className="wrapper">
      <div className="sections">
        <section className="hero dark-hero">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="hero-title">技術とビジネスを横断する</h1>
            <p className="hero-text light-text">
              私は将来的に、技術とビジネスの両面からプロダクトを牽引できる人材になりたいと考えています。具体的には、フルスタックエンジニアとしての幅広い技術知識をベースに、将来的にはプロダクトマネジメントや企画領域にも関わりたいと考えています。
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default HeroSections;