import React, { useState, useEffect } from 'react';
import { Info, AlertTriangle, XCircle, CheckCircle2, Bell, X } from 'lucide-react';

const styles = `
  .rodeo-toast-container {
    position: fixed;
    top: 60px;
    right: 20px;
    z-index: 1000;
    max-width: calc(100vw - 40px);
    width: auto;
    animation: slideIn 0.3s ease-out forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .rodeo-banner {
    display: flex;
    align-items: center;
    min-width: 310px;
    max-width: 100%;
    border-radius: 6px;
    padding: 0 22px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .rodeo-banner.large {
    min-height: 66px;
  }

  .rodeo-banner.small {
    min-height: 42px;
  }

  .rodeo-banner-icon {
    flex-shrink: 0;
    margin-right: 12px;
  }

  .rodeo-banner-content {
    flex: 1;
    min-width: 0;
  }

  .rodeo-banner-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .rodeo-banner-text {
    color: #1F2937;
  }

  .rodeo-banner-title {
    font-weight: 500;
    font-size: 17px;
    line-height: 20px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .rodeo-banner-description {
    font-size: 14px;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .rodeo-banner-actions {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
  }

  .rodeo-banner-button {
    font-size: 14px;
    padding: 2px 12px;
    font-weight: 500;
    color: #1F2937;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 4px;
    background-color: transparent;
    white-space: nowrap;
  }

  .rodeo-banner-separator {
    font-size: 26px;
    color: lightgray;
    margin: 0 10px;
    flex-shrink: 0;
  }

  .rodeo-banner-close {
    color: #6B7280;
    cursor: pointer;
    margin-left: 4px;
    background-color: transparent;
    border: none;
    padding: 0;
    flex-shrink: 0;
  }

  /* Color variants */
  .rodeo-banner.info {
    background-color: #EFF6FF;
    border: 1px solid #0071E3;
  }

  .rodeo-banner.warning {
    background-color: #FEFCE8;
    border: 1px solid #FFCC00;
  }

  .rodeo-banner.error {
    background-color: #FEE2E2;
    border: 1px solid #E30000;
  }

  .rodeo-banner.success {
    background-color: #ECFDF5;
    border: 1px solid #008009;
  }

  .rodeo-banner.alert {
    background-color: #F5F3FF;
    border: 1px solid #F56300;
  }

  /* Icon colors */
  .rodeo-banner-icon.info {
    color: #3B82F6;
  }

  .rodeo-banner-icon.warning {
    color: #D97706;
  }

  .rodeo-banner-icon.error {
    color: #EF4444;
  }

  .rodeo-banner-icon.success {
    color: #10B981;
  }

  .rodeo-banner-icon.alert {
    color: #8B5CF6;
  }

  .rodeo-banner-main-icon {
    height: 24px;
    width: 24px;
    flex-shrink: 0;
  }

  .rodeo-banner-main-icon.large {
    height: 32px;
    width: 32px;
  }

  .rodeo-banner-close-icon {
    height: 20px;
    width: 20px;
  }
`;

type BannerType = 'info' | 'warning' | 'error' | 'success' | 'alert';
type BannerSize = 'large' | 'small';
type TimerOption = 'none' | '3 sec' | '5 sec' | '10 sec' | '30 sec';

interface RodeoToastProps {
  header: string;
  timer?: TimerOption;
  description?: string;
  actionText?: string;
  onAction?: () => void;
  className?: string;
  closable?: boolean;
  width?: number;
  type?: BannerType;
  size?: BannerSize;
}

const RodeoToast = ({
  type = 'info',
  size = 'large',
  header,
  description,
  actionText,
  onAction,
  className = '',
  closable = true,
  timer = '5 sec',
  width,
}: RodeoToastProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [calculatedWidth, setCalculatedWidth] = useState<number | undefined>(width);

  useEffect(() => {
    if (width && width > 299) {
      const maxAvailableWidth = window.innerWidth - 40; // 20px padding on each side
      setCalculatedWidth(Math.min(width, maxAvailableWidth));
    }
  }, [width]);

  useEffect(() => {
    if (timer !== 'none') {
      const timeoutMap = {
        '3 sec': 3000,
        '5 sec': 5000,
        '10 sec': 10000,
        '30 sec': 30000,
      };
      const timerId = setTimeout(() => setIsVisible(false), timeoutMap[timer]);
      return () => clearTimeout(timerId);
    }
  }, [timer]);

  const icons = {
    info: Info,
    warning: AlertTriangle,
    error: XCircle,
    success: CheckCircle2,
    alert: Bell
  };

  const colors = {
    info: {
      bg: '#EFF6FF',
      border: '1px solid #0071E3',
      color: '#0071E3',
      icon: '#3B82F6'
    },
    warning: {
      bg: '#FEFCE8',
      border: '1px solid #FFCC00',
      color: '#FFCC00',
      icon: '#D97706'
    },
    error: {
      bg: '#FEE2E2',
      border: '1px solid #E30000',
      color: '#E30000',
      icon: '#EF4444'
    },
    success: {
      bg: '#ECFDF5',
      border: '1px solid #008009',
      color: '#008009',
      icon: '#10B981'
    },
    alert: {
      bg: '#F5F3FF',
      border: '1px solid #F56300',
      color: '#F56300',
      icon: '#8B5CF6'
    }
  };

  const Icon = icons[type];
  const { bg, color } = colors[type];

  if (!isVisible) return null;

  return (
    <>
      <style>{styles}</style>
      <div className="rodeo-toast-container">
        <div
          className={`rodeo-banner ${type} ${size} ${className}`}
          style={{
            width: calculatedWidth ? `${calculatedWidth}px` : undefined,
          }}
        >
          <div className={`rodeo-banner-icon ${type}`}>
            <Icon className={`rodeo-banner-main-icon ${size}`} fill={color} color={bg} />
          </div>
          <div className="rodeo-banner-content">
            <div className="rodeo-banner-header">
              <div className="rodeo-banner-text">
                {size === 'large' && (
                  <h3 className="rodeo-banner-title" title={header}>
                    {header}
                  </h3>
                )}
                {description && (
                  <p className="rodeo-banner-description" title={description}>
                    {description}
                  </p>
                )}
              </div>
              <div className="rodeo-banner-actions">
                {actionText && onAction && (
                  <button
                    onClick={onAction}
                    className="rodeo-banner-button"
                  >
                    {actionText}
                  </button>
                )}
                {actionText && closable && (
                  <span className="rodeo-banner-separator">|</span>
                )}
                {closable && (
                  <button
                    onClick={() => setIsVisible(false)}
                    className="rodeo-banner-close"
                    aria-label="Close"
                  >
                    <X className="rodeo-banner-close-icon" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RodeoToast;