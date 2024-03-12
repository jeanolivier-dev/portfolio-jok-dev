import "./services.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: 0,
    y: 0,
    opacity: 1,
  },

  aninate: {
    x: 0,
    opacity: 0,
    y: 0,
    transtition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer">
        <p>
          Mon objectif est daider votre marque <br /> à se développer et à aller
          de lavant
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            Des idées <b>originales</b>
          </h1>
        </div>
        <div className="title">
          <h1>
            pour votre <b>entreprise</b>
          </h1>
          <button>Demandez un devis</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            eius, porro dolorem incidunt assumenda nulla culpa qui tempora
            labore dignissimos quae esse molestias eveniet vitae error?
          </p>
          <button>En savoir plus...</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            eius, porro dolorem incidunt assumenda nulla culpa qui tempora
            labore dignissimos quae esse molestias eveniet vitae error?
          </p>
          <button>En savoir plus...</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            eius, porro dolorem incidunt assumenda nulla culpa qui tempora
            labore dignissimos quae esse molestias eveniet vitae error?
          </p>
          <button>En savoir plus...</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
            eius, porro dolorem incidunt assumenda nulla culpa qui tempora
            labore dignissimos quae esse molestias eveniet vitae error?
          </p>
          <button>En savoir plus...</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
