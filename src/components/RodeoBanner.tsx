// import React, { useState, useEffect } from 'react';
// import { Info, AlertTriangle, XCircle, CheckCircle2, Bell, X } from 'lucide-react';
// import './banner.css';

// type BannerType = 'info' | 'warning' | 'error' | 'success' | 'alert';
// type BannerSize = 'large' | 'small';
// type TimerOption = 'none' | '3 sec' | '5 sec' | '10 sec';
// type Alignment = 'left' | 'center' | 'right';

// interface RodeoBannerProps {
//   type?: BannerType;
//   size?: BannerSize;
//   header: string;
//   description?: string;
//   actionText?: string;
//   onAction?: () => void;
//   className?: string;
//   closable?: boolean;
//   timer?: TimerOption;
//   width?: number;
//   alignment?: Alignment;
// }

// const RodeoBanner = ({
//   type = 'info',
//   size = 'large',
//   header,
//   description,
//   actionText,
//   onAction,
//   className = '',
//   closable = true,
//   timer = 'none',
//   width,
//   alignment = 'left'
// }: RodeoBannerProps) => {
//   const [isVisible, setIsVisible] = useState(true);

//   useEffect(() => {
//     if (timer !== 'none') {
//       const timeoutMap = {
//         '3 sec': 3000,
//         '5 sec': 5000,
//         '10 sec': 10000
//       };

//       const timerId = setTimeout(() => {
//         setIsVisible(false);
//       }, timeoutMap[timer]);

//       return () => clearTimeout(timerId);
//     }
//   }, [timer]);

//   const icons = {
//     info: Info,
//     warning: AlertTriangle,
//     error: XCircle,
//     success: CheckCircle2,
//     alert: Bell
//   };

//   const colors = {
//     info: {
//       bg: '#EFF6FF',
//       border: '1px solid #0071E3',
//       color: '#0071E3',
//       icon: '#3B82F6'
//     },
//     warning: {
//       bg: '#FEFCE8',
//       border: '1px solid #FFCC00',
//       color: '#FFCC00',
//       icon: '#D97706'
//     },
//     error: {
//       bg: '#FEE2E2',
//       border: '1px solid #E30000',
//       color: '#E30000',
//       icon: '#EF4444'
//     },
//     success: {
//       bg: '#ECFDF5',
//       border: '1px solid #008009',
//       color: '#008009',
//       icon: '#10B981'
//     },
//     alert: {
//       bg: '#F5F3FF',
//       border: '1px solid #F56300',
//       color: '#F56300',
//       icon: '#8B5CF6'
//     }
//   };

//   const Icon = icons[type];
//   const { bg, border, color, icon } = colors[type];

//   if (!isVisible) return null;

//   return (
//     <div className={`rodeo-banner-container ${alignment}`}>
//       <div
//         className={`rodeo-banner ${type} ${size} ${className}`}
//         style={{
//           ...(width && width > 299 && { width: `${width}px` }),
//         }}
//       >
//         <div className={`rodeo-banner-icon ${type}`}>
//           <Icon className={`rodeo-banner-main-icon ${size}`} fill={color} color={bg} />
//         </div>
//         <div className="rodeo-banner-content">
//           <div className="rodeo-banner-header">
//             <div className="rodeo-banner-text">
//               {size === 'large' && (
//                 <h3 className="rodeo-banner-title">
//                   {header}
//                 </h3>
//               )}
//               {description && (
//                 <p className="rodeo-banner-description">
//                   {description}
//                 </p>
//               )}
//             </div>
//             <div className="rodeo-banner-actions">
//               {actionText && onAction && (
//                 <button
//                   onClick={onAction}
//                   className="rodeo-banner-button"
//                 >
//                   {actionText}
//                 </button>
//               )}
//               {actionText && closable && (
//                 <span className="rodeo-banner-separator">|</span>
//               )}
//               {closable && (
//                 <button
//                   onClick={() => setIsVisible(false)}
//                   className="rodeo-banner-close"
//                   aria-label="Close"
//                 >
//                   <X className="rodeo-banner-close-icon" />
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RodeoBanner;