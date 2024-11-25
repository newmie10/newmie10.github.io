// // AnimatedButton.js
// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// // import { motion } from 'framer-motion';

// function AnimatedButton() {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     // Add a delay to allow the animation to play before routing
//     setTimeout(() => {
//       navigate('/projects'); // Replace '/projects' with your desired route
//     }, 4000); // Delay matches the animation duration
//   };

//   return (
//     <motion.div
//       whileTap={{ scale: 0.9, rotate: 5 }}
//       transition={{ duration: 0.3 }}
//       style={{
//         display: 'inline-block',
//         padding: '10px 20px',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         borderRadius: '5px',
//         textAlign: 'center',
//         cursor: 'pointer',
//         marginTop: '20px',
//       }}
//       onClick={handleClick}
//     >
//       Go to Projects
//     </motion.div>
//   );
// }

// export default AnimatedButton;
